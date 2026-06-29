import { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Code2, ArrowRight, Sparkles, AlertCircle, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';
import Avatar from '../components/Avatar.jsx';
import Reveal from '../components/Reveal.jsx';
import PageBackground from '../components/PageBackground.jsx';

export default function JoinRoomPage() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [roomCode, setRoomCode] = useState(searchParams.get('room') || '');
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
    if (!isAuthenticated) {
      navigate('/auth', { state: { from: '/join' } });
      return;
    }
    if (!roomCode.trim() || roomCode.length !== 6) {
      setError('Room code must be exactly 6 characters');
      return;
    }
    setError('');
    navigate(`/workspace/${roomCode.trim().toUpperCase()}`, {
      state: { username: user.username },
    });
  };

  return (
    <PageBackground className="min-h-0 flex items-center justify-center p-4">
      <div className="w-full max-w-md z-10">
        <Reveal type="down" delay={100}>
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-purple/20 mb-4 hover-lift">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              DevCollab
            </h1>
            <p className="text-slate-400 text-sm mt-2">
              Real-time coding & brainstorm cockpit
            </p>
          </div>
        </Reveal>

        <Reveal type="up" delay={200}>
          <div className="glass-panel rounded-3xl p-8 glow-purple transition-all duration-300 hover-glow">
            {isAuthenticated ? (
              <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-cyan/20 transition-all">
                <Avatar name={user.username} size="md" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{user.username}</p>
                  <p className="text-xs text-slate-500 truncate">{user.email}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 hover:border-amber-500/20 transition-all">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <LogIn className="w-4 h-4 text-amber-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-amber-300">Not signed in</p>
                  <p className="text-xs text-slate-500">Sign in to join or create a room</p>
                </div>
              </div>
            )}

            <h2 className="text-2xl font-semibold text-white mb-6 text-left">
              Join Workspace
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="roomCode" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider text-left">
                    Room Code
                  </label>
                  <button
                    type="button"
                    onClick={generateRoomCode}
                    className="text-xs font-semibold text-brand-cyan hover:text-cyan-300 flex items-center gap-1 transition-colors focus:outline-none cursor-pointer hover:scale-105 active:scale-95"
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

              {error && (
                <Reveal type="up">
                  <div className="flex items-center gap-2 text-rose-500 text-sm p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-left">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                </Reveal>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold flex items-center justify-center gap-2 btn-primary shadow-lg shadow-brand-purple/20 cursor-pointer"
              >
                <span>{isAuthenticated ? 'Join Workspace' : 'Sign In to Continue'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {!isAuthenticated && (
              <div className="mt-5 text-center">
                <p className="text-sm text-slate-400">
                  New here?{' '}
                  <Link to="/auth" className="text-brand-cyan hover:text-cyan-300 font-semibold transition-colors hover:underline">
                    Create an account
                  </Link>
                </p>
              </div>
            )}
          </div>
        </Reveal>

        {isAuthenticated && (
          <Reveal type="up" delay={300}>
            <p className="text-center text-xs text-slate-500 mt-8">
              Enter a room code above or generate one to start a new session.
            </p>
          </Reveal>
        )}
      </div>
    </PageBackground>
  );
}
