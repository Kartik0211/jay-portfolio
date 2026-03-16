import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Studio', href: '#studio' },
        { name: 'Journal', href: '#journal' },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#" className="flex-shrink-0 z-50">
                    <h1 className="font-display font-medium text-xl md:text-2xl tracking-tighter uppercase m-0 leading-none">
                        Jay Wadekar<br /><span className="text-sm tracking-widest text-text-secondary">Design</span>
                    </h1>
                </a>

                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="font-sans text-sm uppercase tracking-widest text-text-secondary hover:text-accent transition-colors relative group"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                </nav>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Button variant="primary" href="#contact" className="hidden md:inline-flex">
                        Contact Us
                    </Button>
                </motion.div>
            </div>
        </motion.header>
    );
}
