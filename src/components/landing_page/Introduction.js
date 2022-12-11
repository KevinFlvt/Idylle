import React from 'react';
import Prive from '../../medias/Event_Privee.jpg';
import Picnic from '../../medias/Picnic.jpg';
import Pro from '../../medias/Event_Pro.jpg';
import Wedding from '../../medias/Wedding_Planner_Home.jpg';
import '../../style/components/landing_page/Introduction.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";



const Introduction = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [] )

    return (
        <div className='introduction'>

            <section className='section1'>
                <div className='section1__title' data-aos="zoom-in">
                    <h1>L'idylle Event</h1>
                    <h4>Notre souhait ? Vous transportez à travers nos prest’ylles !</h4>
                </div>
            </section>

            <section className='section2'>
                <div className="section2__row">
                    <div className="card">
                        <img src={Picnic} alt="Pique-nique" />
                        <br /> 
                        <Link to='/prestylles'>Pique-Nique</Link>
                        <div className="info">
                            <h1>Pique-Nique</h1>
                            <p>Une envie d'évasion coocooning ? Notre formule est donc faite pour vous. Pourquoi pas partager ce moment avec vos proches.</p>
                            <Link to='/prestylles'>Voir plus</Link>
                        </div>                        
                    </div>
                    

                    <div className="card">
                        <img src={Pro} alt="Professionel" />
                        <br /> 
                        <Link to='/'>Pro</Link>
                        <div className="info">
                            <h1>Évènements Pro</h1>
                            <p>Menndé est la formule pour nos amoureux. Elle vous permet de créer sur mesure une atmosphère idyliique et romantque pour l'être chère</p>
                            <Link to='/prestylles'>Voir plus</Link>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Prive} alt="Prive" />
                        <br /> 
                        <Link to='/'>Privé</Link>
                        <div className="info">
                            <h1>Évènement Privé</h1>
                            <p>La vie mérite d'être célébrée, alors pourquoi attendre une occasion spéciale ?</p>
                            <Link to='/prestylles'>Voir plus</Link>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Wedding} alt="Wedding Planiing" />
                        <br /> 
                        <Link to='/wedding-planner'>Wedding</Link>
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