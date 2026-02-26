import { useState } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

export default function AnimatedLogo({ className = '' }: AnimatedLogoProps) {
  const [isHovering, setIsHovering] = useState(false);

  // URL автобуса и солнца с прозрачными фонами
  const busImageUrl = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663375501955/kkYkgleGogRYojDt.png';
  const sunImageUrl = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663375501955/DeKRJNmMTJboiLHe.png';

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
            transform: scaleX(-1);
          }
          35% { 
            left: 62%;
            transform: scaleX(-1);
          }
          50% { 
            left: 62%;
            transform: scaleX(1);
          }
          85% { 
            left: -15%;
            transform: scaleX(1);
          }
          100% { 
            left: -15%;
            transform: scaleX(-1);
          }
        }
        
        .bus-flying {
          animation: busFloat 16s ease-in-out infinite;
          position: absolute;
          height: 160px;
          width: auto;
          top: 50%;
          transform: translateY(-50%);
          object-fit: contain;
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

      {/* Sun image - with face and emotions */}
      <img
        src={sunImageUrl}
        alt="Artistic Sun"
        className="sun-image"
        style={{ 
          filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.1))',
        }}
      />

      {/* Bus image - animated */}
      <img
        src={busImageUrl}
        alt="Stary Ikarus Bus with Wings"
        className="bus-flying"
        style={{ 
          filter: 'drop-shadow(0 4px 12px rgba(212, 175, 55, 0.4))',
        }}
        onError={(e) => {
          console.error('Bus image failed to load:', e);
        }}
      />
    </div>
  );
}
