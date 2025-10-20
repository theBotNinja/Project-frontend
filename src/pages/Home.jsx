import React from 'react'
import About from './About';
import Hero from '../pages/Hero';
import Parallelx from '../Components/Parallelx';
import Features from './Features';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Visulizer from "../pages/Visualize1";

const HomeMain = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Visulizer></Visulizer>
            <Features />
            <Parallelx />
            <About />
            <Footer />
        </>
    )
}

export default HomeMain
