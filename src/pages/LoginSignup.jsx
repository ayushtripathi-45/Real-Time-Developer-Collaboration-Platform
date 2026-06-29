import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Code2, Mail, Lock, User, Eye, EyeOff, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';
import Avatar from '../components/Avatar.jsx';
import Reveal from '../components/Reveal.jsx';
import PageBackground from '../components/PageBackground.jsx';

export default function LoginSignup() {
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const [mode, setMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setError('');
  };

  const switchMode = () => {
    setMode((m) => (m === 'login' ? 'signup' : 'login'));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = form;

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (mode === 'signup') {
      if (!username.trim()) {
        setError('Please choose a username.');
        return;
      }
      if (username.trim().length < 2) {
        setError('Username must be at least 2 characters.');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters.');
        return;
      }
      const result = signup(username.trim(), email.trim(), password);
      if (!result.ok) {
        setError(result.error);
        return;
      }
    } else {
      const result = login(email.trim(), password);
      if (!result.ok) {
        setError(result.error);
        return;
      }
    }
    navigate(from, { replace: true });
  };

  const isLogin = mode === 'login';

  return (
    <PageBackground className="min-h-0 flex items-center justify-center p-4">
      <div className="w-full max-w-md z-10">
        <Reveal type="down" delay={100}>
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-purple/20 mb-4 hover-lift">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              {isLogin ? 'Welcome Back' : 'Join DevCollab'}
            </h1>
            <p className="text-slate-400 text-sm mt-2">
              {isLogin ? 'Sign in to continue coding together' : 'Create your account and start collaborating'}
            </p>
          </div>
        </Reveal>

        <Reveal type="up" delay={200}>
          <div className="glass-panel rounded-3xl p-8 glow-purple transition-all duration-300 hover-glow">
            {mode === 'signup' && form.username.trim() && (
              <div className="flex flex-col items-center mb-6 animate-fade-in">
                <div className="hover-lift">
                  <Avatar name={form.username.trim()} size="xl" />
                </div>
                <span className="text-sm text-slate-400 mt-2">{form.username.trim()}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider text-left">
                    Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      value={form.username}
                      onChange={handleChange('username')}
                      placeholder="Choose a display name"
                      maxLength={20}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider text-left">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider text-left">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={handleChange('password')}
                    placeholder={isLogin ? 'Enter your password' : 'At least 6 characters'}
                    className="w-full pl-10 pr-11 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer hover:scale-110 active:scale-90"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
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
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-400">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button
                  onClick={switchMode}
                  className="text-brand-cyan hover:text-cyan-300 font-semibold transition-colors cursor-pointer hover:underline"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal type="up" delay={300}>
          <p className="text-center text-xs text-slate-500 mt-8 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            No personal data is stored on servers. Your data stays on your device.
          </p>
        </Reveal>
      </div>
    </PageBackground>
  );
}
