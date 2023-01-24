import React from 'react';
import Footer from '../components/Footer';
import Naviguation from '../components/Naviguation';

import '../style/pages/PiqueNique.scss';

import img1 from '../medias/Kaladja.jpg';
import img2 from '../medias/Mennde.jpg';
import img3 from '../medias/Toumblak.jpg';

const PiqueNique = () => {
 
    return (
        <div className='piqueNique'>
            <Naviguation />
            <h1 className='title'>Pique-Nique</h1>

            <p className='paragraphe'>L'idylle vous accompagne dans vos pique nique! Différentes prestations appelé Prestylle! 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse ad, consectetur porro asperiores beatae natus nulla quos? Non, quam!</p>

            <div className="container">

                <div className='imgLeft'>
                    <img src={img1} alt=""/>
                    <p>
                        <h1>Kaladja</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates.</div>
                    </p>
                </div>

                {/* Partie mobile */}
                <div className='imgLeft'>
                    <img src={img2} alt="" />
                    <p>
                        <h1>Menndé</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                </div>
                {/* ------------------------ */}

                <div className='imgRight'>
                    <p>
                        <h1>Menndé</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                    <img src={img2} alt="" />
                </div>
            
                
                <div className='imgLeft'>
                    <img src={img3} alt="" />
                    <p>
                        <h1>Toumblak</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                </div>
            </div>

            <div className="you">
                <h1>Vous méritez ce moment de détente !</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo veniam sequi, unde</p>
                <button>Contactez-nous</button>
            </div>


            <Footer />
        </div>
    );
};

export default PiqueNique;