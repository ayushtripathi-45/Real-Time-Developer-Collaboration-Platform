export default function Workspace({ username, roomCode }) {
  // placeholder for real-time collaboration logic – e.g., websockets/
  // For now just display a simple message
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#07080d] bg-grid-mesh p-4">
      <h1 className="text-4xl font-semibold text-white mb-4">Welcome, {username}</h1>
      <p className="text-slate-300">You have joined room <span className="font-mono font-bold">{roomCode}</span></p>
      <p className="text-slate-400 mt-6">Realtime collaboration UI comes next.</p>
    </div>
  );
}
