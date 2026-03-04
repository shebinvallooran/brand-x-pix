import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import HomeIcon from '../assets/svg/home-icon.svg';
import VehiclesIcon from '../assets/svg/car-icon.svg';
import DigitalIdIcon from '../assets/svg/qr-icon.svg';
import ClubIcon from '../assets/svg/club-house-icon.svg';
import ProfileIcon from '../assets/Frame4.svg';

const BottomNav = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Default '/' to '/home' internally for active state match
    const currentPath = location.pathname === '/' ? '/home' : location.pathname;

    const navItems = [
        { path: '/home', label: 'Home', icon: HomeIcon },
        { path: '/vehicles', label: 'Vehicles', icon: VehiclesIcon },
        { path: '/digital-id', label: 'Digital ID', icon: DigitalIdIcon },
        { path: '/club', label: 'Club', icon: ClubIcon },
        { path: '/profile', label: 'Profile', icon: ProfileIcon },
    ];

    return (
        <div className="fixed bottom-0 left-1/2 -translate-x-[50%] w-full md:w-[402px] h-[80px] md:h-[92px] bg-white shadow-[0px_-5px_6px_rgba(0,0,0,0.05)] border-t border-[#f0f0f0] z-50 flex flex-col items-center justify-start pt-3 pb-2 md:pb-0">
            <div className="flex w-full px-6 justify-between items-center max-w-[402px]">
                {navItems.map((item) => {
                    const isActive = currentPath.startsWith(item.path);

                    return (
                        <motion.button
                            key={item.label}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate(`${item.path}${location.search}`)}
                            className="flex flex-col items-center justify-center gap-[4px] w-[56px] bg-transparent cursor-pointer transition-all duration-300 flex-shrink-0 border-none outline-none"
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className={`w-6 h-6 transition-all duration-300 brightness-0 ${isActive ? 'opacity-100' : 'opacity-40'}`}
                            />
                            <span
                                className={`text-[11px] font-urbanist transition-all duration-300 ${isActive ? 'font-semibold text-black' : 'font-medium text-[#282828] opacity-40'}`}
                            >
                                {item.label}
                            </span>
                        </motion.button>
                    );
                })}
            </div>

            {/* iOS Home Indicator */}
            <div className="hidden md:block w-[134px] h-[5px] bg-[#0d0d0d] rounded-full mt-[18px]"></div>
        </div>
    );
};

export default BottomNav;
