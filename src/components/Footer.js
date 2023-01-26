import React from 'react';
import { Link } from 'react-router-dom';
/* import logo from '../medias/Logo beige.png'

import { FaFacebookSquare, FaInstagram } from "react-icons/fa"; */
import '../style/components/Footer.scss';

const Footer = () => {

    return (
        <div className='footer'>

            <div className="container">
                <Link to="/pique-nique"> PicNic </Link>
                <Link to="/evenements-prives"> Privés</Link>
                <Link to="/evenements-professionels"> Professionnel</Link>
                <Link to="/portfolio"> Portfolio</Link>
                <Link to="/blog">blog </Link>
                <Link to="/reservation"> Réserver</Link>
            </div>

            <hr/>
            <div className="col-sm">
                <p>
                    &copy;{new Date().getFullYear()} Idylle Event - Tous droits réservés |<Link to='/'>Mentions légales</Link>|<Link to='/'>Conditions générales de ventes</Link>
                </p>
            </div>



       {/*      
            <section className="container">
                <div className="row">
                   
                    <div className="col">
                        <img src={logo} alt="Logo du site" />
                    </div>

                    
                    <div className="col">
                        <h3>Contactez-nous</h3>
                        <ul className="unstyle">
                            <li>E-mail: idylle.events@gmail.com</li>     
                            <li>Téléphone: 0690 74 69 31</li>
                            <li><Link to='reservation'>Formulaire de réservation</Link></li>
                        </ul>
                    </div>

                    
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
            </div> */}
        </div>

    );
};

export default Footer;