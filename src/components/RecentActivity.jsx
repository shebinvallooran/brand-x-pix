import React from 'react';
import SpanderIcon from '../assets/svg/spander-icon.svg';
import CalenderIcon from '../assets/svg/calender-icon.svg';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ActivityItem = ({ iconPath, title, subtitle, time, isLast }) => (
    <div className={`flex items-start gap-4 py-4 ${!isLast ? 'border-b border-[#f0f0f0]' : ''}`}>
        <div className="w-10 h-10 bg-transparent flex justify-center items-center shrink-0">
            <img src={iconPath} alt={title} className="w-[20px] h-[20px] object-contain opacity-80" />
        </div>
        <div className="flex-1">
            <div className="flex items-center justify-between mb-0.5">
                <h4 className="text-[15px] font-urbanist font-bold text-[#131313] m-0 tracking-tight">{title}</h4>
            </div>
            <p className="text-[13px] font-urbanist font-medium text-[#a0a0a0] m-0 mt-0.5">{subtitle}</p>
        </div>
        <div className="shrink-0 pt-1">
            <span className="text-[11px] font-urbanist font-medium text-[#b0b0b0]">{time}</span>
        </div>
    </div>
);

const RecentActivity = () => {
    const activities = [
        { iconPath: SpanderIcon, title: 'Service Completed', subtitle: 'Oil change & inspection', time: '2 days ago' },
        { iconPath: CalenderIcon, title: 'Booking Confirmed', subtitle: 'Booking Confirmed', time: '2 days ago' }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
            className="px-5 pb-[40px] mt-4"
        >
            <div className="bg-white rounded-[26px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <h3 className="text-[#131313] text-[18px] font-urbanist font-bold tracking-tight mb-2 mt-1">Recent Activity</h3>
                <div className="flex flex-col">
                    {activities.map((item, index) => (
                        <ActivityItem key={index} {...item} isLast={index === activities.length - 1} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default RecentActivity;
