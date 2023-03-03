import React from 'react';
import Naviguation from '../components/Naviguation';
import Footer from '../components/Footer';

import img1 from '../medias/eventPri/anniversaire.png';
import img2 from '../medias/eventPri/demande_mariage.png';
import img3 from '../medias/eventPri/evjf.png';
import img4 from '../medias/eventPri/fete_naissance.png';

import '../style/pages/EventPrive.scss';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const EventPrive = () => {

    return (

        <div className='eventPrive'>
            <Naviguation />

            <div className="insta">
            <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer' id='insta'><FaInstagram /></a>
            </div>


            <h1 className='title'>Évènements Privés</h1>

            <p className='paragraphe'>L'idylle vous accompagne aussi dans vos évènements privés! Anniversaire, première communion, annonce de fiancaille n'attendez plus !
            </p>

            <div className="container">

                <div className='imgLeft'>
                    <img src={img1} alt=""/>
                    <p>
                        <h1>Anniversaire</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                </div>


                {/* Partie mobile  */}
                <div className='imgLeft'>
                    <img src={img2} alt="" />
                    <p>
                        <h1>Fiancailles</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>                    
                </div>
                {/* --------------------- */}

                <div className='imgRight'>
                    <p>
                        <h1>Fiancailles</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                    <img src={img2} alt="" />
                </div>
            
                <div className='imgLeft'>
                    <img src={img3} alt="" />
                    <p>
                        <h1>EVJF</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                </div>

                {/* Partie mobile  */}
                <div className='imgLeft'>
                    <img src={img4} alt="" />
                    <p>
                        <h1>Naissance</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                    
                </div>
                {/* ----------------------- */}

                <div className='imgRight'>
                    <p>
                        <h1>Naissance</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                    <img src={img4} alt="" />
                </div>
            </div>

            <div className="you">
                <h1>Laissez-vous tentez par nos Prest'ylles !</h1>
                <button><NavLink to='/reservation'>Contactez-nous</NavLink></button>
            </div>



            <Footer />
        </div>
    );
};

export default EventPrive;