import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import data from '../../utils/data.json';

export default function ShowroomSection() {
    return (
        <section className="py-24 bg-text-primary text-white overflow-hidden" id="studio">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Text Block */}
                    <motion.div
                        className="w-full lg:w-5/12"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="w-16 h-px bg-accent mb-8"></div>
                        <h2 className="text-4xl md:text-5xl font-display mb-6 leading-tight">
                            {data.showroom.title}
                        </h2>
                        <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
                            {data.showroom.description}
                        </p>
                        <Button variant="secondary" className="border-accent text-accent hover:bg-accent hover:text-white">
                            {data.showroom.buttonText}
                        </Button>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        className="w-full lg:w-7/12 aspect-[4/3] relative rounded-sm overflow-hidden"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                            style={{ backgroundImage: "url('/assets/images/showroom/showroom-visual.jpg')", backgroundColor: "#2e303a" }}
                        />
                        {/* Elegant overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 to-transparent opacity-80 mix-blend-multiply"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
