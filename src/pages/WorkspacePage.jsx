import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Workspace from '../components/Workspace.jsx';

export default function WorkspacePage() {
  const { roomCode } = useParams();
  const location = useLocation();
  const username = location.state?.username || 'Anonymous';

  return (
    <div className="min-h-screen bg-[#07080d] flex flex-col">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-[#07080d]/80 backdrop-blur-xl">
        <Link
          to="/join"
          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Leave
        </Link>
        <div className="w-px h-5 bg-white/10" />
        <span className="text-sm text-slate-400">Room:</span>
        <span className="text-sm font-mono font-bold text-white tracking-wider">{roomCode}</span>
        <div className="w-px h-5 bg-white/10" />
        <span className="text-sm text-slate-400">Logged in as:</span>
        <span className="text-sm font-semibold text-brand-cyan">{username}</span>
      </div>
      <div className="flex-1">
        <Workspace username={username} roomCode={roomCode} />
      </div>
    </div>
  );
}
