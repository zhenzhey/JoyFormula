import { MessageCircle, FileText, Smile, BarChart3, BatteryCharging } from 'lucide-react';

export type NavPage = 'chat' | 'home' | 'theorem' | 'repository' | 'giftBox';

export interface BottomNavBarProps {
  activePage: NavPage;
  onNavigateChat: () => void;
  onNavigateHome: () => void;
  onNavigateTheorem: () => void;
  onNavigateRepository: () => void;
  onNavigateGiftBox: () => void;
  transparent?: boolean;
}

const ACTIVE_COLOR = 'text-[#FEB05D]';
const INACTIVE_COLOR = 'text-gray-600';

export default function BottomNavBar({
  activePage,
  onNavigateChat,
  onNavigateHome,
  onNavigateTheorem,
  onNavigateRepository,
  onNavigateGiftBox,
  transparent = false,
}: BottomNavBarProps) {
  const tabs = [
    { page: 'chat' as NavPage, onClick: onNavigateChat, Icon: MessageCircle },
    { page: 'theorem' as NavPage, onClick: onNavigateTheorem, Icon: FileText },
    { page: 'home' as NavPage, onClick: onNavigateHome, Icon: Smile },
    { page: 'repository' as NavPage, onClick: onNavigateRepository, Icon: BarChart3 },
    { page: 'giftBox' as NavPage, onClick: onNavigateGiftBox, Icon: BatteryCharging },
  ];

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 h-[84.797px] z-10 ${transparent ? '' : 'bg-white border-t border-gray-100'}`}
      data-name="标签栏"
    >
      {/* Home indicator bar */}
      <div className="-translate-x-1/2 absolute bg-black bottom-[8.2px] h-[5.262px] left-1/2 rounded-[105.235px] w-[141.015px]" />

      {/* Nav icons */}
      <div className="absolute flex gap-[38.047px] items-center left-[54.63px] top-[14.68px]">
        {tabs.map(({ page, onClick, Icon }) => {
          const isActive = activePage === page;
          const color = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
          return isActive ? (
            <div key={page} className="relative shrink-0">
              <Icon className={`w-6 h-6 ${color}`} strokeWidth={1.5} />
            </div>
          ) : (
            <button
              key={page}
              onClick={onClick}
              className="relative shrink-0 transition-transform hover:scale-110 active:scale-95"
            >
              <Icon className={`w-6 h-6 ${color}`} strokeWidth={1.5} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
