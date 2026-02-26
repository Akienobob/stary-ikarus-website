import { useState, useEffect } from 'react';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

type SunExpression = 'calm' | 'thoughtful' | 'frowning' | 'eyes-moving';

export default function AnimatedLogo({ size = 'md', className = '' }: AnimatedLogoProps) {
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

  const sizeMap = {
    sm: 'w-32 h-32',
    md: 'w-full h-96',
    lg: 'w-full h-screen',
  };

  return (
    <div
      className={`relative flex items-center justify-center ${sizeMap[size]} ${className} bg-gradient-to-b from-background via-background to-background/80 overflow-hidden`}
    >
      <style>{`
        @keyframes busFlying {
          0% {
            transform: translateX(-100px) scaleX(1);
          }
          50% {
            transform: translateX(400px) scaleX(1);
          }
          100% {
            transform: translateX(-100px) scaleX(-1);
          }
        }

        @keyframes sunRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes eyeMove {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(2px, -2px);
          }
          50% {
            transform: translate(0, 2px);
          }
          75% {
            transform: translate(-2px, -2px);
          }
        }

        .bus-flying {
          animation: busFlying 8s ease-in-out infinite;
        }

        .sun-rays {
          animation: sunRotate 20s linear infinite;
          transform-origin: center;
        }

        .eye-moving {
          animation: eyeMove 1.5s ease-in-out infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 1200 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      >
        {/* Greek meander pattern top border */}
        <g stroke="#B8860B" strokeWidth="2" fill="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={`meander-${i}`}>
              <path d={`M ${i * 100 + 20} 15 L ${i * 100 + 35} 15 L ${i * 100 + 35} 30 L ${i * 100 + 20} 30`} />
            </g>
          ))}
        </g>

        {/* Sun rays (radiating lines) */}
        <g className="sun-rays">
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={`ray-${i}`}
              x1="900"
              y1="50"
              x2="900"
              y2="20"
              stroke="#D4AF37"
              strokeWidth="2"
              opacity="0.7"
              transform={`rotate(${i * 15} 900 150)`}
            />
          ))}
        </g>

        {/* Sun circle with gradient effect */}
        <defs>
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#FFE066', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 0.9 }} />
          </radialGradient>
          <filter id="sunGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="900" cy="150" r="60" fill="url(#sunGradient)" filter="url(#sunGlow)" />

        {/* Sun face - calm */}
        {sunExpression === 'calm' && (
          <>
            {/* Left eye */}
            <circle cx="880" cy="135" r="8" fill="#8B6914" />
            <circle cx="881" cy="134" r="3" fill="white" />
            {/* Right eye */}
            <circle cx="920" cy="135" r="8" fill="#8B6914" />
            <circle cx="921" cy="134" r="3" fill="white" />
            {/* Smile */}
            <path
              d="M 880 155 Q 900 165 920 155"
              stroke="#8B6914"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Sun face - thoughtful */}
        {sunExpression === 'thoughtful' && (
          <>
            {/* Left eye looking up */}
            <circle cx="880" cy="135" r="8" fill="#8B6914" />
            <circle cx="880" cy="131" r="3" fill="white" />
            {/* Right eye looking up */}
            <circle cx="920" cy="135" r="8" fill="#8B6914" />
            <circle cx="920" cy="131" r="3" fill="white" />
            {/* Neutral mouth */}
            <line x1="880" y1="160" x2="920" y2="160" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />
          </>
        )}

        {/* Sun face - frowning */}
        {sunExpression === 'frowning' && (
          <>
            {/* Left eye */}
            <circle cx="880" cy="135" r="8" fill="#8B6914" />
            <circle cx="880" cy="134" r="3" fill="white" />
            {/* Right eye */}
            <circle cx="920" cy="135" r="8" fill="#8B6914" />
            <circle cx="920" cy="134" r="3" fill="white" />
            {/* Frown */}
            <path
              d="M 880 160 Q 900 150 920 160"
              stroke="#8B6914"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Sun face - eyes moving */}
        {sunExpression === 'eyes-moving' && (
          <>
            {/* Left eye */}
            <circle cx="880" cy="135" r="8" fill="#8B6914" />
            <circle cx="881" cy="134" r="3" fill="white" className="eye-moving" />
            {/* Right eye */}
            <circle cx="920" cy="135" r="8" fill="#8B6914" />
            <circle cx="921" cy="134" r="3" fill="white" className="eye-moving" />
            {/* Smile */}
            <path
              d="M 880 155 Q 900 165 920 155"
              stroke="#8B6914"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Clouds */}
        <g fill="none" stroke="#B8860B" strokeWidth="1.5" opacity="0.5">
          {/* Left clouds */}
          <path d="M 50 400 Q 60 380 80 390 Q 90 370 110 385 Q 100 405 80 410 Q 60 415 50 400" />
          <path d="M 30 450 Q 45 435 65 445 Q 75 425 95 440 Q 80 460 60 465 Q 40 468 30 450" />

          {/* Right clouds */}
          <path d="M 1100 420 Q 1110 400 1130 410 Q 1140 390 1160 405 Q 1150 425 1130 430 Q 1110 435 1100 420" />
          <path d="M 1080 470 Q 1095 455 1115 465 Q 1125 445 1145 460 Q 1130 480 1110 485 Q 1090 488 1080 470" />
        </g>

        {/* Elegant Flying Bus - Streamlined Design */}
        <g className="bus-flying">
          {/* Main bus body - sleek and streamlined */}
          <g>
            {/* Front nose cone - aerodynamic */}
            <path
              d="M 240 310 L 260 300 L 260 320 Z"
              fill="none"
              stroke="#8B6914"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Main body - elongated and elegant */}
            <rect
              x="260"
              y="295"
              width="140"
              height="50"
              rx="8"
              fill="none"
              stroke="#8B6914"
              strokeWidth="2.5"
            />

            {/* Rear taper - streamlined */}
            <path
              d="M 400 295 L 420 305 L 420 315 L 400 325 Z"
              fill="none"
              stroke="#8B6914"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Windows - minimal and elegant */}
            {[0, 1, 2].map((i) => (
              <rect
                key={`window-${i}`}
                x={275 + i * 35}
                y="302"
                width="28"
                height="18"
                fill="none"
                stroke="#8B6914"
                strokeWidth="1.5"
                rx="2"
              />
            ))}

            {/* Door accent line */}
            <line
              x1="275"
              y1="320"
              x2="305"
              y2="320"
              stroke="#8B6914"
              strokeWidth="1.5"
              opacity="0.6"
            />

            {/* Wheels - minimal circles */}
            <circle cx="285" cy="350" r="10" fill="none" stroke="#8B6914" strokeWidth="2.5" />
            <circle cx="285" cy="350" r="5" fill="#8B6914" opacity="0.3" />

            <circle cx="395" cy="350" r="10" fill="none" stroke="#8B6914" strokeWidth="2.5" />
            <circle cx="395" cy="350" r="5" fill="#8B6914" opacity="0.3" />

            {/* Left Wing - elegant and sharp */}
            <path
              d="M 260 310 Q 180 290 140 310 L 160 315 Q 200 300 260 320 Z"
              fill="none"
              stroke="#8B6914"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Wing feather lines - minimal */}
            {Array.from({ length: 5 }).map((_, i) => (
              <line
                key={`left-feather-${i}`}
                x1={260 - i * 20}
                y1={310 - i * 2}
                x2={260 - i * 20}
                y2={320 + i * 2}
                stroke="#8B6914"
                strokeWidth="1.5"
                opacity="0.5"
              />
            ))}

            {/* Right Wing - elegant and sharp */}
            <path
              d="M 400 310 Q 480 290 520 310 L 500 315 Q 460 300 400 320 Z"
              fill="none"
              stroke="#8B6914"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Wing feather lines - minimal */}
            {Array.from({ length: 5 }).map((_, i) => (
              <line
                key={`right-feather-${i}`}
                x1={400 + i * 20}
                y1={310 - i * 2}
                x2={400 + i * 20}
                y2={320 + i * 2}
                stroke="#8B6914"
                strokeWidth="1.5"
                opacity="0.5"
              />
            ))}

            {/* IKARUS text - elegant serif */}
            <text
              x="330"
              y="290"
              fontSize="12"
              fontFamily="serif"
              fontWeight="bold"
              fill="#8B6914"
              textAnchor="middle"
              letterSpacing="1"
              opacity="0.8"
            >
              IKARUS
            </text>
          </g>
        </g>

        {/* Greek meander pattern bottom border */}
        <g stroke="#B8860B" strokeWidth="2" fill="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={`meander-bottom-${i}`}>
              <path d={`M ${i * 100 + 20} 570 L ${i * 100 + 35} 570 L ${i * 100 + 35} 585 L ${i * 100 + 20} 585`} />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
