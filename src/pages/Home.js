import React from 'react';
import Footer from '../components/Footer';
import Histoire from '../components/landing_page/Histoire';
import Introduction from '../components/landing_page/Introduction';
import Naviguation from '../components/Naviguation';
import PortfHome from '../components/landing_page/PortHome';
import { FaInstagram } from 'react-icons/fa';

import '../style/pages/Home.scss';


const Home = () => {
    return (
        <div className='home' >
            <Naviguation />
            <div className="insta">
                <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer'><FaInstagram /></a>
            </div>

            <Introduction />
            <Histoire />
            <PortfHome />

            <Footer />
        </div>
    );
};

export default Home;