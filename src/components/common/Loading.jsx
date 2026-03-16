import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loading() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loading"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-text-primary text-white"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-16 h-16 border-t-2 border-r-2 border-accent rounded-full animate-spin mb-8"></div>
                        <h1 className="font-display text-4xl tracking-widest uppercase">
                            JW
                        </h1>
                        <p className="mt-4 text-xs tracking-[0.3em] text-gray-400">DESIGN</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
