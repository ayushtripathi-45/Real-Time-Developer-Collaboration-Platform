import { Link } from 'react-router-dom';
import { Code2, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#07080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                DevCollab
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-md">
              Real-time collaborative coding environment for developers, teams, and classrooms.
              Code together, brainstorm, and build in sync.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Platform</h3>
            <div className="space-y-2.5">
              <Link to="/" className="block text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 hover-lift inline-block">Home</Link>
              <Link to="/about" className="block text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 hover-lift inline-block">Explore</Link>
              <Link to="/connect" className="block text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 hover-lift inline-block">Connect</Link>
              <Link to="/join" className="block text-sm text-slate-500 hover:text-white transition-colors hover:translate-x-1 hover-lift inline-block">Join Room</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Community</h3>
            <div className="space-y-2.5">
              <a href="#" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-all hover:translate-x-1 hover-lift">
                <ExternalLink className="w-4 h-4" /> GitHub
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-all hover:translate-x-1 hover-lift">
                <ExternalLink className="w-4 h-4" /> Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} DevCollab. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span className="hover:text-slate-400 transition-colors">Built with React + WebSockets</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="hover:text-slate-400 transition-colors">Open source</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
