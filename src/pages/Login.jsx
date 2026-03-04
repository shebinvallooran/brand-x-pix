import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import EmailIcon from '../assets/svg/email-icon.svg';
import LockIcon from '../assets/svg/lock-icon.svg';
import HideIcon from '../assets/svg/hide-icon.svg';
import AppleIcon from '../assets/svg/apple-icon.svg';
import GoogleIcon from '../assets/svg/google-color-icon.svg';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (email.trim().toLowerCase() === 'demo@gmail.com' && password === '12345612') {
            setError('');
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/home');
        } else {
            setError('Email and password incorrect');
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 1.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col px-6 pt-6 pb-10 flex-1 min-h-[100dvh]"
        >
            {/* Top Header */}
            <motion.div variants={itemVariants} className="flex justify-start items-center w-full mb-12">
                {/* Brand Logo - placeholder using a stylised script font representation */}
                <div className="font-['Brush_Script_MT',cursive] italic text-[28px] font-semibold text-[#131313] tracking-tight">Brandx</div>
            </motion.div>

            {/* Welcome Setup */}
            <motion.div variants={itemVariants} className="flex flex-col mb-8 mt-2">
                <h1 className="font-urbanist text-[34px] font-semibold text-[#131313] tracking-tight m-0 mb-1">Welcome Back</h1>
                <p className="font-urbanist text-[15px] font-medium text-[#8F8F8F] m-0">Your drive. Your control. All in one place.</p>
            </motion.div>

            {/* Form area */}
            <motion.div variants={itemVariants} className="flex flex-col flex-1 gap-5">
                {error && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-red-50 text-red-500 text-[14px] font-urbanist font-medium p-3 rounded-[12px] border border-red-100 text-center">
                        {error}
                    </motion.div>
                )}

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                    <label className="font-urbanist text-[15px] font-medium text-[#131313]">Email or Mobile Number</label>
                    <div className={`flex items-center bg-white rounded-[24px] px-4 py-[15px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] border ${error ? 'border-red-300' : 'border-transparent focus-within:border-[#e0e0e0]'} transition-colors`}>
                        <img src={EmailIcon} alt="Email" className="w-[22px] h-[22px] mr-3 opacity-60" />
                        <input
                            type="text"
                            placeholder="Enter your registered email or phone"
                            className="flex-1 bg-transparent border-none outline-none font-urbanist text-[15px] text-[#131313] placeholder:text-[#A8A8A8] [&:-webkit-autofill]:shadow-[0_0_0px_1000px_white_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#131313]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2">
                    <label className="font-urbanist text-[15px] font-medium text-[#131313]">Password</label>
                    <div className={`flex items-center bg-white rounded-[24px] px-4 py-[15px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] border ${error ? 'border-red-300' : 'border-transparent focus-within:border-[#e0e0e0]'} transition-colors`}>
                        <img src={LockIcon} alt="Lock" className="w-[22px] h-[22px] mr-3 opacity-60" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="flex-1 bg-transparent border-none outline-none font-urbanist text-[15px] text-[#131313] placeholder:text-[#A8A8A8] [&:-webkit-autofill]:shadow-[0_0_0px_1000px_white_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#131313]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="bg-transparent border-none p-0 ml-2 cursor-pointer outline-none flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity"
                        >
                            <img src={HideIcon} alt="Toggle hide" className="w-[20px] h-[20px]" />
                        </button>
                    </div>
                </div>

                {/* Remember me & Forgot Password */}
                <div className="flex justify-between items-center mt-1 mb-2">
                    <label className="flex items-center cursor-pointer group">
                        <div className="relative flex items-center justify-center w-[20px] h-[20px] mr-3">
                            <input
                                type="checkbox"
                                className="peer appearance-none w-[20px] h-[20px] border-[1.5px] border-[#A8A8A8] rounded-[6px] bg-transparent checked:bg-[#131313] checked:border-[#131313] transition-all cursor-pointer"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            {rememberMe && (
                                <svg className="absolute w-[12px] h-[12px] text-white pointer-events-none" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            )}
                        </div>
                        <span className="font-urbanist text-[14px] font-medium text-[#5f5f5f]">Remember me</span>
                    </label>

                    <button className="bg-transparent border-none p-0 cursor-pointer font-urbanist text-[14px] font-medium text-[#131313]">
                        Forgot Password?
                    </button>
                </div>

                {/* Login Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#0d0d0d] text-white font-urbanist text-[16px] font-semibold py-[18px] rounded-[100px] shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-shadow mt-2 border-none cursor-pointer"
                    onClick={handleLogin}
                >
                    Log In
                </motion.button>

                {/* Divider */}
                <div className="w-full mt-4 flex items-center justify-center gap-4 px-2">
                    <div className="h-[1px] flex-1 bg-[#D9D9D9]"></div>
                    <span className="font-urbanist text-[15px] font-medium text-[#131313]">or</span>
                    <div className="h-[1px] flex-1 bg-[#D9D9D9]"></div>
                </div>

                {/* Social Buttons */}
                <div className="flex justify-center items-center gap-6 mt-4">
                    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] border-none cursor-pointer">
                        <img src={AppleIcon} alt="Apple login" className="w-6 h-6" />
                    </motion.button>
                    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] border-none cursor-pointer">
                        <img src={GoogleIcon} alt="Google login" className="w-6 h-6" />
                    </motion.button>
                </div>

            </motion.div>

            {/* Footer Text */}
            <motion.div variants={itemVariants} className="w-full flex justify-center items-center mt-auto pt-6 pb-2">
                <p className="font-urbanist text-[15px] text-[#A0A0A0] m-0 tracking-tight">
                    Don't have an account? <button className="bg-transparent border-none p-0 cursor-pointer text-[#131313] font-bold">Create Account</button>
                </p>
            </motion.div>

        </motion.div>
    );
};

export default Login;
