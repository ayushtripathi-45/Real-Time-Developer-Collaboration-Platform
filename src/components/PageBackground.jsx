export default function PageBackground({ children, className = '' }) {
  return (
    <div className={`relative min-h-[calc(100vh-4rem)] bg-[#07080d] bg-grid-mesh overflow-hidden ${className}`}>
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[150px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/15 rounded-full blur-[150px] animate-float-medium pointer-events-none" />
      <div className="absolute top-3/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-pink/10 rounded-full blur-[120px] animate-float-medium pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-cyan/10 rounded-full blur-[100px] animate-float-slow pointer-events-none" />
      {children}
    </div>
  );
}
