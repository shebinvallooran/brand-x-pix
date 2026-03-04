import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import LocationIcon from '../assets/svg/location-icon.svg';
import QrIcon from '../assets/svg/qr-icon.svg';
import ChargingStationIcon from '../assets/svg/charging-station-icon.svg';
import DialIcon from '../assets/svg/dial-icon.svg';

const ActionCard = ({ iconPath, title, subtitle, color, path }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(false);
    const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });

    const handleClick = (e) => {
        if (!path) return;

        // Ripple transition animation
        const rect = e.currentTarget.getBoundingClientRect();
        setClickCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });

        setIsAnimating(true);

        // Wait a slight delay for the ripple to be seen before routing
        setTimeout(() => {
            navigate(`${path}${location.search}`);
            setIsAnimating(false);
        }, 150);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 350, damping: 25 } }
    };

    return (
        <motion.div
            variants={cardVariants}
            onClick={handleClick}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.96 }}
            className="bg-white rounded-[26px] px-5 py-5 h-[142px] flex flex-col justify-end relative shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden cursor-pointer group"
        >
            {/* Ripple Transition Overlay */}
            {isAnimating && (
                <div
                    className="absolute rounded-full pointer-events-none z-0 animate-expand-fullscreen"
                    style={{
                        left: clickCoords.x,
                        top: clickCoords.y,
                        width: '300px',
                        height: '300px',
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle, rgba(19,19,19,0.1) 0%, rgba(19,19,19,0) 70%)',
                        border: '1px solid rgba(19,19,19,0.2)'
                    }}
                />
            )}

            <div className="absolute top-4 right-4 w-[46px] h-[46px] bg-[#F8F9FB] rounded-[14px] flex justify-center items-center transition-transform group-hover:scale-110 group-hover:bg-[#f0f2f5] z-10">
                <img src={iconPath} alt={title} className="w-6 h-6 object-contain transition-transform" style={{ filter: color === '#dc2928' ? 'none' : 'none' }} />
            </div>
            <div className="mb-0 w-full z-10 relative">
                <h4 className="text-[#131313] text-[15px] font-urbanist font-bold mb-[2px] tracking-tight">{title}</h4>
                <div className="flex items-center justify-between w-full">
                    <p className="text-[#a0a0a0] text-[11px] font-urbanist font-medium tracking-wide m-0">{subtitle}</p>
                    <ArrowUpRight className="text-[#c0c0c0] transition-transform group-hover:text-[#131313] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={20} strokeWidth={2.2} />
                </div>
            </div>
        </motion.div>
    );
};

const QuickActionGrid = () => {
    const actions = [
        { iconPath: LocationIcon, title: 'Find Dealer', subtitle: 'Nearby Showroom', color: '#0d0d0d', path: '/find-dealer' },
        { iconPath: QrIcon, title: 'Booking', subtitle: 'Your Appointments', color: '#0d0d0d' },
        { iconPath: ChargingStationIcon, title: 'Find Chargers', subtitle: 'EV Charging Nearby', color: '#0d0d0d' },
        { iconPath: DialIcon, title: 'Emergency', subtitle: 'Immediate Help', color: '#dc2928' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            }
        }
    };

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="px-5 pb-2"
        >
            <div className="grid grid-cols-2 gap-3.5">
                {actions.map((action, index) => (
                    <ActionCard key={index} {...action} />
                ))}
            </div>
        </motion.section>
    );
};

export default QuickActionGrid;
