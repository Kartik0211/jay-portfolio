import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Button({ children, onClick, className = '', variant = 'primary', href }) {
    const baseStyle = "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-sans text-sm tracking-widest uppercase transition-all duration-500 ease-out";

    const variants = {
        primary: "bg-text-primary text-white hover:bg-accent px-8 py-4",
        secondary: "bg-transparent text-text-primary border border-text-primary hover:bg-text-primary hover:text-white px-8 py-4",
        text: "bg-transparent text-text-primary hover:text-accent p-0",
    };

    const content = (
        <>
            <span className="relative z-10 font-medium tracking-widest">{children}</span>
            {variant !== 'text' && (
                <ArrowRight className="relative z-10 ml-3 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-1" />
            )}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={`${baseStyle} ${variants[variant]} ${className}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {content}
        </motion.button>
    );
}
