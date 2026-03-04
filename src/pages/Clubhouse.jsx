import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import testImage1 from '../assets/images/image 36.png'; // Using provided image as placeholder for events
import testImage2 from '../assets/images/image 37.png'; // Using provided image as placeholder for events
import testImage3 from '../assets/images/image 38.png'; // Using provided image as placeholder for events

const Clubhouse = () => {
    const [activeTab, setActiveTab] = useState('Event');
    const [activeCategory, setActiveCategory] = useState('All');

    // Set default selected date as today's date (e.g., "04")
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today.getDate().toString().padStart(2, '0'));

    // Generate calendar days based on the image: Mon 24 to Sun 30
    const days = [
        { day: 'MON', date: '02' },
        { day: 'TUE', date: '03' },
        { day: 'WED', date: '04' },
        { day: 'THU', date: '05' },
        { day: 'FRI', date: '06' },
        { day: 'SAT', date: '07' },
        { day: 'SUN', date: '08' },
    ];

    const categories = ['All', 'Fitness', 'Social', 'Automotive'];

    const events = [
        {
            id: 1,
            title: 'Track Day Experience',
            date: 'Mar 15, 2026',
            time: '9:00 AM',
            location: 'Grand Circuit',
            spotsLeft: '8 spots left',
            tag: '#Automotive',
            image: testImage1,
        },
        {
            id: 2,
            title: 'Track Day Experience', // Using same data as placeholder for the list
            date: 'Mar 15, 2026',
            time: '9:00 AM',
            location: 'Grand Circuit',
            spotsLeft: '8 spots left',
            tag: '#Automotive',
            image: testImage2,
        },
        {
            id: 3,
            title: 'Track Day Experience',
            date: 'Mar 15, 2026',
            time: '9:00 AM',
            location: 'Grand Circuit',
            spotsLeft: '8 spots left',
            tag: '#Automotive',
            image: testImage3,
        }
    ];

    return (
        <div className="pt-4 md:pt-12 flex flex-col bg-transparent font-urbanist min-h-full">

            {/* Header */}
            <div className="px-5 mb-5 mt-2">
                <h1 className="font-urbanist font-medium text-[24px] text-[#131313] m-0 tracking-tight">Clubhouse</h1>
            </div>

            {/* Calendar Slider */}
            <div className="w-full overflow-x-auto scrollbar-hide px-5 py-4 flex gap-[14px] items-center mb-[10px]">
                {days.map((item, index) => {
                    const isActive = item.date === selectedDate;
                    return (
                        <motion.div
                            key={index}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedDate(item.date)}
                            className={`flex flex-col items-center justify-center min-w-[50px] h-[76px] rounded-[16px] transition-all duration-300 cursor-pointer flex-shrink-0 relative overflow-hidden ${isActive
                                ? 'bg-[#291BA6] shadow-[0_8px_16px_rgba(41,27,166,0.25)]'
                                : 'bg-transparent hover:bg-black/5'
                                }`}
                        >
                            <div
                                className={`text-[11px] font-bold tracking-wide transition-colors duration-200 mt-1 z-10 ${isActive ? 'text-white' : 'text-[#B0B0B0]'
                                    }`}
                            >
                                {item.day}
                            </div>
                            <div
                                className={`text-[20px] font-bold mt-1 transition-colors duration-200 z-10 ${isActive ? 'text-white' : 'text-[#303030]'
                                    }`}
                            >
                                {item.date}
                            </div>

                            {/* Top/Bottom cutout effects accurately matching the Figma comp */}
                            {isActive && (
                                <>
                                    <motion.div layoutId="calendarActive" className="absolute inset-0 bg-[#291BA6] -z-10" />
                                    <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 w-[24px] h-[24px] bg-[#F1F2F4] rounded-full z-10"></div>
                                    <div className="absolute -bottom-[12px] left-1/2 -translate-x-1/2 w-[24px] h-[24px] bg-[#F1F2F4] rounded-full z-10"></div>
                                </>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Categories */}
            <div className="pl-5 pr-5 flex items-center gap-[10px] overflow-x-auto scrollbar-hide py-1 mb-[20px]">
                {categories.map((category, index) => (
                    <motion.button
                        key={index}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveCategory(category)}
                        className={`px-[18px] py-[6px] rounded-[16px] border-none text-[13px] font-urbanist font-medium cursor-pointer whitespace-nowrap transition-colors duration-300 flex-shrink-0 relative overflow-hidden ${activeCategory === category
                            ? 'bg-[#0d0d0d] text-white'
                            : 'bg-white text-[#282828] shadow-[0_2px_8px_rgba(0,0,0,0.02)]'
                            }`}
                    >
                        {activeCategory === category && (
                            <motion.div layoutId="clubActiveCategory" className="absolute inset-0 bg-gradient-to-r from-[#131313] to-[#2a2a2a] -z-10" />
                        )}
                        <span className="relative z-10">{category}</span>
                    </motion.button>
                ))}
            </div>

            {/* Main Content Area (Rounded White Box) */}
            <div className="bg-white rounded-[32px] mx-4 flex-1 p-[8px] pt-[12px] shadow-[0_-2px_16px_rgba(0,0,0,0.015)] relative mb-6">
                {/* Tab Segment (Event / History) */}
                <div className="w-full h-[48px] bg-[#F7F7F7] rounded-[24px] p-[5px] flex mb-6 relative">
                    <button
                        onClick={() => setActiveTab('Event')}
                        className={`flex-1 flex justify-center items-center rounded-full text-[14px] font-semibold z-10 transition-colors duration-300 relative ${activeTab === 'Event' ? 'text-brand-black' : 'text-[#9CA3AF]'
                            }`}
                    >
                        {activeTab === 'Event' && (
                            <motion.div
                                layoutId="activeTabIndicator"
                                className="absolute inset-0 bg-white rounded-[20px] shadow-[0_1px_4px_rgba(0,0,0,0.05)] border-[0.5px] border-black/[0.03] -z-10"
                            />
                        )}
                        Event
                    </button>
                    <button
                        onClick={() => setActiveTab('History')}
                        className={`flex-1 flex justify-center items-center rounded-full text-[14px] font-semibold z-10 transition-colors duration-300 relative ${activeTab === 'History' ? 'text-brand-black' : 'text-[#9CA3AF]'
                            }`}
                    >
                        {activeTab === 'History' && (
                            <motion.div
                                layoutId="activeTabIndicator"
                                className="absolute inset-0 bg-white rounded-[20px] shadow-[0_1px_4px_rgba(0,0,0,0.05)] border-[0.5px] border-black/[0.03] -z-10"
                            />
                        )}
                        History
                    </button>
                </div>

                {/* Events / History List Area */}
                <div className="flex flex-col gap-[18px] overflow-y-auto pb-6 scrollbar-hide h-[calc(100%-80px)] px-1">
                    <AnimatePresence mode="wait">
                        {activeTab === 'Event' ? (
                            <motion.div
                                key="events-list"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col gap-[18px]"
                            >
                                {events.map((event, idx) => (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-white rounded-[24px] p-[10px] flex gap-[14px] border border-[#EAEAEA] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer"
                                    >
                                        {/* Event Image */}
                                        <div className="w-[110px] h-[125px] rounded-[18px] overflow-hidden shrink-0">
                                            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                        </div>

                                        {/* Event Details */}
                                        <div className="flex-1 py-1 flex flex-col justify-between pr-1">
                                            <div>
                                                <h3 className="font-urbanist text-[15px] font-bold text-[#1c1c1e] leading-tight mb-2 tracking-tight">
                                                    {event.title}
                                                </h3>

                                                <div className="grid grid-cols-[auto_auto] gap-x-2 gap-y-[6px] mb-2 mt-1">
                                                    <div className="flex items-center gap-[6px] text-[#A0A0A0]">
                                                        <Calendar size={13} strokeWidth={2.5} />
                                                        <span className="font-urbanist text-[12.5px] font-medium tracking-tight truncate max-w-[80px]">{event.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-[6px] text-[#A0A0A0]">
                                                        <Clock size={13} strokeWidth={2.5} />
                                                        <span className="font-urbanist text-[12.5px] font-medium tracking-tight truncate">{event.time}</span>
                                                    </div>
                                                    <div className="flex items-center gap-[6px] text-[#A0A0A0]">
                                                        <MapPin size={13} strokeWidth={2.5} />
                                                        <span className="font-urbanist text-[12.5px] font-medium tracking-tight truncate max-w-[80px]">{event.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-[6px] text-[#A0A0A0]">
                                                        <Users size={13} strokeWidth={2.5} />
                                                        <span className="font-urbanist text-[12.5px] font-medium tracking-tight truncate">{event.spotsLeft}</span>
                                                    </div>
                                                </div>

                                                <div className="font-urbanist text-[12.5px] font-bold text-[#5c5c60] mt-[8px]">
                                                    {event.tag}
                                                </div>
                                            </div>

                                            <motion.button
                                                whileTap={{ scale: 0.95 }}
                                                className="w-full h-[36px] mt-2 bg-gradient-to-b from-[#1E1E1E] to-[#0A0A0A] text-white rounded-[12px] font-urbanist text-[13px] font-semibold tracking-wide flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.12)] border border-[#333333]"
                                            >
                                                Register
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            /* Empty state for History */
                            <motion.div
                                key="history-empty"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center justify-center h-full pt-10 pb-12 w-full"
                            >
                                <div className="w-[90px] h-[90px] rounded-full bg-[#f8f8f8] flex items-center justify-center mb-5 shadow-inner border border-[#f0f0f0]">
                                    <Calendar size={32} className="text-[#cccccc] stroke-[1.5]" />
                                </div>
                                <h3 className="font-urbanist text-[18px] font-bold text-[#1c1c1e] tracking-tight mb-2">No History Yet</h3>
                                <p className="font-urbanist text-[14px] font-medium text-[#A0A0A0] text-center max-w-[220px]">
                                    You haven't registered for any past clubhouse events.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
};

export default Clubhouse;
