import { useState, useEffect } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

type SunExpression = 'calm' | 'thoughtful' | 'frowning' | 'eyes-moving';

export default function AnimatedLogo({ className = '' }: AnimatedLogoProps) {
  const [sunExpression, setSunExpression] = useState<SunExpression>('calm');

  // Auto-cycle sun expression every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSunExpression((prev) => {
        const expressions: SunExpression[] = ['calm', 'thoughtful', 'frowning', 'eyes-moving'];
        const currentIndex = expressions.indexOf(prev);
        return expressions[(currentIndex + 1) % expressions.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full h-96 ${className} bg-gradient-to-b from-background via-background to-background/80 overflow-hidden flex items-center justify-center`}>
      <svg
        viewBox="0 0 1600 500"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      >
        <defs>
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#FFE066', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 0.9 }} />
          </radialGradient>
          <filter id="sunGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sun with rays - top right */}
        <g id="sunRays">
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={`ray-${i}`}
              x1="1350"
              y1="80"
              x2="1350"
              y2="40"
              stroke="#D4AF37"
              strokeWidth="3"
              opacity="0.8"
              transform={`rotate(${i * 15} 1350 150)`}
            />
          ))}
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 1350 150"
            to="360 1350 150"
            dur="20s"
            repeatCount="indefinite"
          />
        </g>

        {/* Sun circle */}
        <circle cx="1350" cy="150" r="70" fill="url(#sunGradient)" filter="url(#sunGlow)" />

        {/* Sun face - calm */}
        {sunExpression === 'calm' && (
          <>
            <circle cx="1325" cy="130" r="10" fill="#2C3E50" />
            <circle cx="1327" cy="128" r="4" fill="white" />
            <circle cx="1375" cy="130" r="10" fill="#2C3E50" />
            <circle cx="1377" cy="128" r="4" fill="white" />
            <path
              d="M 1325 160 Q 1350 175 1375 160"
              stroke="#2C3E50"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Sun face - thoughtful */}
        {sunExpression === 'thoughtful' && (
          <>
            <circle cx="1325" cy="130" r="10" fill="#2C3E50" />
            <circle cx="1325" cy="124" r="4" fill="white" />
            <circle cx="1375" cy="130" r="10" fill="#2C3E50" />
            <circle cx="1375" cy="124" r="4" fill="white" />
            <line x1="1325" y1="165" x2="1375" y2="165" stroke="#2C3E50" strokeWidth="4" strokeLinecap="round" />
          </>
        )}

        {/* Sun face - frowning */}
        {sunExpression === 'frowning' && (
          <>
            <circle cx="1325" cy="130" r="10" fill="#2C3E50" />
            <circle cx="1325" cy="128" r="4" fill="white" />
            <circle cx="1375" cy="130" r="10" fill="#2C3E50" />
            <circle cx="1375" cy="128" r="4" fill="white" />
            <path
              d="M 1325 165 Q 1350 150 1375 165"
              stroke="#2C3E50"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Sun face - eyes moving */}
        {sunExpression === 'eyes-moving' && (
          <>
            <circle cx="1325" cy="130" r="10" fill="#2C3E50" />
            <circle cx="1328" cy="128" r="4" fill="white" />
            <circle cx="1375" cy="130" r="10" fill="#2C3E50" />
            <circle cx="1372" cy="128" r="4" fill="white" />
            <path
              d="M 1325 160 Q 1350 175 1375 160"
              stroke="#2C3E50"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Flying Bus - Dark with golden wings */}
        <g id="flyingBus">
          {/* Left wing - dark with golden accents */}
          <path
            d="M 450 250 Q 350 200 250 230 L 280 260 Q 350 230 450 270 Z"
            fill="none"
            stroke="#2C3E50"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Left wing feathers - golden */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`left-feather-${i}`}
              x1={450 - i * 25}
              y1={250 - i * 3}
              x2={450 - i * 25}
              y2={270 + i * 3}
              stroke="#D4AF37"
              strokeWidth="2"
              opacity="0.8"
            />
          ))}

          {/* Main bus body - dark */}
          <rect
            x="450"
            y="220"
            width="200"
            height="60"
            rx="10"
            fill="none"
            stroke="#2C3E50"
            strokeWidth="3"
          />

          {/* Bus cabin - darker fill */}
          <rect
            x="460"
            y="230"
            width="80"
            height="40"
            rx="5"
            fill="#2C3E50"
            opacity="0.2"
            stroke="none"
          />

          {/* Windows - golden outline */}
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={`window-${i}`}
              x={470 + i * 40}
              y="235"
              width="32"
              height="25"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              rx="2"
            />
          ))}

          {/* Door accent line */}
          <line
            x1="470"
            y1="260"
            x2="510"
            y2="260"
            stroke="#D4AF37"
            strokeWidth="2"
            opacity="0.7"
          />

          {/* Wheels - dark circles */}
          <circle cx="480" cy="290" r="12" fill="none" stroke="#2C3E50" strokeWidth="3" />
          <circle cx="480" cy="290" r="6" fill="#2C3E50" opacity="0.4" />

          <circle cx="620" cy="290" r="12" fill="none" stroke="#2C3E50" strokeWidth="3" />
          <circle cx="620" cy="290" r="6" fill="#2C3E50" opacity="0.4" />

          {/* Right wing - dark with golden accents */}
          <path
            d="M 650 250 Q 750 200 850 230 L 820 260 Q 750 230 650 270 Z"
            fill="none"
            stroke="#2C3E50"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Right wing feathers - golden */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`right-feather-${i}`}
              x1={650 + i * 25}
              y1={250 - i * 3}
              x2={650 + i * 25}
              y2={270 + i * 3}
              stroke="#D4AF37"
              strokeWidth="2"
              opacity="0.8"
            />
          ))}

          {/* IKARUS text - golden */}
          <text
            x="550"
            y="215"
            fontSize="18"
            fontFamily="serif"
            fontWeight="bold"
            fill="#D4AF37"
            textAnchor="middle"
            letterSpacing="2"
            opacity="0.9"
          >
            IKARUS
          </text>

          {/* Motion lines - speed effect */}
          <line x1="400" y1="240" x2="420" y2="240" stroke="#D4AF37" strokeWidth="2" opacity="0.5" />
          <line x1="390" y1="260" x2="410" y2="260" stroke="#D4AF37" strokeWidth="2" opacity="0.4" />
          <line x1="400" y1="280" x2="420" y2="280" stroke="#D4AF37" strokeWidth="2" opacity="0.5" />

          {/* Animation: Flying left to right across screen */}
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            values="-300,0; 1200,0; -300,0"
            dur="12s"
            repeatCount="indefinite"
          />
        </g>

        {/* Greek meander patterns - top and bottom */}
        <g stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.6">
          {/* Top meander */}
          {Array.from({ length: 16 }).map((_, i) => (
            <g key={`meander-top-${i}`}>
              <path d={`M ${i * 100 + 20} 20 L ${i * 100 + 35} 20 L ${i * 100 + 35} 35 L ${i * 100 + 20} 35`} />
            </g>
          ))}
          {/* Bottom meander */}
          {Array.from({ length: 16 }).map((_, i) => (
            <g key={`meander-bottom-${i}`}>
              <path d={`M ${i * 100 + 20} 455 L ${i * 100 + 35} 455 L ${i * 100 + 35} 470 L ${i * 100 + 20} 470`} />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
