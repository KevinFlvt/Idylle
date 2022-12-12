import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../medias/Logo beige.png'

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from 'aos';

import '../style/components/Footer.scss';

const Footer = () => {

    useEffect(() => {
        Aos.init({duration:1200});
    }, [] )

    return (
        <div className='footer'>
            
            <section className="container">
                <div className="row">
                    {/* 1 */}
                    <div className="col">
                        <img src={logo} alt="Logo du site" />
                    </div>

                    {/* 2*/}
                    <div className="col">
                        <h3>Contactez-nous</h3>
                        <ul className="unstyle">
                            <li>E-mail: idylle.events@gmail.com</li>     
                            <li>Téléphone: 0690 74 69 31</li>
                            <li><Link to='reservation'>Formulaire de réservation</Link></li>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div className="col">
                        <h3>Suivez-nous</h3>
                        <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer' id='insta'> <FaInstagram /></a>
                        <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer' id='facebook'> <FaFacebookSquare /></a>
                    </div>
                </div>
            </section>

            <hr/>
            <div className="col-sm">
                <p>
                    &copy;{new Date().getFullYear()} Idylle Event - Tous droits réservés |<Link to='/'>Mentions légales</Link>|<Link to='/'>Conditions générales de ventes</Link>
                </p>
            </div>
        </div>

    );
};

export default Footer;