import React from 'react';
import { Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const VehicleStatus = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    const vehicleName = query === 'cadillac' ? 'ESCALADE-V' : 'Range Rover (L405)';

    return (
        <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="px-5 pb-2 mt-4"
        >
            <div className="bg-white rounded-[26px] p-5 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative">
                <div className="flex justify-between items-center mb-5">
                    <h3 className="text-black text-[16px] font-urbanist font-bold m-0 tracking-tight">My {vehicleName}</h3>
                    <div className="bg-[#fff1e5] px-2.5 py-1 rounded-full flex gap-1 items-center">
                        <Clock size={12} color="#f97316" strokeWidth={2.5} />
                        <span className="text-[#f97316] text-[10px] font-urbanist font-bold uppercase tracking-wider">Next Service Due</span>
                    </div>
                </div>

                <div className="flex items-center">
                    {/* Circle Progress */}
                    <div className="relative w-[60px] h-[60px] mr-5 shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="30" cy="30" r="26" stroke="#f0f0f0" strokeWidth="5" fill="none" />
                            <circle cx="30" cy="30" r="26" stroke="#3b82f6" strokeWidth="5" fill="none" strokeDasharray="163.3" strokeDashoffset={163.3 * (1 - 0.78)} strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[#131313] text-[14px] font-urbanist font-bold">78%</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-col gap-3 flex-1">
                        <div className="flex justify-between items-center">
                            <span className="text-[#a0a0a0] text-[13px] font-urbanist font-medium">Next service</span>
                            <span className="text-[#131313] text-[13px] font-urbanist font-bold">Mar 15</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[#a0a0a0] text-[13px] font-urbanist font-medium">Mileage</span>
                            <span className="text-[#131313] text-[13px] font-urbanist font-bold">24,500 km</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default VehicleStatus;
