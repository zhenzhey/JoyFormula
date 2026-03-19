import { useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-x9wxv4rr9c";
import joyBlindboxTitle from "../assets/joyblindbox .png";
import imgImage10 from "figma:asset/4d63ccd21549b22cd5515f8a273e040386394a5f.png";
import BottomNavBar from './BottomNavBar';

function Frame() {
  return (
    <div className="absolute h-[13.066px] left-[32.61px] top-[16.31px] w-[7.95px]">
      <div className="absolute inset-[-10.14%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6003 15.7163">
          <g>
            <path d="M1.32531 1.32495V5.74144" stroke="var(--stroke-0, #2B2A2A)" strokeLinecap="round" strokeWidth="2.6499" />
            <path d="M9.27493 1.32497V5.74147" stroke="var(--stroke-0, #2B2A2A)" strokeLinecap="round" strokeWidth="2.6499" />
            <path d={svgPaths.p381fe200} stroke="var(--stroke-0, #2B2A2A)" strokeLinecap="round" strokeWidth="2.6499" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[13.066px] left-[224.22px] top-[17.12px] w-[7.95px]">
      <div className="absolute inset-[-10.14%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6003 15.7163">
          <g>
            <path d="M1.32531 1.32495V5.74144" stroke="var(--stroke-0, #2B2A2A)" strokeLinecap="round" strokeWidth="2.6499" />
            <path d="M9.27491 1.32496V5.74145" stroke="var(--stroke-0, #2B2A2A)" strokeLinecap="round" strokeWidth="2.6499" />
            <path d={svgPaths.p381fe200} stroke="var(--stroke-0, #2B2A2A)" strokeLinecap="round" strokeWidth="2.6499" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[40.768px] left-[61.15px] top-[39.14px] w-[269.882px]">
      <img
        alt="JOYBLINDBOX"
        className="absolute left-0 top-0 h-full w-full object-contain"
        src={joyBlindboxTitle}
      />
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[11.055px] relative w-[73.185px]">
      <img
        alt="JOYBLINDBOX"
        className="absolute left-0 top-0 h-full w-full object-contain"
        src={joyBlindboxTitle}
      />
      <div className="absolute h-[1.198px] left-[8.84px] top-[4.42px] w-0">
        <div className="absolute inset-[-30%_-0.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.718586 1.91623">
            <path d="M0.359293 0.359293V1.55694" stroke="var(--stroke-0, #A28F7E)" strokeLinecap="round" strokeWidth="0.718586" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.198px] left-[11px] top-[4.42px] w-0">
        <div className="absolute inset-[-30%_-0.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.718586 1.91623">
            <path d="M0.359293 0.359293V1.55694" stroke="var(--stroke-0, #A28F7E)" strokeLinecap="round" strokeWidth="0.718586" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.198px] left-[60.8px] top-[4.64px] w-0">
        <div className="absolute inset-[-30%_-0.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.718586 1.91623">
            <path d="M0.359293 0.359293V1.55694" stroke="var(--stroke-0, #A28F7E)" strokeLinecap="round" strokeWidth="0.718586" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.198px] left-[62.96px] top-[4.64px] w-0">
        <div className="absolute inset-[-30%_-0.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.718586 1.91623">
            <path d="M0.359293 0.359293V1.55694" stroke="var(--stroke-0, #A28F7E)" strokeLinecap="round" strokeWidth="0.718586" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BoxBot() {
  return (
    <div className="absolute h-[114.886px] left-[106.21px] top-[342.71px] w-[156.942px]">
      <div className="absolute h-[114.886px] left-0 top-0 w-[156.942px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156.798 114.738">
          <g>
            <path d={svgPaths.p3475ee00} fill="#96816F" fillOpacity="0.8" />
            <path d={svgPaths.p2ef91080} fill="#CCB69B" />
            <path d={svgPaths.p3c84da00} fill="#CCB69B" />
            <path d={svgPaths.p9723740} fill="var(--fill-0, #FCE6CC)" />
          </g>
        </svg>
      </div>
      <div className="absolute flex h-[34.658px] items-center justify-center left-[16.29px] top-[73.77px] w-[72.719px]">
        <div className="flex-none rotate-[19.33deg]">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}


interface BoxOpeningPageProps {
  onNavigateChat: () => void;
  onNavigateTheorem: () => void;
  onNavigateHome: () => void;
  onNavigateRepository: () => void;
  onNavigateGiftBox: () => void;
  onOpenComplete: () => void;
  energyLevel: number;
}

export default function BoxOpeningPage({ onNavigateChat, onNavigateTheorem, onNavigateHome, onNavigateRepository, onNavigateGiftBox, onOpenComplete, energyLevel }: BoxOpeningPageProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [startY, setStartY] = useState(0);

  const handleInteraction = (e: React.PointerEvent | React.MouseEvent) => {
    if (isOpening) return;
    
    if ('clientY' in e) {
      setStartY(e.clientY);
    }
    
    setIsOpening(true);
    
    // Complete opening animation after 1.5 seconds
    setTimeout(() => {
      onOpenComplete();
    }, 1500);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isOpening && startY) {
      const deltaY = startY - e.clientY;
      // If user swipes up significantly, speed up the opening
      if (deltaY > 50) {
        onOpenComplete();
      }
    }
  };

  return (
    <div 
      className="bg-white relative size-full cursor-pointer"
      onClick={handleInteraction}
      onPointerDown={handleInteraction}
      onPointerMove={handlePointerMove}
    >
      <Frame3 />
      
      {/* Shadow */}
      <div className="absolute h-[49.737px] left-[159.81px] top-[404.41px] w-[123.934px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.934 49.7365">
          <ellipse cx="61.9668" cy="24.8683" fill="var(--fill-0, #B4B4B4)" rx="61.9668" ry="24.8683" />
        </svg>
      </div>
      
      {/* Box Bottom - stays in place */}
      <BoxBot />
      
      {/* Box Top - lifts up when opening */}
      <motion.div
        className="absolute h-[104.628px] left-[106px] top-[315.54px] w-[158.994px]"
        animate={isOpening ? {
          y: -200,
          rotateX: -15,
          opacity: 0
        } : {
          y: 0,
          rotateX: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut"
        }}
      >
        <div className="absolute inset-[0.13%_0_0.19%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158.994 104.293">
            <g>
              <path d={svgPaths.p32183f0} fill="#96816F" />
              <path d={svgPaths.p2c5dd500} fill="var(--fill-0, #B19984)" />
              <path d={svgPaths.p387db900} fill="var(--fill-0, #B19984)" />
              <path d={svgPaths.p2842c400} fill="var(--fill-0, #B19984)" />
            </g>
          </svg>
        </div>
      </motion.div>

      {/* Swipe instruction */}
      {!isOpening && (
        <motion.div
          className="absolute content-stretch flex flex-col gap-[4.892px] items-center left-[132.09px] top-[571.56px] w-[128.01px]"
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="h-[46.475px] relative shrink-0 w-[45.66px]">
            <div className="absolute inset-0 opacity-70 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[128.07%] left-[-30.36%] max-w-none top-[-28.07%] w-[130.36%]" src={imgImage10} />
            </div>
          </div>
          <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#3a3a3a] text-[14.754px] text-center w-[min-content] whitespace-pre-wrap">
            Swipe to open
          </p>
        </motion.div>
      )}

      {/* Opening animation sparkles */}
      {isOpening && (
        <>
          <motion.div
            className="absolute left-[170px] top-[300px] w-[20px] h-[20px] bg-[#FFD666] rounded-full"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              x: [-20, -40],
              y: [-10, -30]
            }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute left-[210px] top-[310px] w-[15px] h-[15px] bg-[#A9D66A] rounded-full"
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0],
              x: [20, 50],
              y: [-5, -25]
            }}
            transition={{ duration: 1.2, delay: 0.1 }}
          />
          <motion.div
            className="absolute left-[190px] top-[290px] w-[18px] h-[18px] bg-[#F0817F] rounded-full"
            animate={{
              scale: [0, 1.3, 0],
              opacity: [0, 1, 0],
              x: [0, 10],
              y: [-15, -50]
            }}
            transition={{ duration: 1.1, delay: 0.2 }}
          />
        </>
      )}

      <BottomNavBar activePage="giftBox" onNavigateChat={onNavigateChat} onNavigateHome={onNavigateHome} onNavigateTheorem={onNavigateTheorem} onNavigateRepository={onNavigateRepository} onNavigateGiftBox={onNavigateGiftBox} />
    </div>
  );
}
