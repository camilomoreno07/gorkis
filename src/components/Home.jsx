import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Options from './Options';
import SocialProof from './SocialProof';


/* Pagina Principal */
const Home = () => (
    <div>
        <Navbar />
        <Header />
        
        <SocialProof/>
        <Footer/>
        
    </div>
);


export default Home