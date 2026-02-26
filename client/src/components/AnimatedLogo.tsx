import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function AnimatedLogo({ size = 'md', className = '' }: AnimatedLogoProps) {
  const sizeMap = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40',
    lg: 'w-56 h-56',
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center ${sizeMap[size]} ${className}`}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'loop' as const,
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 blur-2xl"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop' as const,
        }}
      />

      {/* SVG Logo - Winged Bus */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full relative z-10 drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sun in background */}
        <circle
          cx="160"
          cy="40"
          r="30"
          fill="#D4AF37"
          opacity="0.6"
        />

        {/* Left Wing */}
        <path
          d="M 50 100 Q 20 80 10 100 Q 20 120 50 110"
          fill="none"
          stroke="#B8860B"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Right Wing */}
        <path
          d="M 150 100 Q 180 80 190 100 Q 180 120 150 110"
          fill="none"
          stroke="#B8860B"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Bus Body */}
        <g>
          {/* Bus main body */}
          <rect
            x="60"
            y="90"
            width="80"
            height="50"
            rx="8"
            fill="#1A1410"
            stroke="#D4AF37"
            strokeWidth="2"
          />

          {/* Bus windows */}
          <rect
            x="70"
            y="100"
            width="15"
            height="15"
            rx="2"
            fill="#D4AF37"
            opacity="0.7"
          />
          <rect
            x="90"
            y="100"
            width="15"
            height="15"
            rx="2"
            fill="#D4AF37"
            opacity="0.7"
          />
          <rect
            x="110"
            y="100"
            width="15"
            height="15"
            rx="2"
            fill="#D4AF37"
            opacity="0.7"
          />

          {/* Bus wheels */}
          <circle
            cx="75"
            cy="145"
            r="6"
            fill="#1A1410"
            stroke="#D4AF37"
            strokeWidth="2"
          />
          <circle
            cx="125"
            cy="145"
            r="6"
            fill="#1A1410"
            stroke="#D4AF37"
            strokeWidth="2"
          />

          {/* Bus front */}
          <path
            d="M 60 90 L 55 85 L 60 85 Z"
            fill="#D4AF37"
          />
        </g>

        {/* Decorative Greek pattern on bus */}
        <g stroke="#D4AF37" strokeWidth="1.5" fill="none">
          <path d="M 65 115 L 70 115 L 68 120 L 63 120 Z" />
          <path d="M 85 115 L 90 115 L 88 120 L 83 120 Z" />
          <path d="M 105 115 L 110 115 L 108 120 L 103 120 Z" />
        </g>
      </svg>

      {/* Text below logo */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
        <p className="font-serif font-bold text-accent text-sm md:text-base">
          STARY IKARUS
        </p>
      </div>
    </motion.div>
  );
}
