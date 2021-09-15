import React from 'react';
import About from '../components/Home/About/About';
import Banner from '../components/Home/Banner/Banner';
import ContactUs from '../components/Home/Contactform/Contactform';
import Footer from '../components/Home/Footer/Footer';
import Reviews from '../components/Home/Reviews/Reviews';
import Services from '../components/Home/Services/Services';
import Header from '../components/Home/Header/Header';

const Home = () => {
    return (
        <>
        <Header/>
        <Banner/>
        <About/>
        <Services/>
        <Reviews></Reviews>
        <ContactUs/>
        <Footer/>
    
        </>
    );
};

export default Home;