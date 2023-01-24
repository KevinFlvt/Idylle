import React from 'react';
import Naviguation from '../components/Naviguation';
import HomeGallery from '../components/portfolio_page/HomeGallery';
import Footer from '../components/Footer';
import { FaInstagram } from 'react-icons/fa';

import '../style/pages/Portfolio.scss';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Naviguation />

            <div className="insta">
            <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer'><FaInstagram /></a>
            </div>

                <h1>PORTFOLIO</h1>
                
                 <HomeGallery />
            <Footer />
            
        </div>
    );
};

export default Portfolio;