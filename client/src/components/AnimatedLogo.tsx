import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      className={`relative flex items-center justify-center ${sizeMap[size]} ${className} bg-gradient-to-b from-background via-background to-background/80 overflow-hidden`}
    >
      {/* SVG Container */}
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
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '900px 150px' }}
        >
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
        </motion.g>

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
            <motion.circle
              cx={880}
              cy={135}
              r="3"
              fill="white"
              animate={{ cx: [876, 884, 876], cy: [131, 135, 139] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Right eye */}
            <circle cx="920" cy="135" r="8" fill="#8B6914" />
            <motion.circle
              cx={920}
              cy={135}
              r="3"
              fill="white"
              animate={{ cx: [916, 924, 916], cy: [131, 135, 139] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
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

        {/* Flying Bus - Animated from left to right and back */}
        <motion.g
          animate={{
            x: [0, 300, 0],
            scaleX: [1, 1, -1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Bus body - vintage style with line hatching */}
          <g>
            {/* Main bus outline */}
            <rect
              x="250"
              y="280"
              width="160"
              height="80"
              rx="15"
              fill="none"
              stroke="#8B6914"
              strokeWidth="2.5"
            />

            {/* Bus roof line */}
            <path
              d="M 260 280 Q 330 250 410 280"
              fill="none"
              stroke="#8B6914"
              strokeWidth="2.5"
            />

            {/* Bus front */}
            <circle cx="260" cy="310" r="12" fill="none" stroke="#8B6914" strokeWidth="2" />
            <circle cx="260" cy="310" r="8" fill="none" stroke="#8B6914" strokeWidth="1.5" />

            {/* Windows - 4 windows with crosshatch pattern */}
            {[0, 1, 2, 3].map((i) => (
              <g key={`window-${i}`}>
                <rect
                  x={275 + i * 28}
                  y="290"
                  width="22"
                  height="20"
                  fill="none"
                  stroke="#8B6914"
                  strokeWidth="1.5"
                />
                {/* Crosshatch pattern inside window */}
                <line
                  x1={275 + i * 28}
                  y1="290"
                  x2={297 + i * 28}
                  y2="310"
                  stroke="#8B6914"
                  strokeWidth="0.8"
                  opacity="0.5"
                />
                <line
                  x1={297 + i * 28}
                  y1="290"
                  x2={275 + i * 28}
                  y2="310"
                  stroke="#8B6914"
                  strokeWidth="0.8"
                  opacity="0.5"
                />
              </g>
            ))}

            {/* Door */}
            <rect
              x="275"
              y="315"
              width="20"
              height="35"
              fill="none"
              stroke="#8B6914"
              strokeWidth="1.5"
            />
            <circle cx="292" cy="332" r="2" fill="#8B6914" />

            {/* Wheels */}
            <circle cx="280" cy="365" r="12" fill="none" stroke="#8B6914" strokeWidth="2.5" />
            <circle cx="280" cy="365" r="8" fill="none" stroke="#8B6914" strokeWidth="1.5" />
            <circle cx="280" cy="365" r="4" fill="#8B6914" />

            <circle cx="400" cy="365" r="12" fill="none" stroke="#8B6914" strokeWidth="2.5" />
            <circle cx="400" cy="365" r="8" fill="none" stroke="#8B6914" strokeWidth="1.5" />
            <circle cx="400" cy="365" r="4" fill="#8B6914" />

            {/* Left Wing */}
            <g>
              <path
                d="M 260 310 Q 180 280 140 310 Q 160 330 260 320"
                fill="none"
                stroke="#8B6914"
                strokeWidth="2.5"
              />
              {/* Wing feathers */}
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={`left-feather-${i}`}
                  x1={260 - i * 12}
                  y1={310 - i * 3}
                  x2={260 - i * 12}
                  y2={325 - i * 3}
                  stroke="#8B6914"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
              ))}
            </g>

            {/* Right Wing */}
            <g>
              <path
                d="M 410 310 Q 490 280 530 310 Q 510 330 410 320"
                fill="none"
                stroke="#8B6914"
                strokeWidth="2.5"
              />
              {/* Wing feathers */}
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={`right-feather-${i}`}
                  x1={410 + i * 12}
                  y1={310 - i * 3}
                  x2={410 + i * 12}
                  y2={325 - i * 3}
                  stroke="#8B6914"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
              ))}
            </g>

            {/* IKARUS text on bus */}
            <text
              x="330"
              y="275"
              fontSize="14"
              fontFamily="serif"
              fontWeight="bold"
              fill="#8B6914"
              textAnchor="middle"
              letterSpacing="2"
            >
              IKARUS
            </text>
          </g>
        </motion.g>

        {/* Greek meander pattern bottom border */}
        <g stroke="#B8860B" strokeWidth="2" fill="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={`meander-bottom-${i}`}>
              <path d={`M ${i * 100 + 20} 570 L ${i * 100 + 35} 570 L ${i * 100 + 35} 585 L ${i * 100 + 20} 585`} />
            </g>
          ))}
        </g>
      </svg>
    </motion.div>
  );
}
