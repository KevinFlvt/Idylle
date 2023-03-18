import React from 'react';
import Prive from '../../medias/eventPri/Event_Prive.png';
import Picnic from '../../medias/Picnics/Picnic.png';
import Pro from '../../medias/eventPro/Event_Pro.png';
import Wedding from '../../medias/Wedding/Wedding planner.jpg';

import '../../style/components/landing_page/Introduction.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Introduction = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className='introduction'>

            <section className='section1'>
                <div className='section1__title' data-aos="zoom-in">
                    <h1>L'idylle Event</h1>
                    <h4>Organisation d'évènements <luxe>Luxury Prest'ylle</luxe> en Guadeloupe et dans la Caraïbe !<span>&#129498;&#127995;</span></h4>
                </div>
            </section>

            <section className='section2'>
                <div className="section2__row">
                    <div className="card">
                        <img src={Picnic} alt="Pique-nique" />
                        <Link to='/pique-nique'> -Pique-Nique- </Link>
                        <div className="info">
                            <h1>Pique-Nique</h1>
                            <p>Une envie d'évasion coocooning ? Notre formule est donc faite pour vous. Pourquoi pas partager ce moment avec vos proches.</p>
                            <Link to='/pique-nique'>Voir plus</Link>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Prive} alt="Prive" />
                        <br />
                        <Link to='/evenements-prives'>-Privé-</Link>
                        <div className="info">
                            <h1>Évènement Privé</h1>
                            <p>Que vous souhaitiez une décoration romantique pour faire votre demande en mariage ou une ambiance festive pour votre anniversaire, nous créons votre décoration sur mesure. </p>
                            <Link to='/evenements-prives'>Voir plus</Link>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Pro} alt="Professionel" />
                        <Link to='/evenements-professionels'>-Pro-</Link>
                        <div className="info">
                            <h1>Évènements Pro</h1>
                            <p>Vous souhaitez mettre en valeur votre entreprise lors de votre prochain évènement ? Faites confiance à l'idylle et laissez-nous vous aider à créer l'ambiance idéale !</p>
                            <Link to='/evenements-professionnels'>Voir plus</Link>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Wedding} alt="Wedding Planiing" />
                        <br />
                        <Link to='/wedding-planner'>-Wedding-</Link>
                        <div className="info">
                            <h1>Wedding Planner</h1>
                            <p>De la recherche à la coordination de tous les prestataires, nous serons le chef d’orchestre de votre mariage !</p>
                            <Link to='/wedding-planner'>Voir plus</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Introduction;