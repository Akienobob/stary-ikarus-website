import { useState, useEffect } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

type SunExpression = 'calm' | 'thoughtful' | 'frowning' | 'eyes-moving';

export default function AnimatedLogo({ className = '' }: AnimatedLogoProps) {
  const [sunExpression, setSunExpression] = useState<SunExpression>('calm');
  const [isHovering, setIsHovering] = useState(false);

  // Auto-cycle sun expression every 3 seconds
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setSunExpression((prev) => {
        const expressions: SunExpression[] = ['calm', 'thoughtful', 'frowning', 'eyes-moving'];
        const currentIndex = expressions.indexOf(prev);
        return expressions[(currentIndex + 1) % expressions.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const busImageUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/2oQO3tGXi7zNBCr2MefI6f/sandbox/TXILKf9xlXHwwn5pWKeekj-img-1_1772084339000_na1fn_YnVzLXdpdGgtd2luZ3MtcHJvZmVzc2lvbmFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMm9RTzN0R1hpN3pOQkNyMk1lZkk2Zi9zYW5kYm94L1RYSUxLZjl4bFhId3duNXBXS2Vla2otaW1nLTFfMTc3MjA4NDMzOTAwMF9uYTFmbl9ZblZ6TFhkcGRHZ3RkMmx1WjNNdGNISnZabVZ6YzJsdmJtRnMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eoCKDPBkillf3ojfjesOR7HSDidKh5edXqRW-OXmsd-sys0~2h7EicHwrbeY-VeiX5bknfj0FKuxcxDCaom1vyZMejViFfl6Ht5mszQnlkvZi5PZHOkXUd4yauhLXkH6UDQJrtJbOe0f6zV9yveZjo3oiz8g31aB3x0w1V8uy9d5jnWiDvwQvY5E~Ot7zx9Foz5~GmIu5A8spWJi13~zjILPNczEbU721BS~5UBCyyr6yhQq9SVs~6QIQG9Irk5Xxc2P-VAasqAp20qjgqhUNMEY86hdiPUqPK4z83JEVH95qAtTs~hOsbeTXDgYPho5rX0CJJrjkbfg3sLQmNRBGQ__';

  return (
    <div 
      className={`relative w-full h-80 ${className} bg-gradient-to-b from-background via-background to-background/80 overflow-hidden flex items-center justify-center`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setSunExpression('calm');
      }}
    >
      <svg
        viewBox="0 0 1800 400"
        className="w-full h-full absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: 'none' }}
      >
        <defs>
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#FFE066', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 0.9 }} />
          </radialGradient>
          <filter id="sunGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <style>{`
            @keyframes busFloat {
              0% { transform: translateX(-600px); }
              50% { transform: translateX(1200px); }
              100% { transform: translateX(-600px); }
            }
            .bus-flying {
              animation: busFloat 16s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Sun with rays - top right */}
        <g id="sunRays">
          {Array.from({ length: 32 }).map((_, i) => (
            <line
              key={`ray-${i}`}
              x1="1550"
              y1="120"
              x2="1550"
              y2="60"
              stroke="#D4AF37"
              strokeWidth="2.5"
              opacity="0.85"
              transform={`rotate(${i * 11.25} 1550 180)`}
            />
          ))}
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 1550 180"
            to="360 1550 180"
            dur="20s"
            repeatCount="indefinite"
          />
        </g>

        {/* Sun circle */}
        <circle cx="1550" cy="180" r="80" fill="url(#sunGradient)" filter="url(#sunGlow)" />

        {/* Sun face - calm */}
        {sunExpression === 'calm' && (
          <>
            <circle cx="1520" cy="155" r="12" fill="#2C3E50" />
            <circle cx="1523" cy="152" r="5" fill="white" />
            <circle cx="1580" cy="155" r="12" fill="#2C3E50" />
            <circle cx="1583" cy="152" r="5" fill="white" />
            <path
              d="M 1520 195 Q 1550 215 1580 195"
              stroke="#2C3E50"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Sun face - thoughtful */}
        {sunExpression === 'thoughtful' && (
          <>
            <circle cx="1520" cy="155" r="12" fill="#2C3E50" />
            <circle cx="1520" cy="148" r="5" fill="white" />
            <circle cx="1580" cy="155" r="12" fill="#2C3E50" />
            <circle cx="1580" cy="148" r="5" fill="white" />
            <line x1="1520" y1="200" x2="1580" y2="200" stroke="#2C3E50" strokeWidth="5" strokeLinecap="round" />
          </>
        )}

        {/* Sun face - frowning */}
        {sunExpression === 'frowning' && (
          <>
            <circle cx="1520" cy="155" r="12" fill="#2C3E50" />
            <circle cx="1520" cy="152" r="5" fill="white" />
            <circle cx="1580" cy="155" r="12" fill="#2C3E50" />
            <circle cx="1580" cy="152" r="5" fill="white" />
            <path
              d="M 1520 200 Q 1550 180 1580 200"
              stroke="#2C3E50"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Sun face - eyes moving (smiling when hovering) */}
        {(sunExpression === 'eyes-moving' || isHovering) && (
          <>
            <circle cx="1520" cy="155" r="12" fill="#2C3E50" />
            <circle cx="1525" cy="152" r="5" fill="white" />
            <circle cx="1580" cy="155" r="12" fill="#2C3E50" />
            <circle cx="1575" cy="152" r="5" fill="white" />
            <path
              d="M 1520 195 Q 1550 220 1580 195"
              stroke="#2C3E50"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Greek meander patterns - top and bottom */}
        <g stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.5">
          {/* Top meander */}
          {Array.from({ length: 18 }).map((_, i) => (
            <g key={`meander-top-${i}`}>
              <path d={`M ${i * 100 + 20} 20 L ${i * 100 + 35} 20 L ${i * 100 + 35} 35 L ${i * 100 + 20} 35`} />
            </g>
          ))}
          {/* Bottom meander */}
          {Array.from({ length: 18 }).map((_, i) => (
            <g key={`meander-bottom-${i}`}>
              <path d={`M ${i * 100 + 20} 360 L ${i * 100 + 35} 360 L ${i * 100 + 35} 375 L ${i * 100 + 20} 375`} />
            </g>
          ))}
        </g>
      </svg>

      {/* Bus image - animated */}
      <div className="bus-flying absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={busImageUrl}
          alt="Stary Ikarus Bus with Wings"
          className="h-48 object-contain drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 4px 8px rgba(212, 175, 55, 0.3))' }}
        />
      </div>
    </div>
  );
}
