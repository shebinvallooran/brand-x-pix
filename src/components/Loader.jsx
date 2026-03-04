import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="absolute inset-0 bg-[#0d0d0d] flex flex-col justify-center items-center z-[9999] overflow-hidden">
            {/* Heritage Cinematic Ambience */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-red/5 rounded-full blur-[180px] animate-pulse" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#0d0d0d_95%)]" />
            </div>

            <div className="relative w-full max-w-[360px] flex flex-col items-center">

                {/* The Heritage Track */}
                <div className="relative w-full h-[1px] bg-white/5 overflow-hidden rounded-full mb-16 px-4">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[300%]"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Classic 70s Cadillac Silhouette */}
                <div className="relative w-full h-[100px] flex justify-center items-end">

                    {/* Speed Haze / Time Streaks */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-[0.5px] bg-gradient-to-l from-white/30 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                            style={{
                                width: Math.random() * 100 + 100,
                                bottom: 12 + (i * 12),
                                right: '-10%'
                            }}
                            animate={{
                                x: [300, -800],
                                opacity: [0, 0.7, 0],
                                scaleX: [1, 3, 1]
                            }}
                            transition={{
                                duration: 0.5 + (i * 0.1),
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                            }}
                        />
                    ))}

                    {/* Hand-Crafted Classic Cadillac SVG */}
                    <motion.div
                        className="relative flex flex-col items-center"
                        animate={{
                            y: [0, -1, 0, -1.2, 0], // Soft heavy suspension bounce
                        }}
                        transition={{
                            duration: 0.35,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {/* Vintage Chrome & Light Glows */}
                        <div className="absolute -left-4 bottom-8 w-10 h-10 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute -left-2 bottom-12 w-4 h-2 bg-white/50 rounded-full blur-[3px]" />
                        <div className="absolute -right-3 bottom-12 w-4 h-4 bg-brand-red/20 rounded-full blur-lg" />

                        <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Road Shadow */}
                            <ellipse cx="100" cy="54" rx="90" ry="3" fill="black" fillOpacity="0.6" />

                            {/* The 1970s Cadillac Body - Straight, Bold, Low */}
                            <path
                                d="M5 48V45H10V42L15 38H185L190 42V45H195V48H5Z"
                                fill="white"
                                className="opacity-10"
                            />

                            {/* Main Silhouette Path - Fleetwood/Deville Style */}
                            <path
                                d="M10 48H190V40L185 35L180 34V20C180 20 175 18 160 18H105L85 18C70 18 45 22 45 22L35 34H12L10 38V48Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-90"
                            />

                            {/* Signature Vinyl Roof Line */}
                            <path d="M45 22H165L180 22" stroke="white" strokeWidth="0.8" className="opacity-40" />

                            {/* Massive Front Bumper & Quad Headlights (Sketching the detail) */}
                            <path d="M10 38H35V48H10V38Z" stroke="white" strokeWidth="1" className="opacity-60" />
                            <rect x="15" y="40" width="6" height="4" fill="white" className="opacity-80" />
                            <rect x="23" y="40" width="6" height="4" fill="white" className="opacity-80" />

                            {/* Chrome Beltline - Perfectly straight */}
                            <path d="M12 34H190" stroke="white" strokeWidth="0.5" className="opacity-30" />

                            {/* Cadillac Tailfin Accent (Subtle) */}
                            <path d="M180 34L192 32V42" stroke="white" strokeWidth="1" className="opacity-80" />
                            <path d="M192 32L195 31" stroke="#dc2928" strokeWidth="2" strokeLinecap="round" className="opacity-90" />

                            {/* Roof Pillars */}
                            <path d="M85 18L75 22" stroke="white" strokeWidth="1" className="opacity-40" />
                            <path d="M140 18L130 22" stroke="white" strokeWidth="1" className="opacity-40" />

                            {/* Classic Whitewall Wheels */}
                            <g className="wheel-front">
                                {/* Outer Tire */}
                                <circle cx="55" cy="48" r="9" stroke="white" strokeWidth="1.2" className="opacity-40" />
                                {/* THE WHITEWALL RING */}
                                <circle cx="55" cy="48" r="6" stroke="white" strokeWidth="1.5" className="opacity-90" />
                                {/* Hubcap */}
                                <circle cx="55" cy="48" r="3" fill="white" className="opacity-60" />

                                {/* Motion spokes */}
                                <motion.g animate={{ rotate: 360 }} transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }} style={{ originX: "55px", originY: "48px" }}>
                                    <line x1="55" y1="45" x2="55" y2="51" stroke="white" strokeWidth="0.5" className="opacity-40" />
                                    <line x1="52" y1="48" x2="58" y2="48" stroke="white" strokeWidth="0.5" className="opacity-40" />
                                </motion.g>
                            </g>

                            <g className="wheel-rear">
                                <circle cx="155" cy="48" r="9" stroke="white" strokeWidth="1.2" className="opacity-40" />
                                <circle cx="155" cy="48" r="6" stroke="white" strokeWidth="1.5" className="opacity-90" />
                                <circle cx="155" cy="48" r="3" fill="white" className="opacity-60" />

                                <motion.g animate={{ rotate: 360 }} transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }} style={{ originX: "155px", originY: "48px" }}>
                                    <line x1="155" y1="45" x2="155" y2="51" stroke="white" strokeWidth="0.5" className="opacity-40" />
                                    <line x1="152" y1="48" x2="158" y2="48" stroke="white" strokeWidth="0.5" className="opacity-40" />
                                </motion.g>
                            </g>
                        </svg>
                    </motion.div>
                </div>

                {/* Heritage Progress */}
                <div className="w-[260px] mt-12 px-2 flex flex-col items-center">
                    <div className="flex justify-between w-full items-baseline mb-4">
                        <span className="font-urbanist text-[9px] font-bold text-white/30 tracking-[0.3em] uppercase">Fleetwood Heritage</span>
                        <span className="font-urbanist text-[11px] font-medium text-white/80 italic">1976</span>
                    </div>

                    <div className="w-full h-[2px] bg-white/5 relative overflow-hidden ring-1 ring-white/5">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent w-[50%]"
                            animate={{ x: ['-200%', '400%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3.5, ease: "easeInOut" }}
                        />
                    </div>
                </div>

                {/* Heritage Cinematic Text */}
                <div className="mt-12 flex flex-col items-center text-center gap-3">
                    <motion.h2
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="font-urbanist text-[15px] font-black text-white uppercase m-0"
                    >
                        A Legacy of Excellence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="font-urbanist text-[9.5px] font-semibold text-white tracking-[0.2em] uppercase"
                    >
                        Timeless Design. Boundless Future.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Loader;
