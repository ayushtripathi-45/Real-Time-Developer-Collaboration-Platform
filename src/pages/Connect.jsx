import { Link } from 'react-router-dom';
import {
  Search, Users, ArrowRight,
  ExternalLink, Code2, Wifi,
} from 'lucide-react';
import { useState } from 'react';
import Reveal, { RevealStagger, RevealStaggerItem } from '../components/Reveal.jsx';
import PageBackground from '../components/PageBackground.jsx';

const activeRooms = [
  { code: 'ABC123', users: 3, language: 'JavaScript', status: 'active' },
  { code: 'XYZ789', users: 2, language: 'Python', status: 'active' },
  { code: 'DEF456', users: 5, language: 'TypeScript', status: 'active' },
  { code: 'GHI012', users: 1, language: 'Rust', status: 'idle' },
];

export default function Connect() {
  const [search, setSearch] = useState('');

  const filtered = activeRooms.filter(
    (r) => r.code.toLowerCase().includes(search.toLowerCase()) || r.language.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageBackground className="min-h-0">
      {/* Hero */}
      <section className="relative px-4 pt-32 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal type="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-6 hover:border-brand-cyan/30 transition-all duration-300 hover-lift">
              <Wifi className="w-4 h-4 text-brand-cyan" />
              Discover Active Rooms
            </div>
          </Reveal>
          <Reveal type="up" delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Connect with
              </span>{' '}
              <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                Developers
              </span>
            </h1>
          </Reveal>
          <Reveal type="up" delay={350}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Browse public rooms, search by language or code, and jump into a session.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Search & Rooms */}
      <section className="relative px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <Reveal type="scale" delay={100}>
            <div className="glass-panel rounded-3xl p-6 sm:p-8 glow-purple">
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by room code or language..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                />
              </div>

              <RevealStagger>
                <div className="space-y-3">
                  {filtered.map((room) => (
                    <RevealStaggerItem key={room.code}>
                      <Link
                        to={`/join?room=${room.code}`}
                        className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-cyan/30 transition-all group hover:translate-y-[-2px]"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${room.status === 'active' ? 'bg-green-500 shadow-sm shadow-green-500/50' : 'bg-slate-500'}`} />
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-white tracking-wider">{room.code}</span>
                              <span className="text-xs text-slate-500">{room.language}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {room.users} {room.users === 1 ? 'user' : 'users'}
                              </span>
                              <span className={`capitalize ${room.status === 'active' ? 'text-green-400' : 'text-slate-500'}`}>
                                {room.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    </RevealStaggerItem>
                  ))}

                  {filtered.length === 0 && (
                    <div className="text-center py-12 text-slate-500">
                      <Search className="w-8 h-8 mx-auto mb-3 opacity-50" />
                      <p className="text-sm">No rooms match your search.</p>
                    </div>
                  )}
                </div>
              </RevealStagger>
            </div>
          </Reveal>

          <Reveal type="up" delay={300}>
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500 mb-4">Want to start your own session?</p>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold btn-primary shadow-lg shadow-brand-purple/20"
              >
                <Code2 className="w-4 h-4" />
                Create a Room
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageBackground>
  );
}
