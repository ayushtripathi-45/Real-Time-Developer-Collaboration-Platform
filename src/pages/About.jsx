import { Link } from 'react-router-dom';
import {
  Users, Shield, Globe, MessageSquare,
  Terminal, GitBranch, ArrowRight, Sparkles,
} from 'lucide-react';
import Reveal, { RevealStagger, RevealStaggerItem } from '../components/Reveal.jsx';
import PageBackground from '../components/PageBackground.jsx';

const highlights = [
  { icon: Terminal, title: 'Multi-Language Editor', desc: 'Syntax highlighting for JavaScript, Python, Java, Go, Rust, and 50+ languages.' },
  { icon: Users, title: 'Real-Time Sync', desc: 'Powered by WebSockets — every keystroke is synced instantly across all participants.' },
  { icon: MessageSquare, title: 'Built-in Chat', desc: 'Discuss without leaving the editor. Supports markdown and inline code blocks.' },
  { icon: GitBranch, title: 'Change History', desc: 'Auto-saved snapshots let you review or restore any previous state of your code.' },
  { icon: Shield, title: 'Privacy First', desc: 'No accounts, no tracking. Rooms are ephemeral and encrypted in transit.' },
  { icon: Globe, title: 'Zero Setup', desc: 'Works in any modern browser. Share a 6-character code and start coding immediately.' },
];

const workflow = [
  { step: '01', title: 'Create or Join', desc: 'Generate a room code or enter one shared by a teammate.' },
  { step: '02', title: 'Share the Link', desc: 'Send the 6-character code to anyone — they join instantly.' },
  { step: '03', title: 'Code in Sync', desc: 'Edit together with real-time cursors, chat, and version history.' },
];

export default function About() {
  return (
    <PageBackground className="min-h-0">
      {/* Hero */}
      <section className="relative px-4 pt-32 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal type="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-6 hover:border-brand-purple/30 transition-all duration-300 hover-lift">
              <Sparkles className="w-4 h-4 text-brand-purple" />
              About DevCollab
            </div>
          </Reveal>
          <Reveal type="up" delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Built for
              </span>{' '}
              <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">
                Seamless Collaboration
              </span>
            </h1>
          </Reveal>
          <Reveal type="up" delay={350}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              DevCollab is an open-source, real-time collaborative coding platform designed for
              remote teams, pair programming, coding interviews, and classroom settings.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <RevealStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <RevealStaggerItem key={item.title}>
                    <div className="glass-panel rounded-2xl p-6 hover-glow hover:translate-y-[-4px] transition-all duration-300">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </RevealStaggerItem>
                );
              })}
            </div>
          </RevealStagger>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <Reveal type="up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How It{' '}
                <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-slate-400">Three simple steps to start collaborating.</p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {workflow.map((item, i) => (
              <Reveal key={item.step} type="up" delay={i * 150}>
                <div className="glass-panel rounded-2xl p-6 flex items-start gap-5 hover-glow hover:translate-y-[-2px] transition-all duration-300">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 flex items-center justify-center">
                    <span className="text-sm font-bold bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">
                      {item.step}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <Reveal type="up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powered By
              </h2>
            </div>
          </Reveal>

          <Reveal type="scale">
            <div className="glass-panel rounded-3xl p-8 sm:p-12 glow-purple">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {[
                  { label: 'React', color: 'text-cyan-400' },
                  { label: 'Vite', color: 'text-yellow-400' },
                  { label: 'WebSocket', color: 'text-green-400' },
                  { label: 'Node.js', color: 'text-green-300' },
                  { label: 'Tailwind', color: 'text-sky-400' },
                  { label: 'Lucide', color: 'text-slate-300' },
                ].map((tech) => (
                  <div key={tech.label} className="text-center hover-lift">
                    <div className={`text-lg font-bold ${tech.color}`}>{tech.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 pb-32">
        <Reveal type="up">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold text-lg btn-primary shadow-xl shadow-brand-purple/20"
            >
              Try It Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageBackground>
  );
}
