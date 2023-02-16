import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import SocialProof from './SocialProof';
import PopularServices from './PopularServices';

/* Pagina Principal */
const Home = () => (
    <div>
        <Navbar />
        <Header />
        <SocialProof/>
        <PopularServices/>
        <Footer/>
        
    </div>
);


export default Home