import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Naviguation from '../components/Naviguation';
import FormW from '../components/wedding_page/FormW';
import WhyUs from '../components/wedding_page/WhyUs';

import w1 from '../medias/Wedding/wedding1.jpg';
import w2 from '../medias/Wedding/wedding2.jpg';
import w3 from '../medias/Wedding/wedding3.jpg';


import {AiOutlineClose} from 'react-icons/ai';
import Aos from 'aos';
import "aos/dist/aos.css";

import '../style/pages/Wedding.scss';
import { FaInstagram } from 'react-icons/fa';


const Wedding = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [] )

    let data1 = [ 
        {
            id: 1,
            imgSrc: w1,
            effect: "fade-right",
            delay: 400,
        },
        {
            id: 2,
            imgSrc: w2,
            effect: "fade-down",
            delay: 100,
            
        },
        {
            id: 3,
            imgSrc: w3,
            effect: "fade-left",
            delay: 300,
        },

    ]


    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg  = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div className='wedding'>
            <Naviguation />

            <div className="insta">
            <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer' id='insta'><FaInstagram /></a>
            </div>

            <div className="title">
                <h1>Wedding Planner</h1>
            </div>

            <p>En 2022, nous décidons d'étendre notre portfolio vers les horizons de l'amour. Amoureux de l'amour, c'est nautrellement que l'idylle se lance en tant que wedding planner.</p>
            <p>En tant que wedding planner, nous vous apportons les meilleurs conseils pour organiser les préparatifs de votre mariage et vous offrir la journée de mariage de vos rêves. Notre savoir-faire professionnel et notre passion de l'univers du mariage sont au service de tous les futurs mariés.</p>
            <p>L'idylle est la référence de l'orgainsation de mariage en Guadeloupe, une équipe professionnelle et des partenaires de talent.</p>
            <p>Nous pensons que rien n'est impossible. Nous croyons au spectaculaire, nous nous efforçons de faire de chaque instant un moment unique, nous vivons et respirons des évènements inspirants. C'est ce que nous faisons, nous aidons les mariés à créer des moments merveilleux et des souvenirs qui resteront à jamais dans l'esprit de leurs invités.</p>

            <div className={model ? "model open" : "model"}>
                    <img src={tempImgSrc} alt="" />
                    <AiOutlineClose onClick={() => setModel(false)}/>
                </div>

                <div className="container">
                    <div className="container__row">
                        {data1.map((item, index) =>{
                            return(
                                <div className="container__content" key={index} onClick={() => getImg(item.imgSrc)}>
                                    <img src={item.imgSrc} alt="" data-aos={item.effect} data-aos-delay={item.delay} />
                                </div>
                            )
                        })}
                    </div>
                </div>  

            <WhyUs />
            <FormW />
            <Footer />
        </div>
    );
};

export default Wedding;