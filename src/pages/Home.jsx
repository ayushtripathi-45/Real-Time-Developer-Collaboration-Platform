import { Link } from 'react-router-dom';
import {
  Users, Shield, ArrowRight, Sparkles,
  Globe, MessageSquare, Play, Terminal, GitBranch, Cpu,
} from 'lucide-react';
import Reveal, { RevealStagger, RevealStaggerItem } from '../components/Reveal.jsx';
import PageBackground from '../components/PageBackground.jsx';

const features = [
  { icon: Terminal, title: 'Live Code Editor', desc: 'Multi-cursor editing with syntax highlighting across 50+ languages. See changes in real-time.' },
  { icon: MessageSquare, title: 'Integrated Chat', desc: 'Discuss code inline with threaded messages, markdown support, and code snippets.' },
  { icon: GitBranch, title: 'Version Snapshots', desc: 'Auto-save checkpoints let you rewind time. Never lose a change again.' },
  { icon: Users, title: 'Collaborative Cursor', desc: 'See who is typing what, where, and when. Awareness without the noise.' },
  { icon: Shield, title: 'Encrypted Rooms', desc: 'End-to-end encryption ensures your code stays yours. Private by default.' },
  { icon: Globe, title: 'Cross-Platform', desc: 'Works in any browser. No installs, no setup, no friction.' },
];

const stats = [
  { label: 'Active Developers', value: '12K+' },
  { label: 'Rooms Created', value: '85K+' },
  { label: 'Lines of Code', value: '4.2M+' },
  { label: 'Uptime', value: '99.9%' },
];

export default function Home() {
  return (
    <PageBackground className="min-h-0">
      {/* Hero */}
      <section className="relative flex items-center justify-center px-4 pt-32 pb-16 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal type="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-8 hover:border-brand-cyan/30 transition-all duration-300 hover-lift">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              Real-time collaboration is here
            </div>
          </Reveal>

          <Reveal type="up" delay={200}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Code Together,
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-cyan bg-clip-text text-transparent text-gradient-shimmer">
                in Real Time
              </span>
            </h1>
          </Reveal>

          <Reveal type="up" delay={350}>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              DevCollab is a collaborative coding cockpit for remote teams, pair programming,
              and technical interviews. No setup, just a link.
            </p>
          </Reveal>

          <Reveal type="up" delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/join"
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold text-lg flex items-center gap-2 btn-primary shadow-xl shadow-brand-purple/20"
              >
                Start Coding Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 font-semibold text-lg flex items-center gap-2 btn-secondary"
              >
                <Play className="w-5 h-5" />
                Explore Features
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative px-4 pb-16">
        <Reveal type="scale" delay={100}>
          <div className="max-w-5xl mx-auto">
            <div className="glass-panel rounded-3xl p-8 sm:p-12 grid grid-cols-2 sm:grid-cols-4 gap-8 glow-purple">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center hover-lift">
                  <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section className="relative px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal type="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Everything you need to{' '}
                <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">collaborate</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Built for developers who want to code together without the overhead.
              </p>
            </div>
          </Reveal>

          <RevealStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <RevealStaggerItem key={feature.title}>
                    <div className="group glass-panel rounded-2xl p-6 hover-glow hover:translate-y-[-4px] transition-all duration-300">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  </RevealStaggerItem>
                );
              })}
            </div>
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 pb-32">
        <Reveal type="scale" delay={100}>
          <div className="max-w-4xl mx-auto">
            <div className="relative glass-panel rounded-3xl p-12 sm:p-16 text-center overflow-hidden glow-cyan hover-glow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[100px]" />

              <div className="relative z-10">
                <Cpu className="w-12 h-12 text-brand-cyan mx-auto mb-6 hover:rotate-12 transition-transform duration-300" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to build together?
                </h2>
                <p className="text-slate-400 max-w-lg mx-auto mb-8">
                  Create or join a room in seconds. No account required.
                </p>
                <Link
                  to="/join"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold text-lg btn-primary shadow-xl shadow-brand-purple/20"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageBackground>
  );
}
