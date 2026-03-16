import React from 'react';
import Loading from '../components/common/Loading';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TextStrip from '../components/common/TextStrip';
import HeroSection from '../components/sections/HeroSection';
import FoundersSection from '../components/sections/FoundersSection';
import StatsSection from '../components/sections/StatsSection';
import ShowroomSection from '../components/sections/ShowroomSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import DiagonalStrip from '../components/sections/DiagonalStrip';
import data from '../utils/data.json';

export default function HomePage() {
    return (
        <>
            <Loading />
            <Header />

            <main className="w-full">
                <HeroSection />

                <TextStrip text={data.site.marqueeText} />

                <StatsSection />
                <ShowroomSection />
                <FoundersSection />
                <PortfolioSection />
                <DiagonalStrip />

            </main>

            <Footer />
        </>
    );
}
