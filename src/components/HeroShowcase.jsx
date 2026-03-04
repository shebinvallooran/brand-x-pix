import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronsRight } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import cadillacHero from '../assets/images/cadilac-images/cadilac-suv-hero.png';
import otherHero from '../assets/images/other-images/other-hero.png';

const HeroShowcase = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    const heroImage = query === 'cadillac' ? cadillacHero : otherHero;
    const heroTitle = query === 'cadillac' ? 'ESCALADE-V' : 'Range Rover (L405)';

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-auto bg-transparent flex flex-col items-center mt-6 mb-4"
        >
            {/* Main Vehicle */}
            <div className="z-[100] w-full m-0 flex justify-center">
                <img src={heroImage} alt={heroTitle} className="w-[365px] h-auto block" />
            </div>

            <div className="relative flex flex-col items-center mt-4 mb-6 z-[110]">
                <h2 className="font-urbanist text-[16px] font-bold tracking-[0.05em] text-black m-0 uppercase">{heroTitle}</h2>
                <button className="mt-2 w-[80px] h-[26px] rounded-full bg-[#131313] flex items-center justify-center cursor-pointer shadow-sm active:scale-[0.96] transition-transform">
                    <ChevronsRight size={18} color="#ffffff" strokeWidth={1.5} />
                </button>
            </div>
        </motion.section>
    );
};

export default HeroShowcase;
