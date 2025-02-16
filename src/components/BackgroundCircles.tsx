export default function BackgroundCircles() {
  return (
    <>
      {/* Right side circles */}
      <div className="fixed right-0 h-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={`right-${i}`}
            className="absolute right-[-100px] bg-white/10 rounded-full"
            style={{
              width: '300px',
              height: '300px',
              top: `${i * 150}px`,
              opacity: 0.1,
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: `${i % 2 === 0 ? 'floatUp' : 'floatDown'} ${8 + i}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
      
      {/* Left side circles */}
      <div className="fixed left-0 h-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={`left-${i}`}
            className="absolute left-[-100px] bg-white/10 rounded-full"
            style={{
              width: '300px',
              height: '300px',
              top: `${i * 150}px`,
              opacity: 0.1,
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: `${i % 2 === 0 ? 'floatDown' : 'floatUp'} ${8 + i}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}
