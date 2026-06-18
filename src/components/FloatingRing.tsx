export default function FloatingRing() {
  return (
    <div className="float-geo relative w-56 h-56 flex items-center justify-center shrink-0">
      {/* Outer ring */}
      <div
        className="ring-outer absolute w-52 h-52 rounded-full border-2"
        style={{
          borderColor: 'rgba(79, 142, 247, 0.55)',
          boxShadow: '0 0 24px rgba(79, 142, 247, 0.35), inset 0 0 24px rgba(79, 142, 247, 0.08)',
        }}
      />

      {/* Middle ring */}
      <div
        className="ring-inner absolute w-36 h-36 rounded-full border"
        style={{
          borderColor: 'rgba(79, 142, 247, 0.40)',
          boxShadow: '0 0 16px rgba(79, 142, 247, 0.25)',
        }}
      />

      {/* Inner core dot */}
      <div
        className="absolute w-4 h-4 rounded-full"
        style={{
          background: '#4F8EF7',
          boxShadow: '0 0 20px rgba(79, 142, 247, 0.9), 0 0 40px rgba(79, 142, 247, 0.5)',
        }}
      />

      {/* Orbit dot on outer ring */}
      <div
        className="absolute w-2.5 h-2.5 rounded-full"
        style={{
          background: '#4F8EF7',
          top: '4px',
          left: '50%',
          transform: 'translateX(-50%)',
          boxShadow: '0 0 10px rgba(79, 142, 247, 0.8)',
        }}
      />

      {/* Second orbit dot */}
      <div
        className="absolute w-2 h-2 rounded-full"
        style={{
          background: 'rgba(79, 142, 247, 0.7)',
          bottom: '4px',
          left: '50%',
          transform: 'translateX(-50%)',
          boxShadow: '0 0 8px rgba(79, 142, 247, 0.6)',
        }}
      />
    </div>
  );
}
