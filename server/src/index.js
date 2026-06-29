import express from 'express';
import cors from 'cors';
import { config as dotEnvConfig } from 'dotenv';
import mongoose from 'mongoose';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import Room from '../models/Room.js';

// Load environment variables
dotEnvConfig();

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const app = express();
app.use(cors());
app.use(express.json());

// Utility to generate 6‑character room code
function generateRoomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// API to create a new room
app.post('/api/rooms', async (req, res) => {
  try {
    // Generate a unique code. Retry on collision.
    let code;
    let exists = true;
    while (exists) {
      code = generateRoomCode();
      exists = await Room.exists({ code });
    }
    const newRoom = await Room.create({ code });
    res.json({ roomCode: newRoom.code });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// API to join a room (validate existence and receive username)
app.post('/api/rooms/:code/join', async (req, res) => {
  const { code } = req.params;
  const { username } = req.body;
  if (!username || !username.trim()) {
    return res.status(400).json({ error: 'Username is required' });
  }
  const room = await Room.findOne({ code });
  if (!room) {
    return res.status(404).json({ error: 'Room not found' });
  }
  // For a simple prototype we just return success. In a full app you'd track users.
  res.json({ success: true, roomCode: room.code, username: username.trim() });
});

const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log(`Socket connected: ${socket.id}`);
  socket.on('disconnect', () => console.log(`Socket disconnected: ${socket.id}`));
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
