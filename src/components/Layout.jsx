import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FloatingIcons from './FloatingIcons.jsx';

export default function Layout() {
  const location = useLocation();
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#07080d] flex flex-col relative">
      <FloatingIcons />
      <Navbar />
      <main className="flex-1 pt-16 relative z-10">
        <div key={animKey} className="animate-page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
