import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../common/Button';
import data from '../../utils/data.json';

export default function HeroSection() {
    const { scrollY } = useScroll();
    const yImage = useTransform(scrollY, [0, 1000], [0, 200]);

    // Split headline for staggered animation
    const headlineWords = data.site.headline.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            }
        }
    };

    const wordVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-end pt-32 pb-16 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full z-10 relative mt-16">

                {/* Animated Headline */}
                <motion.div
                    className="max-w-5xl mx-auto text-center mb-12 relative z-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-display font-medium leading-[0.9] tracking-tighter uppercase mx-auto flex flex-wrap justify-center overflow-hidden">
                        {headlineWords.map((word, index) => (
                            <motion.span
                                key={index}
                                className="inline-block mr-[2vw]"
                                variants={wordVariants}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                </motion.div>

                {/* Hero Image with Parallax */}
                <div className="w-full max-w-6xl aspect-[16/9] md:aspect-[21/9] relative overflow-hidden rounded-sm mx-auto z-10">
                    <motion.div
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        style={{ y: yImage }}
                        className="w-full h-[120%] -top-[10%] absolute left-0 bg-cover bg-center bg-gray-200"
                    >
                        {/* We're using a placeholder color for the background because actual valid images aren't present yet, but this div acts as the container */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
                            style={{ backgroundImage: "url('/assets/images/hero/hero-visual.jpg')", backgroundColor: "#e2e2e2" }}
                        />
                    </motion.div>
                </div>

                {/* Pulse Button */}
                <motion.div
                    className="absolute bottom-[5%] right-[5%] z-30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
                        <div className="absolute inset-0 rounded-full border border-text-primary animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                        <a
                            href="#founders"
                            className="bg-white rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center text-xs uppercase tracking-widest border border-text-primary/20 hover:bg-text-primary hover:text-white transition-colors duration-500 z-10"
                        >
                            Best View
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
