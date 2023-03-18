import React from 'react';
import Naviguation from '../components/Naviguation';
import Footer from '../components/Footer';
import '../style/pages/EventPro.scss';

import img1 from '../medias/Celest-Kitchen.jpg';
import img2 from '../medias/Celest-Office.jpg';
import img3 from '../medias/Celest-salon.jpg';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const EventPro = () => {

    return (
        <div className='eventPro'>
            <Naviguation />

            <div className="insta">
                <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer' id='insta'><FaInstagram /></a>
            </div>

            <h1 className='title'>Évènements Professionnels</h1>

            <p className='paragraphe'>L'idylle vous accompagne aussi dans vos évènements professionnels!</p>

            <div className="container">

                <div className='imgLeft'>
                    <img src={img1} alt="" />
                    <p>
                        <h1>Séminaire</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                </div>

                {/* Partie mobile */}
                <div className='imgLeft'>
                    <img src={img2} alt="" />
                    <p>
                        <h1>Décoration saisonière</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>

                </div>
                {/* ----------------------- */}

                <div className='imgRight'>
                    <p>
                        <h1>Décoration saisonière</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                    <img src={img2} alt="" />
                </div>



                <div className='imgLeft'>
                    <img src={img3} alt="" />
                    <p>
                        <h1>évènements corporate</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                </div>
            </div>

            <div className="you">
                <h1>Réservez dès maitenant votre prestation !</h1>
                <button><NavLink to='/reservation'>Contactez-nous</NavLink></button>
            </div>

            <Footer />
        </div>
    );
};

export default EventPro;