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

  const busImageUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/2oQO3tGXi7zNBCr2MefI6f/sandbox/hodScfJvvrjYR0aD8LePQL_1772084777460_na1fn_YnVzLXRyYW5zcGFyZW50LWNsZWFu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMm9RTzN0R1hpN3pOQkNyMk1lZkk2Zi9zYW5kYm94L2hvZFNjZkp2dnJqWVIwYUQ4TGVQUUxfMTc3MjA4NDc3NzQ2MF9uYTFmbl9ZblZ6TFhSeVlXNTpjR0Z5Wlc1MExXTnNaV0Z1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=H~7wPkU3TAU1AE-hMxa9vE9sZNcQuo63srSaKIYz8lyVnvcbGFO-Dg-cCOnoRghT2S093KwoHXQPTHpE0KUO4-207wOdZC9QEgVu1~0thfTtjpnr1qdDJ2xKOpRsBI-4uApkXNCQgYNAguz-b86ngZG~ortV00mznNi-daLZLSDGj0HXAeHuMkHJHmhwflpYNbnV2~nDRX8vzHsxkTT6Tx8A1bBEsR8QdJWCrUhKm6N63seNUbHxDppDSqrkuooo7YmGz~sEjEo4QN0g0AcE8VCC9mj-Kq~QpXwiVeOOhx~WQdXTAPODYE1Y1yFsSTOCA1PWnEQcIywYH8t~T8d3Lg__';

  return (
    <div 
      className={`relative w-full h-96 ${className} bg-gradient-to-b from-background via-background to-background/80 overflow-hidden flex items-center justify-center`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setSunExpression('calm');
      }}
    >
      <style>{`
        @keyframes busFloat {
          0% { 
            left: -15%;
            transform: scaleX(1);
          }
          35% { 
            left: 60%;
            transform: scaleX(1);
          }
          50% { 
            left: 60%;
            transform: scaleX(-1);
          }
          85% { 
            left: -15%;
            transform: scaleX(-1);
          }
          100% { 
            left: -15%;
            transform: scaleX(1);
          }
        }
        
        .bus-flying {
          animation: busFloat 16s ease-in-out infinite;
        }
        
        @keyframes sunRaysRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .sun-rays {
          animation: sunRaysRotate 20s linear infinite;
          transform-origin: center;
        }
      `}</style>

      {/* Background SVG with sun and decorations */}
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
        </defs>

        {/* Sun with rays - top right */}
        <g className="sun-rays">
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
        </g>

        {/* Sun circle */}
        <circle cx="1550" cy="180" r="80" fill="url(#sunGradient)" filter="url(#sunGlow)" />

        {/* Sun face - calm */}
        {sunExpression === 'calm' && (
          <>
            <circle cx="1520" cy="160" r="8" fill="#2C3E50" />
            <circle cx="1580" cy="160" r="8" fill="#2C3E50" />
            <path
              d="M 1520 195 Q 1550 210 1580 195"
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
            <circle cx="1520" cy="160" r="8" fill="#2C3E50" />
            <circle cx="1580" cy="160" r="8" fill="#2C3E50" />
            <path
              d="M 1520 195 Q 1550 200 1580 195"
              stroke="#2C3E50"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Sun face - frowning */}
        {sunExpression === 'frowning' && (
          <>
            <circle cx="1520" cy="160" r="8" fill="#2C3E50" />
            <circle cx="1580" cy="160" r="8" fill="#2C3E50" />
            <path
              d="M 1520 200 Q 1550 185 1580 200"
              stroke="#2C3E50"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Sun face - eyes moving */}
        {sunExpression === 'eyes-moving' && (
          <>
            <circle cx="1515" cy="160" r="8" fill="#2C3E50" />
            <circle cx="1585" cy="160" r="8" fill="#2C3E50" />
            <path
              d="M 1520 195 Q 1550 215 1580 195"
              stroke="#2C3E50"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Hovering smile */}
        {isHovering && (
          <>
            <circle cx="1520" cy="160" r="8" fill="#2C3E50" />
            <circle cx="1580" cy="160" r="8" fill="#2C3E50" />
            <path
              d="M 1520 190 Q 1550 220 1580 190"
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
      <img
        src={busImageUrl}
        alt="Stary Ikarus Bus with Wings"
        className="bus-flying absolute h-48 object-contain drop-shadow-lg"
        style={{ 
          filter: 'drop-shadow(0 4px 8px rgba(212, 175, 55, 0.3))',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      />
    </div>
  );
}
