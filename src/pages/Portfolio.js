import React from 'react';
import Naviguation from '../components/Naviguation';
import HomeGallery from '../components/portfolio_page/HomeGallery';
import Footer from '../components/Footer';

import '../style/pages/Portfolio.scss';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Naviguation />
                <h1>PORTFOLIO</h1>
                
                 <HomeGallery />
            <Footer />
            
        </div>
    );
};

export default Portfolio;