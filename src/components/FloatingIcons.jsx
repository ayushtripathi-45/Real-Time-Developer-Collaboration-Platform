import { Code2, Terminal, Cpu, Globe, GitBranch, Zap, Shield, Sparkles, Database, Cloud, Server, Wifi, Monitor, Braces, Layers, Box } from 'lucide-react';

const iconTypes = [Code2, Terminal, Cpu, Globe, GitBranch, Zap, Shield, Sparkles, Database, Cloud, Server, Wifi, Monitor, Braces, Layers, Box];

const colors = [
  'text-brand-purple/25',
  'text-brand-cyan/25',
  'text-brand-pink/20',
  'text-brand-purple/20',
  'text-brand-cyan/20',
  'text-brand-pink/25',
];

const animations = ['animate-float-1', 'animate-float-2', 'animate-float-3', 'animate-float-4'];

const positions = [
  { top: '5%', left: '3%' }, { top: '8%', left: '22%' }, { top: '3%', left: '45%' },
  { top: '6%', left: '65%' }, { top: '10%', left: '85%' }, { top: '15%', left: '12%' },
  { top: '18%', left: '35%' }, { top: '22%', left: '55%' }, { top: '12%', left: '75%' },
  { top: '25%', left: '8%' }, { top: '30%', left: '28%' }, { top: '28%', left: '50%' },
  { top: '35%', left: '70%' }, { top: '32%', left: '90%' }, { top: '40%', left: '5%' },
  { top: '45%', left: '18%' }, { top: '42%', left: '40%' }, { top: '48%', left: '60%' },
  { top: '50%', left: '80%' }, { top: '55%', left: '10%' }, { top: '58%', left: '30%' },
  { top: '62%', left: '48%' }, { top: '60%', left: '72%' }, { top: '68%', left: '88%' },
  { top: '72%', left: '6%' }, { top: '75%', left: '25%' }, { top: '78%', left: '45%' },
  { top: '82%', left: '65%' }, { top: '85%', left: '15%' }, { top: '90%', left: '50%' },
  { top: '88%', left: '78%' }, { top: '92%', left: '35%' },
];

const sizes = [14, 16, 18, 20, 22, 24, 26, 28];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {positions.map((pos, i) => {
        const Icon = iconTypes[i % iconTypes.length];
        const color = colors[i % colors.length];
        const anim = animations[i % animations.length];
        const size = sizes[i % sizes.length];
        return (
          <Icon
            key={i}
            className={`absolute ${color} ${anim}`}
            size={size}
            style={{ top: pos.top, left: pos.left, opacity: 0.7 }}
          />
        );
      })}
    </div>
  );
}
