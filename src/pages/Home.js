import React from 'react';
import About from '../components/Home/About/About';
import Banner from '../components/Home/Banner/Banner';
import Footer from '../components/Home/Footer/Footer';
import Header from '../components/Home/Header/Header';
import Services from '../components/Home/Services/Services';


const Home = () => {
    return (
        <>
        <Header/>
        <Banner/>
        <About/>
        <Services/>
        <Footer/>
    
        </>
    );
};

export default Home;