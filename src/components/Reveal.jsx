import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '', type = 'up', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const typeClass = type === 'up' ? 'reveal-up' : type === 'down' ? 'reveal-down' : type === 'scale' ? 'reveal-scale' : '';

  return (
    <Tag ref={ref} className={`reveal ${typeClass} ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </Tag>
  );
}

export function RevealStagger({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal-stagger ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </Tag>
  );
}

export function RevealStaggerItem({ children, className = '', as: Tag = 'div' }) {
  return <Tag className={`reveal-stagger-item ${className}`}>{children}</Tag>;
}
