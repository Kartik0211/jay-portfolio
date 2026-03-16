import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import data from '../../utils/data.json';

export default function Footer() {
    return (
        <footer className="bg-text-primary text-white pt-24 pb-12 overflow-hidden" id="contact">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h3 className="text-xl font-display mb-6">Let's discuss your next project.</h3>
                        <p className="text-gray-400 mb-8 max-w-sm">
                            We specialize in creating luxurious, industrial-inspired spaces that speak to your soul.
                        </p>
                        <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-text-primary">
                            {data.site.contactEmail}
                        </Button>
                    </div>

                    <div className="flex flex-col md:items-end space-y-4">
                        <div className="flex space-x-6">
                            {data.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="text-gray-400 hover:text-accent transition-colors uppercase text-sm tracking-widest"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    className="text-center w-full relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-[12vw] font-display font-medium leading-none tracking-tighter whitespace-nowrap overflow-hidden text-center opacity-20 hover:opacity-100 transition-opacity duration-700">
                        CONTACT <span className="text-accent">+</span> US
                    </h2>
                </motion.div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-widest uppercase">
                    <p>&copy; {new Date().getFullYear()} {data.site.title}. All Rights Reserved.</p>
                    <div className="space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
