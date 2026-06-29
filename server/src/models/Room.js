import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Room', roomSchema);
