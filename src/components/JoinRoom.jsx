import React, { useState } from 'react';
import { Code2, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

export default function JoinRoom({ onJoin }) {
  const [username, setUsername] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [error, setError] = useState('');

  const generateRoomCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRoomCode(code);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }
    if (!roomCode.trim() || roomCode.length !== 6) {
      setError('Room code must be exactly 6 characters');
      return;
    }
    setError('');
    onJoin({ username: username.trim(), roomCode: roomCode.trim().toUpperCase() });
  };

  return (
    <div className="relative min-h-screen bg-[#07080d] bg-grid-mesh flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[120px] animate-float-medium"></div>

      <div className="w-full max-w-md z-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-purple/20 mb-4 animate-bounce-slow">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            DevCollab
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Real-time coding & brainstorm cockpit
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-panel rounded-3xl p-8 glow-purple transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-6 text-left">
            Get Started
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Input */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider text-left">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. hackerman"
                maxLength={16}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
              />
            </div>

            {/* Room Code Input & Generate Button */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="roomCode" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider text-left">
                  Room Code
                </label>
                <button
                  type="button"
                  onClick={generateRoomCode}
                  className="text-xs font-semibold text-brand-cyan hover:text-cyan-300 flex items-center gap-1 transition-colors focus:outline-none"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Generate Code
                </button>
              </div>
              <input
                id="roomCode"
                type="text"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                placeholder="6-character code"
                maxLength={6}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 font-mono tracking-widest text-center focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 text-rose-500 text-sm p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-left">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.98] shadow-lg shadow-brand-purple/20 transition-all cursor-pointer"
            >
              <span>Join Workspace</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-slate-500 mt-8">
          No sign-in or installation required. Powered by WebSockets.
        </p>
      </div>
    </div>
  );
}
