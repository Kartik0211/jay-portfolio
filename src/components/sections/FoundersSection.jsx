import React from 'react';
import { motion } from 'framer-motion';
import data from '../../utils/data.json';

export default function FoundersSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 bg-white" id="founders">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    className="flex flex-col md:flex-row justify-center items-center md:items-start gap-16 md:gap-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {data.founders.map((founder, index) => (
                        <motion.div
                            key={founder.name}
                            className="group flex flex-col items-center text-center max-w-sm"
                            variants={itemVariants}
                        >
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-t-full overflow-hidden mb-8 border border-gray-100 bg-gray-100 relative">
                                <motion.div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${founder.image})` }}
                                />
                            </div>

                            <h3 className="text-2xl font-display mb-2">{founder.name}</h3>
                            <p className="text-gray-500 uppercase tracking-widest text-xs mb-4">
                                {founder.role}
                            </p>
                            <p className="text-sm font-medium border-t border-text-primary/10 pt-4 px-8">
                                {founder.specialty}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
