import React from 'react';
import SearchIcon from '../assets/svg/search-icon.svg';
import MicIcon from '../assets/svg/mic-icon.svg';

const SearchBar = ({ className }) => {
    return (
        <div className={`flex items-center justify-between px-5 bg-white rounded-[50px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] box-border ${className || 'w-full h-[58px]'}`}>
            <img src={SearchIcon} alt="Search" className="w-5 h-5 text-[#A0A0A0] shrink-0" />
            <input
                type="text"
                placeholder="Search vehicles..."
                className="w-full bg-transparent outline-none pl-4 text-[#282828] font-urbanist font-medium text-[16px] placeholder:text-[#a0a0a0] placeholder:font-normal h-full tracking-wide"
            />
            <button className="flex items-center justify-center cursor-pointer outline-none bg-transparent border-none shrink-0">
                <img src={MicIcon} alt="Voice Search" className="w-[22px] h-[22px] text-[#282828]" />
            </button>
        </div>
    );
};

export default SearchBar;
