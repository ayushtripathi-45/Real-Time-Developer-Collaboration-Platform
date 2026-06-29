function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  const raw = name.trim();
  return raw.length >= 2 ? raw.slice(0, 2).toUpperCase() : raw[0].toUpperCase();
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

function getColors(name) {
  const h = hashString(name || '') % 360;
  return {
    from: `hsl(${h}, 70%, 45%)`,
    to: `hsl(${(h + 40) % 360}, 65%, 55%)`,
  };
}

export default function Avatar({ name, size = 'md', className = '' }) {
  const initials = getInitials(name);
  const { from, to } = getColors(name);

  const sizeMap = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-xl',
  };

  return (
    <div
      title={name || 'User'}
      className={`${sizeMap[size] || sizeMap.md} rounded-xl flex items-center justify-center font-bold text-white shadow-lg shrink-0 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      {initials}
    </div>
  );
}
