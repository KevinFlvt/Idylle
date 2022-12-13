import React from 'react';
import Naviguation from '../components/Naviguation';
import Footer from '../components/Footer';
import '../style/pages/EventPro.scss';

import img1 from '../medias/Celest-Kitchen.jpg';
import img2 from '../medias/Celest-Office.jpg';
import img3 from '../medias/Celest-salon.jpg';

const EventPro = () => {

    const style = {
        title: {
            margin: 'auto', 
            textAlign: 'center', 
            borderBottom: '3px solid #fff',
            width: '34%',
            marginBottom: '50px',
        },

        paragraphe: {
            width: '80%', 
            margin: 'auto',
            marginBottom: '40px',
            fontSize: '20px',
        }
    };

    return (
        <div className='eventPro'>
            <Naviguation />
            <h1 style={style.title}>Évènements Professionnels</h1>

            <p style={style.paragraphe}>L'idylle vous accompagne aussi dans vos évènements professionnels! Dans la décoration de votre boutique! 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse ad, consectetur porro asperiores beatae natus nulla quos? Non, quam!</p>

            <div className="container">

                <div className='imgLeft'>
                    <img src={img1} alt=""/>
                    <p>
                        <h1>Séminaire</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                </div>

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
                        <h1>Inauguration</h1>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod deserunt dolorem magni omnis dicta voluptate exercitationem, sequi itaque libero labore dignissimos repellat error repudiandae culpa veniam distinctio pariatur? Recusandae!</div><br />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum quaerat nemo qui consequatur id, dolor maiores in reprehenderit, recusandae veritatis voluptates. Laborum quia pariatur ea dolores veniam perspiciatis a.</div>
                    </p>
                </div>
            </div>

            <div className="you">
                <h1>Et si la prochaine boutique était la votre ?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo veniam sequi, unde quibusdam ea aliquid.</p>
                <button>Contactez-nous</button>
            </div>

         <Footer />
        </div>
    );
};

export default EventPro;