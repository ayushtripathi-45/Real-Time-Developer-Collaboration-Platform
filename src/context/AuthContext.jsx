import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const STORAGE_KEY = 'devcollab_users';
const SESSION_KEY = 'devcollab_session';

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(SESSION_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }, [user]);

  const signup = (username, email, password) => {
    const users = loadUsers();
    if (users[email]) {
      return { ok: false, error: 'An account with this email already exists.' };
    }
    if (users[username]) {
      return { ok: false, error: 'This username is already taken.' };
    }
    users[email] = { username, email, password };
    saveUsers(users);
    const newUser = { username, email };
    setUser(newUser);
    return { ok: true, user: newUser };
  };

  const login = (email, password) => {
    const users = loadUsers();
    const account = users[email];
    if (!account) {
      return { ok: false, error: 'No account found with this email.' };
    }
    if (account.password !== password) {
      return { ok: false, error: 'Incorrect password.' };
    }
    const sessionUser = { username: account.username, email: account.email };
    setUser(sessionUser);
    return { ok: true, user: sessionUser };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
