import React from 'react';

export default function TextStrip({ text, className = "" }) {
    // We duplicate the text multiple times to ensure the marquee fills the screen seamlessly
    const repeatedText = Array(10).fill(text + " ").join("");

    return (
        <div className={`w-full py-4 border-y border-text-primary bg-background overflow-hidden flex items-center ${className}`}>
            <div className="marquee-container w-full">
                <div className="marquee-content shrink-0">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] font-medium mx-4">
                        {repeatedText}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-[0.2em] font-medium mx-4">
                        {repeatedText}
                    </span>
                </div>
            </div>
        </div>
    );
}
