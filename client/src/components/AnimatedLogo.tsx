import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

type SunExpression = 'calm' | 'thoughtful' | 'frowning' | 'eyes-moving';

export default function AnimatedLogo({ size = 'md', className = '' }: AnimatedLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
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
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center ${sizeMap[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 blur-2xl"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />

      {/* SVG Logo - Winged Bus Flying to Sun */}
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full relative z-10 drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background clouds */}
        <motion.ellipse
          cx="100"
          cy="320"
          rx="60"
          ry="30"
          fill="#F5F1E8"
          opacity="0.6"
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.ellipse
          cx="700"
          cy="340"
          rx="50"
          ry="25"
          fill="#F5F1E8"
          opacity="0.5"
          animate={{ x: isHovered ? -10 : 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Sun rays background */}
        <motion.g
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '680px 100px' }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`ray-${i}`}
              x1="680"
              y1="30"
              x2="680"
              y2="0"
              stroke="#D4AF37"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.7"
              transform={`rotate(${i * 30} 680 100)`}
            />
          ))}
        </motion.g>

        {/* Sun circle */}
        <circle cx="680" cy="100" r="70" fill="#FFD700" />

        {/* Sun face expressions */}
        {sunExpression === 'calm' && (
          <>
            {/* Left eye */}
            <circle cx="655" cy="80" r="12" fill="#8B6914" />
            <circle cx="657" cy="78" r="5" fill="white" />
            {/* Right eye */}
            <circle cx="705" cy="80" r="12" fill="#8B6914" />
            <circle cx="707" cy="78" r="5" fill="white" />
            {/* Smile */}
            <path
              d="M 655 110 Q 680 125 705 110"
              stroke="#8B6914"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {sunExpression === 'thoughtful' && (
          <>
            {/* Left eye looking up */}
            <circle cx="655" cy="80" r="12" fill="#8B6914" />
            <circle cx="655" cy="74" r="5" fill="white" />
            {/* Right eye looking up */}
            <circle cx="705" cy="80" r="12" fill="#8B6914" />
            <circle cx="705" cy="74" r="5" fill="white" />
            {/* Neutral mouth */}
            <line x1="655" y1="115" x2="705" y2="115" stroke="#8B6914" strokeWidth="4" strokeLinecap="round" />
          </>
        )}

        {sunExpression === 'frowning' && (
          <>
            {/* Left eye */}
            <circle cx="655" cy="80" r="12" fill="#8B6914" />
            <circle cx="655" cy="78" r="5" fill="white" />
            {/* Right eye */}
            <circle cx="705" cy="80" r="12" fill="#8B6914" />
            <circle cx="705" cy="78" r="5" fill="white" />
            {/* Frown */}
            <path
              d="M 655 115 Q 680 100 705 115"
              stroke="#8B6914"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {sunExpression === 'eyes-moving' && (
          <>
            {/* Left eye */}
            <circle cx="655" cy="80" r="12" fill="#8B6914" />
            <motion.circle
              cx={655}
              cy={80}
              r="5"
              fill="white"
              animate={{ cx: [651, 659, 651], cy: [76, 80, 84] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Right eye */}
            <circle cx="705" cy="80" r="12" fill="#8B6914" />
            <motion.circle
              cx={705}
              cy={80}
              r="5"
              fill="white"
              animate={{ cx: [701, 709, 701], cy: [76, 80, 84] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Smile */}
            <path
              d="M 655 110 Q 680 125 705 110"
              stroke="#8B6914"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* Bus with wings - flying animation */}
        <motion.g
          animate={{
            x: isHovered ? 50 : 0,
            y: isHovered ? -15 : 0,
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Left wing */}
          <motion.g
            animate={{ rotate: isHovered ? 8 : 0 }}
            style={{ transformOrigin: '180px 180px' }}
            transition={{ duration: 0.6 }}
          >
            <path
              d="M 180 180 L 80 130 L 120 180 Z"
              fill="#D4AF37"
              opacity="0.9"
            />
            <path
              d="M 80 130 L 120 145 L 120 180 Z"
              fill="#B8860B"
              opacity="0.7"
            />
            {/* Wing feathers */}
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={`left-feather-${i}`}
                x1={80 + i * 8}
                y1={130 + i * 7}
                x2={80 + i * 8}
                y2={165 + i * 7}
                stroke="#8B6914"
                strokeWidth="2"
                opacity="0.6"
              />
            ))}
          </motion.g>

          {/* Bus body */}
          <rect x="130" y="140" width="100" height="60" rx="12" fill="#D4AF37" stroke="#8B6914" strokeWidth="2" />
          <rect x="140" y="150" width="80" height="45" rx="8" fill="#F5F1E8" />

          {/* Bus windows */}
          <rect x="148" y="158" width="18" height="18" rx="2" fill="#87CEEB" opacity="0.8" />
          <rect x="172" y="158" width="18" height="18" rx="2" fill="#87CEEB" opacity="0.8" />
          <rect x="196" y="158" width="18" height="18" rx="2" fill="#87CEEB" opacity="0.8" />

          {/* Bus door */}
          <rect x="148" y="180" width="22" height="20" rx="2" fill="#B8860B" opacity="0.9" />

          {/* Bus wheels */}
          <circle cx="155" cy="205" r="10" fill="#333" stroke="#8B6914" strokeWidth="2" />
          <circle cx="215" cy="205" r="10" fill="#333" stroke="#8B6914" strokeWidth="2" />
          <circle cx="155" cy="205" r="5" fill="#666" />
          <circle cx="215" cy="205" r="5" fill="#666" />

          {/* Right wing */}
          <motion.g
            animate={{ rotate: isHovered ? -8 : 0 }}
            style={{ transformOrigin: '280px 180px' }}
            transition={{ duration: 0.6 }}
          >
            <path
              d="M 280 180 L 380 130 L 340 180 Z"
              fill="#D4AF37"
              opacity="0.9"
            />
            <path
              d="M 380 130 L 340 145 L 340 180 Z"
              fill="#B8860B"
              opacity="0.7"
            />
            {/* Wing feathers */}
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={`right-feather-${i}`}
                x1={380 - i * 8}
                y1={130 + i * 7}
                x2={380 - i * 8}
                y2={165 + i * 7}
                stroke="#8B6914"
                strokeWidth="2"
                opacity="0.6"
              />
            ))}
          </motion.g>
        </motion.g>

        {/* Floating animation for bus */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* This creates the floating effect */}
        </motion.g>
      </svg>

      {/* Text below logo */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
        <p className="font-serif font-bold text-accent text-sm md:text-base">
          STARY IKARUS
        </p>
      </div>
    </motion.div>
  );
}
