import React from 'react';
import Footer from '../components/Footer';
import Naviguation from '../components/Naviguation';
import '../style/pages/Offres.scss';

import { FaInstagram } from 'react-icons/fa';
import box from '../medias/box.png';


const Offres = () => {
    return (
        <div className='offre'>
            <Naviguation />

            <div className="insta">
                <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer' id='insta'><FaInstagram /></a>
            </div>


            <h1 className='title'>Nos Offres d'exceptions</h1>

            <div className="gallery">
                <div className="gallery__item">
                    <img src={box} alt="" />
                    <span>Love Box TakeAway</span>
                </div>
                <div className="gallery__item"><h4>à venir...</h4></div>
                <div className="gallery__item"><h4>à venir...</h4></div>
            </div>

            <Footer />
        </div>
    );
};

export default Offres;