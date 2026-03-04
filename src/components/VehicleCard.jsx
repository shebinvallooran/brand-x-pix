import React from 'react';
import image81 from '../assets/image-81@3x.png';
import frame52 from '../assets/Frame-52.svg';

const VehicleCard = ({ image = image81, title = "2026 CT4 . Sport AWD", type = "Electric Sedan", price = "$72,500" }) => {
    return (
        <div className={`w-full bg-white rounded-[20px] p-1.5 pb-1 relative flex flex-col justify-between h-[256px] border border-[#e8e8e8] shadow-[0px_5px_6px_rgba(0,0,0,0.05)]`}>

            {/* Top right icon */}
            <div className="absolute top-3 right-3 z-10">
                <div className="w-9 h-9 flex items-center justify-center rounded-full overflow-hidden">
                    <img src={frame52} alt="badge" className="w-9 h-9 object-cover" />
                </div>
            </div>

            {/* Image Container */}
            <div className="absolute inset-x-[5px] top-[5px] h-[196px] bg-[#f8f8fb] rounded-[16px] overflow-hidden flex justify-center items-center">
                <img src={image} alt={title} className="w-[325px] h-[183px] object-contain drop-shadow-md" />
            </div>

            {/* Bottom Info Card - Positioned absolute to overlap the bottom correctly */}
            <div className="absolute bottom-[5px] inset-x-[6px] h-[70px] bg-[#fafafa] rounded-[16px] border border-[#e8e8e8] px-3.5 py-3 flex justify-between items-center z-10 shadow-[0px_5px_6px_rgba(0,0,0,0.05)]">
                <div className="flex flex-col justify-center">
                    <h3 className="font-urbanist font-semibold text-[16px] tracking-tight text-[#282828] m-0 leading-[16px]">{title}</h3>
                    <p className="font-urbanist font-normal text-[16px] text-[rgba(40,40,40,0.4)] m-0 mt-1 leading-[16px]">{type}</p>
                </div>
                <p className="font-urbanist font-bold text-[18px] text-[#282828] m-0">{price}</p>
            </div>
        </div>
    );
};

export default VehicleCard;
