import React from 'react';
import NotificationIcon from '../assets/svg/notification-icon.svg';
import ProfileIcon from '../assets/svg/profile-icon.svg';

const Header = () => {
    return (
        <header className="flex justify-between items-center pt-8 md:pt-[60px] px-5 pb-2 bg-transparent relative z-10 w-full">
            <div className="flex items-center mt-2">
                <span className="font-bold italic" style={{ fontFamily: '"Brush Script MT", cursive', fontSize: '28px', color: '#131313', lineHeight: 1, letterSpacing: '0.02em' }}>Brandx</span>
            </div>
            <div className="flex gap-4">
                <button className="relative w-[36px] h-[36px] rounded-full bg-white flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer border-none text-black active:scale-[0.96] active:opacity-80 transition-all duration-300">
                    <img src={NotificationIcon} alt="Notifications" className="w-[18px] h-[18px]" />
                    <span className="absolute top-[6px] right-[8px] w-1.5 h-1.5 bg-[#f90000] rounded-full border border-white"></span>
                </button>
                <button className="w-[36px] h-[36px] rounded-full bg-white flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer border-none text-black active:scale-[0.96] active:opacity-80 transition-all duration-300">
                    <img src={ProfileIcon} alt="Profile" className="w-[18px] h-[18px]" />
                </button>
            </div>
        </header>
    );
};

export default Header;
