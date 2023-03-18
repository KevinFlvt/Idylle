import React from 'react';
import K from '../../medias/Picnics/Picnic.png';
import M from '../../medias/eventPro/Event_Pro.png';
import T from '../../medias/eventPri/Event_Prive.png';
import W from '../../medias/Wedding/Wedding planner.jpg';

import '../../style/components/portfolio_page/HomeGallery.scss';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import "aos/dist/aos.css";

const HomeGallery = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className='homeGallery'>
            <div className="homeGallery__row">

                <div className="content" data-aos="fade-right">
                    <Link to="/portfolio/pique-nique">
                        <img src={K} alt="" />
                        <h4>pique-nique</h4>

                        <div className="caption">
                            <h4>Pour des moments conviviaux !</h4>
                        </div>
                    </Link>
                </div>

                <div className="content" data-aos="fade-left">
                    <Link to="/portfolio/evenements-prives">
                        <img src={T} alt="" />
                        <h4>évènements privés</h4>

                        <div className="caption">
                            <h4>Des anniversaires inoubliables !</h4>
                        </div>
                    </Link>
                </div>

                <div className="content" data-aos="fade-right">
                    <Link to="/portfolio/evenements-professionnels">
                        <img src={M} alt="" />
                        <h4>évènements professionnels</h4>

                        <div className="caption">
                            <h4>Ma boutique ma déco</h4>
                        </div>
                    </Link>
                </div>

                <div className="content" data-aos="fade-left">
                    <Link to="/portfolio/mariage">
                        <img src={W} alt="" />
                        <h4>Wedding Planning</h4>

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