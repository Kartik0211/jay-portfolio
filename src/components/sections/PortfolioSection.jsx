import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import data from '../../utils/data.json';

export default function PortfolioSection() {
    const { featured, projects } = data.portfolio;

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
        <section className="py-32 bg-background relative" id="projects">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-accent text-sm tracking-widest uppercase mb-4">Selected Works</p>
                        <h2 className="text-5xl font-display uppercase tracking-tight">Our Portfolio</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="hidden md:block"
                    >
                        <Button variant="text" className="border-b border-text-primary pb-1 rounded-none hover:border-accent">
                            View All Works
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Featured Project */}
                    <motion.div
                        className="lg:col-span-8 group cursor-pointer relative overflow-hidden rounded-sm aspect-[4/3] lg:aspect-auto lg:h-[800px]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                            style={{ backgroundImage: `url(${featured.image})`, backgroundColor: "#e2e2e2" }}
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p className="text-accent text-sm tracking-widest uppercase mb-2">{featured.location}</p>
                                <h3 className="text-white text-3xl font-display mb-4">{featured.name}</h3>
                                <p className="text-gray-300 max-w-md">{featured.description}</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Project List */}
                    <motion.div
                        className="lg:col-span-4 flex flex-col gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="group cursor-pointer relative overflow-hidden rounded-sm aspect-[4/3] w-full"
                                variants={itemVariants}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                                    style={{ backgroundImage: `url(${project.image})`, backgroundColor: "#e2e2e2" }}
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <p className="text-accent text-xs tracking-widest uppercase mb-1">{project.location}</p>
                                    <h3 className="text-white text-xl font-display">{project.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="secondary" className="w-full">
                        View All Works
                    </Button>
                </div>

            </div>
        </section>
    );
}
