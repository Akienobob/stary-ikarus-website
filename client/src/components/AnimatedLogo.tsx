import { useState } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

export default function AnimatedLogo({ className = '' }: AnimatedLogoProps) {
  const [isHovering, setIsHovering] = useState(false);

  // URL автобуса и солнца с прозрачными фонами
  const busImageUrl = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663375501955/kkYkgleGogRYojDt.png';
  const sunImageUrl = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663375501955/ASivjVfPrBANtfKM.png';

  return (
    <div 
      className={`relative w-full bg-gradient-to-b from-background via-background to-background/80 overflow-hidden flex items-center justify-center min-h-48 sm:min-h-64 md:min-h-96 ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <style>{`
        @keyframes busFloatMobile {
          0% { 
            left: -20%;
            transform: scaleX(-1);
          }
          30% { 
            left: 48%;
            transform: scaleX(-1);
          }
          50% { 
            left: 48%;
            transform: scaleX(1);
          }
          80% { 
            left: -20%;
            transform: scaleX(1);
          }
          100% { 
            left: -20%;
            transform: scaleX(-1);
          }
        }
        
        @keyframes busFloatDesktop {
          0% { 
            left: -15%;
            transform: scaleX(-1);
          }
          30% { 
            left: 62%;
            transform: scaleX(-1);
          }
          50% { 
            left: 62%;
            transform: scaleX(1);
          }
          80% { 
            left: -15%;
            transform: scaleX(1);
          }
          100% { 
            left: -15%;
            transform: scaleX(-1);
          }
        }
        
        .bus-flying {
          animation: busFloatMobile 20s ease-in-out infinite;
          position: absolute;
          height: clamp(60px, 15vw, 160px);
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
          right: clamp(10px, 5vw, 120px);
          top: 50%;
          transform: translateY(-50%);
          width: clamp(80px, 20vw, 180px);
          height: clamp(80px, 20vw, 180px);
          object-fit: contain;
        }

        /* Мобильная оптимизация для очень маленьких экранов */
        @media (max-width: 380px) {
          .bus-flying {
            height: clamp(50px, 12vw, 100px);
          }
          .sun-image {
            width: clamp(60px, 16vw, 120px);
            height: clamp(60px, 16vw, 120px);
          }
        }
        
        /* Десктопная анимация для больших экранов */
        @media (min-width: 768px) {
          .bus-flying {
            animation: busFloatDesktop 20s ease-in-out infinite;
          }
        }
      `}</style>

      {/* Sun image - with face and emotions */}
      <img
        src={sunImageUrl}
        alt="Artistic Sun"
        className="sun-image"
        loading="lazy"
        style={{ 
          filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.1))',
        }}
      />

      {/* Bus image - animated */}
      <img
        src={busImageUrl}
        alt="Stary Ikarus Bus with Wings"
        className="bus-flying"
        loading="lazy"
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
