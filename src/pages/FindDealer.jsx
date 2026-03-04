import React, { useState } from 'react';
import { Search, Mic, SlidersHorizontal, MapPin, ArrowLeft, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import mapImage from '../assets/images/🌎 Map Maker_  (Standard).png';
import dealerImage from '../assets/images/image 32.png';

const FindDealer = () => {
    const navigate = useNavigate();
    const [activeChip, setActiveChip] = useState('All');
    const chips = ['All', 'Sales', 'Service', 'Parts'];

    const dealers = [
        {
            id: 1,
            name: 'Brand-X Westside',
            address: '456 West Ave, New York, NY 10023',
            distance: '2.4 km',
            rating: 4.3,
            reviews: 234,
            status: 'Open',
            statusBg: 'bg-[#A3EDB8]',
            statusColor: 'text-[#131313]'
        },
        {
            id: 2,
            name: 'Brand-X Westside',
            address: '456 West Ave, New York, NY 10023',
            distance: '2.4 km',
            rating: 4.3,
            reviews: 234,
            status: 'Close',
            statusBg: 'bg-[#F4C6A9]',
            statusColor: 'text-[#131313]'
        },
        {
            id: 3,
            name: 'Brand-X Westside',
            address: '456 West Ave, New York, NY 10023',
            distance: '2.4 km',
            rating: 4.3,
            reviews: 234,
            status: 'Close',
            statusBg: 'bg-[#F4C6A9]',
            statusColor: 'text-[#131313]'
        }
    ];

    return (
        <div className="pt-12 bg-[#F1F2F4] min-h-screen">
            {/* Header */}
            <div className="px-5 mb-6 flex items-center gap-3">
                <button onClick={() => navigate(-1)} className="p-1 -ml-1 cursor-pointer bg-transparent border-none">
                    <ArrowLeft className="w-6 h-6 text-[#131313]" />
                </button>
                <h1 className="font-urbanist font-medium text-[20px] text-[#131313] m-0 tracking-tight">Find a Dealer</h1>
            </div>

            {/* Search and Filter Section */}
            <div className="px-5 flex gap-[8px] mb-[12px] w-full box-border">
                {/* Search Bar */}
                <div className="flex-1 h-[50px] flex items-center justify-between px-4 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] box-border">
                    <Search className="w-[20px] h-[20px] text-[#A0A0A0] shrink-0" />
                    <input
                        type="text"
                        placeholder="Search Showroom"
                        className="w-full h-full bg-transparent border-none outline-none pl-3 pr-2 text-[#282828] font-urbanist text-[15px] placeholder:text-[#A0A0A0]"
                    />
                    <button className="flex items-center justify-center cursor-pointer bg-transparent border-none p-0">
                        <Mic className="w-[20px] h-[20px] text-[#282828]" />
                    </button>
                </div>

                {/* Filter Button */}
                <button className="w-[50px] h-[50px] rounded-[50px] bg-white flex justify-center items-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-pointer border-[#f0f0f0] border shrink-0 transition-all duration-300 p-0">
                    <SlidersHorizontal className="w-[20px] h-[20px] text-[#282828]" />
                </button>
            </div>

            {/* Chips */}
            <div className="pl-5 pr-5 flex items-center gap-[10px] overflow-x-auto scrollbar-hide py-1 mb-[20px]">
                {chips.map(chip => (
                    <button
                        key={chip}
                        className={`px-[18px] py-[6px] rounded-[16px] border-none text-[13px] font-urbanist font-medium cursor-pointer whitespace-nowrap transition-all duration-300 flex-shrink-0 ${activeChip === chip ? 'bg-[#0d0d0d] text-white' : 'bg-white text-[#282828] shadow-[0_2px_8px_rgba(0,0,0,0.02)]'}`}
                        onClick={() => setActiveChip(chip)}
                    >
                        {activeChip === chip && (
                            <div className="absolute inset-0 bg-gradient-to-r from-[#131313] to-[#2a2a2a] -z-10" />
                        )}
                        <span className="relative z-10">{chip}</span>
                    </button>
                ))}
            </div>

            {/* Map */}
            <div className="px-5 mb-5">
                <img
                    src={mapImage}
                    alt="Map"
                    className="w-full h-[140px] object-cover rounded-[20px] shadow-sm block"
                />
            </div>

            {/* Dealers List Container */}
            <div className="mx-5 bg-white rounded-[24px] p-4 shadow-sm pb-5">
                <h2 className="font-urbanist font-semibold text-[17px] text-[#131313] mb-4">4 Dealers Found</h2>

                <div className="flex flex-col gap-4">
                    {dealers.map((dealer) => (
                        <div key={dealer.id} className="w-full rounded-[20px] border border-[#F0F0F0] p-3 flex gap-3 shadow-sm bg-white">
                            <img src={dealerImage} alt={dealer.name} className="w-[86px] h-[86px] object-cover rounded-[14px] shrink-0" />

                            <div className="flex flex-col flex-1 py-0 min-w-0">
                                <h3 className="font-urbanist text-[16px] font-semibold text-[#131313] mb-1 truncate">{dealer.name}</h3>
                                <p className="font-urbanist text-[13px] text-[#A0A0A0] leading-[1.2] mb-auto pr-1 line-clamp-2">{dealer.address}</p>

                                <div className="flex items-center w-full mt-2 gap-1 overflow-hidden">
                                    <div className="flex items-center shrink-0">
                                        <Star className="w-[14px] h-[14px] text-[#FBBF24] fill-[#FBBF24]" />
                                        <span className="font-urbanist font-bold text-[13px] text-[#131313] ml-1">{dealer.rating}</span>
                                        <span className="font-urbanist font-medium text-[13px] text-[#A0A0A0] ml-1">({dealer.reviews})</span>
                                    </div>

                                    <div className="flex items-center shrink-0 ml-1">
                                        <MapPin className="w-[13px] h-[13px] text-[#A0A0A0]" />
                                        <span className="font-urbanist font-medium text-[13px] text-[#A0A0A0] ml-1 whitespace-nowrap">{dealer.distance}</span>
                                    </div>

                                    <div className={`ml-auto px-3 py-[4px] rounded-full font-urbanist font-semibold text-[12px] tracking-wide ${dealer.statusBg} ${dealer.statusColor} shrink-0`}>
                                        {dealer.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FindDealer;
