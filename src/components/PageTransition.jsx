import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 15,
        scale: 0.99
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1] // Apple-like smooth easing curve
        }
    },
    out: {
        opacity: 0,
        y: -10,
        scale: 0.99,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

const PageTransition = ({ children, className = '' }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
