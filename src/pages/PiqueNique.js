import React from 'react';
import Footer from '../components/Footer';
import Naviguation from '../components/Naviguation';

import '../style/pages/PiqueNique.scss';

import img1 from '../medias/eventPri/Anniversaire/anniv1.jpeg';
import img2 from '../medias/Mennde.jpeg';
import img3 from '../medias/Toumblak.jpeg';
import img4 from '../medias/AYW.jpeg';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const PiqueNique = () => {

    return (
        <div className='piqueNique'>
            <Naviguation />

            <div className="insta">
                <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer' id='insta'><FaInstagram /></a>
            </div>


            <h1 className='title'>Pique-Nique</h1>

            <p className='paragraphe'>L'idylle vous accompagne dans vos pique-nique à travers différentes prestations appelées Prestylle !</p>

            <div className="container">

                <div className='imgLeft'>
                    <img src={img1} alt="" />
                    <p className='textRight'>
                        <h1>Kaladja</h1>
                        <div>Kaladja est la prest'ylle qui s'adapte à vos occasions, telles que des anniversaires, des EVJF, etc. Il saura convenir à un évènement spécial de votre vie.</div><br />
                        <div>Nos prest'ylles KALADJA comprennent :
                            <p>• Votre espace pique-nique cocooning décoré sur mesure.</p>
                            <p>• Un panier gourmand de votre choix.</p>
                            <p>• Boissons softs & alcolisées.</p>
                            <p>• Création d'un univers en fonction de la thématique choisi.</p>
                        </div>
                    </p>
                </div>

                {/* Partie mobile */}
                <div className='imgLeft'>
                    <img src={img2} alt="" />
                    <p className='textRight'>
                        <h1>Menndé</h1>
                        <div>Menndé est la formule pour nos amoureux. Elle vous permet de créer sur mesure une atmosphère idyllique et romantique pour l'être cher</div><br />
                        <div>Nos prest'ylles MENDÉ comprennent :
                            <p>• Votre espace pique-nique cocooning décoré sur mesure.</p>
                            <p>• Un panier gourmand de votre choix.</p>
                            <p>• Boissons softs & alcolisées.</p>
                            <p>• Création d'un univers en fonction de la thématique choisi.</p>
                        </div>
                    </p>
                </div>
                {/* ------------------------ */}

                <div className='imgRight'>
                    <p className='textLeft'>
                        <h1>Menndé</h1>
                        <div>Menndé est la formule pour nos amoureux. Elle vous permet de créer sur mesure une atmosphère idyllique et romantique pour l'être cher</div><br />
                        <div>Nos prest'ylles MENDÉ comprennent :
                            <p>• Votre espace pique-nique cocooning décoré sur mesure.</p>
                            <p>• Un panier gourmand de votre choix.</p>
                            <p>• Boissons softs & alcolisées.</p>
                            <p>• Création d'un univers en fonction de la thématique choisi.</p>
                        </div>
                    </p>
                    <img src={img2} alt="" />
                </div>


                <div className='imgLeft'>
                    <img src={img3} alt="" />
                    <p className='textRight'>
                        <h1>Toumblak</h1>
                        <div>La vie mérite d'être célébrée, alors pourquoi attendre une occasion spéciale ? Notre prest'ylle Toumblak est votre moment d'évasion pour profiter entre amis ou en famille.</div><br />
                        <div className='center'>Nos prest'ylles TOUMBLAK comprennent :
                            <p>• Votre espace pique-nique cocooning décoré sur mesure.</p>
                            <p>• Un panier gourmand de votre choix.</p>
                            <p>• Boissons softs & alcolisées.</p>
                        </div>
                    </p>
                </div>

                {/* Partie mobile */}
                <div className='imgLeft'>
                    <img src={img4} alt="" />
                    <p className='textRight'>
                        <h1>As You Want</h1>
                        <div>Nous vous proposons différentes options pour compléter nos prest'ylles. En fonction de vos divers envies, vous avez la possibilité de compléter votre prest'ylle avec différentes options</div><br />
                        <div>Nos prest'ylles MENDÉ comprennent :
                            <p>• Massage</p>
                            <p>• Feux d'artifice</p>
                            <p>• Arche de ballon</p>
                            <p>• Location de villa / gîte</p>
                            <p>• Jeux gonflables</p>
                        </div>
                    </p>
                </div>
                {/* ------------------------ */}

                <div className='imgRight'>
                    <p className='textLeft'>
                        <h1>As You Want</h1>
                        <div>Nous vous proposons différentes options pour compléter nos prest'ylles. En fonction de vos divers envies, vous avez la possibilité de compléter votre prest'ylle avec différentes options</div><br />
                        <div>Nos prest'ylles MENDÉ comprennent :
                            <p>• Massage</p>
                            <p>• Feux d'artifice</p>
                            <p>• Arche de ballon</p>
                            <p>• Location de villa / gîte</p>
                            <p>• Jeux gonflables</p>
                        </div>
                    </p>
                    <img src={img4} alt="" />
                </div>
            </div>



            <div className="you">
                <h1>Laissez-vous tentez par nos Prest'ylles !</h1>
                <button> <NavLink to='/reservation'> Contactez-nous </NavLink></button>
            </div>

            <Footer />
        </div>
    );
};

export default PiqueNique;