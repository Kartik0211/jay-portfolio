import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '../common/Button';
import data from '../../utils/data.json';

// Basic CountUp implementation
function AnimatedNumber({ value }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    // Extract number and suffix (like '+')
    const numMatch = value.match(/\d+/);
    const suffix = value.replace(/\d+/, '');
    const target = numMatch ? parseInt(numMatch[0], 10) : 0;

    useEffect(() => {
        if (isInView && target > 0) {
            let start = 0;
            const duration = 1500; // ms
            const increment = target / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        } else if (isInView) {
            setCount(target); // Fallback if not a number
        }
    }, [isInView, target]);

    return (
        <span ref={ref} className="text-5xl md:text-7xl font-display font-medium text-accent">
            {target > 0 ? count : value}{suffix}
        </span>
    );
}

export default function StatsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 bg-background overflow-hidden relative" id="about">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Image */}
                    <motion.div
                        className="w-full lg:w-1/2 aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-tr-[100px] overflow-hidden relative shadow-2xl"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] hover:scale-110"
                            style={{ backgroundImage: "url('/assets/images/stats/stats-visual.jpg')", backgroundColor: "#e2e2e2" }}
                        />
                    </motion.div>

                    {/* Right: Stats List */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="space-y-12 mb-16">
                            {data.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="border-b border-text-primary/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 group"
                                    variants={itemVariants}
                                >
                                    <AnimatedNumber value={stat.value} />
                                    <span className="text-sm tracking-widest uppercase font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={itemVariants}>
                            <p className="text-text-secondary max-w-md mb-8 leading-relaxed">
                                Jay Wadekar Design has cultivated a legacy of interior excellence. We merge raw industrial elements with refined luxury, shaping timeless spaces across the globe.
                            </p>
                            <Button href="#projects" variant="primary">Read More</Button>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
