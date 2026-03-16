import React from 'react';
import { Search } from 'lucide-react';
import data from '../../utils/data.json';

export default function DiagonalStrip() {
    const socials = data.socials.map(s => s.name).join(" • ");
    const strip1Text = Array(10).fill(socials + " • ").join("");
    const strip2Text = Array(10).fill("SEARCH • JAY WADEKAR 2026 • ").join("");

    return (
        <section className="py-32 overflow-hidden relative bg-background border-t border-text-primary/10 w-full h-96 flex items-center justify-center">

            {/* Container to hold the rotation so it doesn't break document flow wildly */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">

                {/* Rotated wrapper */}
                <div className="w-[150%] h-[400px] flex flex-col justify-center gap-4 -rotate-6 transform -translate-x-12">

                    {/* Band 1 - Dark background, moves right */}
                    <div className="w-full h-16 bg-text-primary text-background flex items-center overflow-hidden">
                        <div className="inline-flex w-full whitespace-nowrap" style={{ animation: 'marqueeRight 25s linear infinite' }}>
                            <span className="font-sans text-sm tracking-[0.3em] font-medium mx-4 uppercase">
                                {strip1Text}
                            </span>
                            <span className="font-sans text-sm tracking-[0.3em] font-medium mx-4 uppercase">
                                {strip1Text}
                            </span>
                        </div>
                    </div>

                    {/* Band 2 - Light background, icons, moves left */}
                    <div className="w-full h-20 bg-background border-y border-text-primary/20 flex items-center overflow-hidden">
                        <div className="inline-flex w-full whitespace-nowrap items-center" style={{ animation: 'marqueeLeft 20s linear infinite' }}>

                            {/* Generate items for band 2 */}
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="flex items-center mx-12">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent flex items-center justify-center mr-8 animate-[pulse-ring_3s_ease-out_infinite]">
                                        <Search className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="font-sans text-lg tracking-[0.2em] uppercase text-text-primary">
                                        JAY WADEKAR DESIGN
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

        </section>
    );
}
