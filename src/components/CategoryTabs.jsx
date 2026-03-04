import React, { useState } from 'react';

const CategoryTabs = () => {
    const [active, setActive] = useState('All');
    const categories = ['All', 'Sedan', 'SUV', 'Electric'];

    return (
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-1">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`flex-shrink-0 px-7 py-2.5 rounded-[21px] font-urbanist font-medium text-[14px] leading-4 transition-colors border ${active === cat
                            ? 'bg-[#0E0E0E] text-white border-transparent'
                            : 'bg-white text-[#282828] border-white'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;
