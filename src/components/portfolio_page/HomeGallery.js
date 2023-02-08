import React from 'react';
import K from '../../medias/Picnic_Dejeuner.jpeg';
import M from '../../medias/Event_Pro.jpg';
import T from '../../medias/eventPri/anniversaire.png';
import W from '../../medias/Wedding planner.jpg';

import '../../style/components/portfolio_page/HomeGallery.scss';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import "aos/dist/aos.css";

const HomeGallery = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [] )

    return (
        <div className='homeGallery'>
            <div className="homeGallery__row">

                <div className="content" data-aos="fade-right">
                    <img src={K} alt="" />
                    <h4>pique-nique</h4>

                    <div className="caption">
                        <h4>Pour des moments conviviaux !</h4>
                    </div>
                </div>

                <div className="content" data-aos="fade-left">
                    <img src={T} alt="" />
                    <h4>évènements privés</h4>

                    <div className="caption">
                        <h4>Des anniversaires inoubliables !</h4>
                    </div>
                </div>

                <div className="content" data-aos="fade-right">
                    <img src={M} alt="" />
                    <h4>évènements professionnels</h4>

                    <div className="caption">
                        <h4>Boutique la fèmé</h4>
                    </div>
                </div>

                <div className="content" data-aos="fade-left"> 
                    <Link to="/portfolio/mariage"><img src={W} alt="" /> 
                        <h4>Wedding</h4>

                        <div className="caption">
                            <h4>Votre mariage gravé à jamais</h4>
                        </div>
                    </Link>
                </div> 

            </div>

        </div>
    );
};

export default HomeGallery;