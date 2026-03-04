import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchIcon from '../assets/svg/search-icon.svg';
import MicIcon from '../assets/svg/mic-icon.svg';
import SlidersIcon from '../assets/svg/filter-icon.svg';
import SearchBar from '../components/SearchBar';
import FavouriteIcon from '../assets/svg/favourate-icon.svg';
import { motion } from 'framer-motion';

import cadillacCT4Sedan from '../assets/images/cadilac-images/cadilac-CT-4-sedan.png';
import cadillacCT5Sedan from '../assets/images/cadilac-images/cadilac-CT-5-2026-sedan.png';
import cadillacSuvHero from '../assets/images/cadilac-images/cadilac-suv-hero.png';
import cadillacCelestiq from '../assets/images/cadilac-images/vehicles-CELESTIQ-26-ev.avif';
import cadillacEscaladeIq from '../assets/images/cadilac-images/vehicles-nav-suvs-26-escalade-iql-v4.avif';
import cadillacVistiq from '../assets/images/cadilac-images/vehicles-nav-suvs-26-vistiq-v3.avif';

import otherHero from '../assets/images/other-images/other-hero.png';
import otherImage1 from '../assets/images/other-images/other-image-1.png';
import otherImage3 from '../assets/images/other-images/other-image-3.png';

const Vehicles = () => {
    const [activeChip, setActiveChip] = useState('All');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    const chips = ['All', 'Sedan', 'SUV', 'Electric'];

    const cadillacVehicles = [
        {
            id: 1,
            name: '2026 CT4 Sedan',
            price: '$50,000',
            type: 'Sedan',
            status: 'New',
            image: cadillacCT4Sedan,
            electric: false,
        },
        {
            id: 2,
            name: '2026 CT5 Sedan',
            price: '$60,000',
            type: 'Sedan',
            status: 'New',
            image: cadillacCT5Sedan,
            electric: false,
        },
        {
            id: 3,
            name: 'CELESTIQ',
            price: '$340,000',
            type: 'Electric Sedan',
            status: 'EV',
            image: cadillacCelestiq,
            electric: true,
        },
        {
            id: 4,
            name: 'ESCALADE IQ',
            price: '$130,000',
            type: 'Electric SUV',
            status: 'EV',
            image: cadillacEscaladeIq,
            electric: true,
        },
        {
            id: 5,
            name: 'VISTIQ',
            price: '$73,000',
            type: 'Electric SUV',
            status: 'EV',
            image: cadillacVistiq,
            electric: true,
        },
        {
            id: 6,
            name: 'ESCALADE SUV',
            price: '$85,000',
            type: 'SUV',
            status: '',
            image: cadillacSuvHero,
            electric: false,
        }
    ];

    const otherVehicles = [
        {
            id: 1,
            name: '2026 CT4 . Sport AWD',
            price: '$72,500',
            type: 'Electric Sedan',
            status: 'New',
            image: otherHero,
            electric: true,
        },
        {
            id: 2,
            name: '2026 CT4 . Sport AWD',
            price: '$72,500',
            type: 'Electric Sedan',
            status: 'EV',
            image: otherImage1,
            electric: true,
        },
        {
            id: 3,
            name: '2026 CT4 . Sport AWD',
            price: '$72,500',
            type: 'Sedan',
            status: '',
            image: otherImage3,
            electric: false,
        }
    ];

    const baseVehicles = query === 'cadillac' ? cadillacVehicles : otherVehicles;
    const vehicles = baseVehicles.filter(vehicle => {
        if (activeChip === 'All') return true;
        if (activeChip === 'Electric') return vehicle.electric;
        return vehicle.type.includes(activeChip);
    });

    return (
        <div className="pt-4 md:pt-12 bg-transparent min-h-full">
            <div className="px-5 mb-5 mt-2">
                <h1 className="font-urbanist font-medium text-[28px] text-[#131313] m-0 tracking-tight">Vehicles</h1>
            </div>

            <div className="px-5 flex gap-[8px] mb-[12px] w-full box-border">
                <SearchBar className="flex-1 h-[50px]" />
                <button className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-pointer border-[#f0f0f0] border shrink-0 transition-all duration-300">
                    <img src={SlidersIcon} alt="Filters" className="w-[20px] h-[20px]" />
                </button>
            </div>

            {/* Chips */}
            <div className="pl-5 pr-5 flex items-center gap-[10px] overflow-x-auto scrollbar-hide py-1 mb-[20px]">
                {chips.map(chip => (
                    <motion.button
                        key={chip}
                        whileTap={{ scale: 0.95 }}
                        className={`px-[18px] py-[6px] rounded-[16px] border-none text-[13px] font-urbanist font-medium cursor-pointer whitespace-nowrap transition-colors duration-300 flex-shrink-0 relative overflow-hidden ${activeChip === chip ? 'bg-[#0d0d0d] text-white' : 'bg-white text-[#282828] shadow-[0_2px_8px_rgba(0,0,0,0.02)]'}`}
                        onClick={() => setActiveChip(chip)}
                    >
                        {activeChip === chip && (
                            <div className="absolute inset-0 bg-gradient-to-r from-[#131313] to-[#2a2a2a] -z-10" />
                        )}
                        <span className="relative z-10">{chip}</span>
                    </motion.button>
                ))}
                <div className="w-5 shrink-0"></div> {/* Scroll spacer */}
            </div>

            {/* Vehicles List */}
            <motion.div
                className="px-5 flex flex-col gap-[18px]"
                variants={{
                    hidden: {},
                    show: {
                        transition: { staggerChildren: 0.1 }
                    }
                }}
                initial="hidden"
                animate="show"
            >
                {vehicles.map((vehicle, index) => (
                    <motion.div
                        key={vehicle.id}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white rounded-[24px] p-3 pt-4 relative flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.03)] cursor-pointer"
                    >

                        {/* Top Label & Heart */}
                        <div className="absolute top-[26px] left-[20px] right-[20px] flex justify-between items-start z-10">
                            <span className="font-urbanist font-medium text-[15px] text-[#282828] mt-1 tracking-tight">{vehicle.status}</span>
                            <motion.button whileTap={{ scale: 0.8 }} className="bg-transparent border-none cursor-pointer p-0">
                                <img src={FavouriteIcon} alt="Favourite" className="w-[24px] h-[24px]" />
                            </motion.button>
                        </div>

                        {/* Image Layer */}
                        <div className="w-full flex justify-center items-center mt-1 mb-5 relative z-0">
                            <img src={vehicle.image} alt={vehicle.name} className="w-[95%] object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)]" />
                        </div>

                        {/* Text Box Layout (Inner Container) */}
                        <div className="bg-[#FAFAFA]/98 rounded-[16px] border border-[#E8E8E8] px-4 py-[14px] flex flex-col w-full z-10 box-border">
                            <div className="flex justify-between items-center w-full mb-1">
                                <h3 className="font-urbanist text-[15px] font-semibold text-[#1c1c1e] m-0 tracking-tight">{vehicle.name}</h3>
                                <span className="font-urbanist text-[15px] font-bold text-[#1c1c1e]">{vehicle.price}</span>
                            </div>
                            <p className="font-urbanist font-medium text-[13px] text-[#A0A0A0] m-0">{vehicle.type}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Vehicles;
