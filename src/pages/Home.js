import React from 'react';
import Footer from '../components/Footer';
import Histoire from '../components/landing_page/Histoire';
import Introduction from '../components/landing_page/Introduction';
import NewBlog from '../components/landing_page/NewBlog';
import PortfolioHome from '../components/landing_page/PortfolioHome';
import Naviguation from '../components/Naviguation';

import '../style/pages/Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Naviguation />

            <Introduction />
            <Histoire />
            <PortfolioHome />
            <NewBlog />
            
            <Footer />
        </div>
    );
};

export default Home;