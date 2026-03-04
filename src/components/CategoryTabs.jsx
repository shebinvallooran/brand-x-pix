import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const CategoryTabs = () => {
    const [active, setActive] = useState('All');
    const categories = ['All', 'Sedan', 'SUV', 'Electric'];

    return (
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-1">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`relative flex-shrink-0 px-7 py-2.5 rounded-[21px] font-urbanist font-medium text-[14px] leading-4 transition-colors border outline-none ${active === cat ? 'text-white border-transparent' : 'bg-white text-[#282828] border-white'}`}
                >
                    {active === cat && (
                        <motion.div
                            layoutId="activeTabIndicator"
                            className="absolute inset-0 bg-[#0E0E0E] rounded-[21px] z-[-1]"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">{cat}</span>
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;
