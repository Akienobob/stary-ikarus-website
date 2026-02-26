import { useState, useEffect } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

export default function AnimatedLogo({ className = '' }: AnimatedLogoProps) {
  const [isHovering, setIsHovering] = useState(false);

  const sunImageUrl = 'https://private-us-east-1.manuscdn.com/sessionFile/2oQO3tGXi7zNBCr2MefI6f/sandbox/6kBGtixikzm8QneFk2cPv1_1772085198587_na1fn_c3VuLWFydGlzdGlj.png';

  return (
    <div 
      className={`relative w-full h-96 ${className} bg-gradient-to-b from-background via-background to-background/80 overflow-hidden flex items-center justify-center`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <style>{`
        @keyframes busFloat {
          0% { 
            left: -15%;
            transform: scaleX(1);
          }
          35% { 
            left: 55%;
            transform: scaleX(1);
          }
          50% { 
            left: 55%;
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
          position: absolute;
          height: 160px;
          width: auto;
          top: 50%;
          transform: translateY(-50%);
        }
        
        @keyframes sunRaysRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .sun-image {
          animation: sunRaysRotate 25s linear infinite;
          position: absolute;
          right: 80px;
          top: 50%;
          transform: translateY(-50%);
          width: 180px;
          height: 180px;
          object-fit: contain;
        }
      `}</style>

      {/* Greek meander patterns - top and bottom */}
      <svg
        viewBox="0 0 1800 400"
        className="w-full h-full absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: 'none' }}
      >
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

      {/* Sun image - artistic */}
      <img
        src={sunImageUrl}
        alt="Artistic Sun"
        className="sun-image"
        style={{ 
          filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.5))',
        }}
      />

      {/* Bus SVG - vintage engraving style with wings */}
      <svg
        viewBox="0 0 1600 800"
        className="bus-flying"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          filter: 'drop-shadow(0 4px 12px rgba(212, 175, 55, 0.4))',
        }}
      >
        <defs>
          <pattern id="crosshatch" patternUnits="userSpaceOnUse" width="4" height="4">
            <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#2C2C2C" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>

        {/* Left Wing - ornate Hermes style */}
        <g>
          {/* Main wing curves */}
          <path d="M 280 350 Q 180 280 80 200 Q 40 160 0 100" 
                stroke="#2C2C2C" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <path d="M 280 350 Q 200 300 120 240 Q 60 190 20 130" 
                stroke="#2C2C2C" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.8"/>
          
          {/* Wing feathers - detailed */}
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={`left-feather-${i}`}>
              <path d={`M ${280 - i * 18} 350 Q ${240 - i * 22} ${300 - i * 15} ${200 - i * 28} ${220 - i * 35}`}
                    stroke="#2C2C2C" strokeWidth="5" fill="none" opacity="0.7"/>
              <path d={`M ${280 - i * 18} 350 Q ${250 - i * 20} ${310 - i * 12} ${220 - i * 26} ${240 - i * 32}`}
                    stroke="#2C2C2C" strokeWidth="3" fill="none" opacity="0.4"/>
            </g>
          ))}
          
          {/* Wing ornament - spiral */}
          <circle cx="280" cy="350" r="20" fill="none" stroke="#D4AF37" strokeWidth="2"/>
          <circle cx="280" cy="350" r="12" fill="none" stroke="#D4AF37" strokeWidth="1.5"/>
        </g>

        {/* Main Bus Body */}
        <g>
          {/* Chassis/Base */}
          <rect x="350" y="280" width="900" height="300" rx="50" fill="none" stroke="#2C2C2C" strokeWidth="10"/>
          
          {/* Bus body with crosshatch pattern */}
          <rect x="350" y="280" width="900" height="300" rx="50" fill="url(#crosshatch)" opacity="0.5"/>
          
          {/* Cabin section */}
          <rect x="350" y="280" width="220" height="220" rx="30" fill="none" stroke="#2C2C2C" strokeWidth="8"/>
          
          {/* Windshield */}
          <path d="M 370 300 L 420 290 L 420 450 L 370 450 Z" fill="none" stroke="#2C2C2C" strokeWidth="6"/>
          <line x1="395" y1="290" x2="395" y2="450" stroke="#2C2C2C" strokeWidth="3" opacity="0.5"/>
          
          {/* Cabin windows */}
          <rect x="370" y="310" width="35" height="40" rx="5" fill="none" stroke="#2C2C2C" strokeWidth="4"/>
          <rect x="370" y="370" width="35" height="40" rx="5" fill="none" stroke="#2C2C2C" strokeWidth="4"/>
          
          {/* Main body windows - side */}
          <rect x="600" y="300" width="50" height="45" rx="5" fill="none" stroke="#2C2C2C" strokeWidth="5"/>
          <rect x="680" y="300" width="50" height="45" rx="5" fill="none" stroke="#2C2C2C" strokeWidth="5"/>
          <rect x="760" y="300" width="50" height="45" rx="5" fill="none" stroke="#2C2C2C" strokeWidth="5"/>
          <rect x="840" y="300" width="50" height="45" rx="5" fill="none" stroke="#2C2C2C" strokeWidth="5"/>
          <rect x="920" y="300" width="50" height="45" rx="5" fill="none" stroke="#2C2C2C" strokeWidth="5"/>
          
          {/* Door */}
          <rect x="1000" y="280" width="100" height="220" rx="15" fill="none" stroke="#2C2C2C" strokeWidth="7"/>
          <circle cx="1080" cy="390" r="8" fill="#D4AF37"/>
          <line x1="1050" y1="390" x2="1070" y2="390" stroke="#2C2C2C" strokeWidth="2" opacity="0.6"/>
          
          {/* Rear window */}
          <rect x="1120" y="310" width="40" height="40" rx="5" fill="none" stroke="#2C2C2C" strokeWidth="4"/>
          
          {/* Bumpers */}
          <rect x="330" y="550" width="30" height="70" rx="5" fill="none" stroke="#2C2C2C" strokeWidth="6"/>
          <rect x="1220" y="550" width="30" height="70" rx="5" fill="none" stroke="#2C2C2C" strokeWidth="6"/>
          
          {/* Headlights */}
          <circle cx="380" cy="500" r="18" fill="none" stroke="#D4AF37" strokeWidth="4"/>
          <circle cx="380" cy="500" r="10" fill="none" stroke="#D4AF37" strokeWidth="2"/>
          <circle cx="440" cy="500" r="18" fill="none" stroke="#D4AF37" strokeWidth="4"/>
          <circle cx="440" cy="500" r="10" fill="none" stroke="#D4AF37" strokeWidth="2"/>
          
          {/* Taillights */}
          <circle cx="1200" cy="500" r="15" fill="none" stroke="#D4AF37" strokeWidth="3"/>
          <circle cx="1200" cy="500" r="8" fill="none" stroke="#D4AF37" strokeWidth="1.5"/>
        </g>

        {/* Wheels */}
        <g>
          {/* Front wheel */}
          <circle cx="450" cy="600" r="50" fill="none" stroke="#2C2C2C" strokeWidth="8"/>
          <circle cx="450" cy="600" r="30" fill="none" stroke="#2C2C2C" strokeWidth="5"/>
          <circle cx="450" cy="600" r="12" fill="#2C2C2C"/>
          
          {/* Rear wheel */}
          <circle cx="1050" cy="600" r="50" fill="none" stroke="#2C2C2C" strokeWidth="8"/>
          <circle cx="1050" cy="600" r="30" fill="none" stroke="#2C2C2C" strokeWidth="5"/>
          <circle cx="1050" cy="600" r="12" fill="#2C2C2C"/>
        </g>

        {/* Right Wing - ornate Hermes style */}
        <g>
          {/* Main wing curves */}
          <path d="M 1320 350 Q 1420 280 1520 200 Q 1560 160 1600 100" 
                stroke="#2C2C2C" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <path d="M 1320 350 Q 1400 300 1480 240 Q 1540 190 1580 130" 
                stroke="#2C2C2C" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.8"/>
          
          {/* Wing feathers - detailed */}
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={`right-feather-${i}`}>
              <path d={`M ${1320 + i * 18} 350 Q ${1360 + i * 22} ${300 - i * 15} ${1400 + i * 28} ${220 - i * 35}`}
                    stroke="#2C2C2C" strokeWidth="5" fill="none" opacity="0.7"/>
              <path d={`M ${1320 + i * 18} 350 Q ${1350 + i * 20} ${310 - i * 12} ${1380 + i * 26} ${240 - i * 32}`}
                    stroke="#2C2C2C" strokeWidth="3" fill="none" opacity="0.4"/>
            </g>
          ))}
          
          {/* Wing ornament - spiral */}
          <circle cx="1320" cy="350" r="20" fill="none" stroke="#D4AF37" strokeWidth="2"/>
          <circle cx="1320" cy="350" r="12" fill="none" stroke="#D4AF37" strokeWidth="1.5"/>
        </g>

        {/* Decorative Greek pattern on sides */}
        <g stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={`pattern-${i}`}>
              <path d={`M ${600 + i * 70} 330 L ${620 + i * 70} 330 L ${620 + i * 70} 350 L ${600 + i * 70} 350`} />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
