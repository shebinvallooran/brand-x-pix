import React, { useState, useEffect } from 'react';
import { Signal, Wifi, Battery } from 'lucide-react';

const StatusBar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return (
        <div className="hidden md:flex absolute top-0 left-0 w-full h-12 pt-3 px-8 justify-between items-center z-[5000] text-[15px] font-semibold text-black">
            <div className="time">{formattedTime}</div>
            <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-black rounded-[20px] z-[5100]"></div>
            <div className="flex gap-2 items-center">
                <Signal size={16} strokeWidth={2.5} />
                <Wifi size={16} strokeWidth={2.5} />
                <Battery size={20} strokeWidth={2} style={{ transform: 'rotate(-90deg)' }} />
            </div>
        </div>
    );
};

export default StatusBar;
