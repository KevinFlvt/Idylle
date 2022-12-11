import React, { useState, useEffect } from 'react';
import Footer from '../../Footer';
import Naviguation from '../../Naviguation';

import w1 from '../../../medias/folio_wedding/wedding1.jpg';
import w2 from '../../../medias/folio_wedding/wedding2.jpg';
import w3 from '../../../medias/folio_wedding/wedding3.jpg';
import w4 from '../../../medias/folio_wedding/wedding4.jpg';
import w5 from '../../../medias/folio_wedding/wedding5.jpg';
import w6 from '../../../medias/folio_wedding/wedding6.jpg';

import {AiOutlineClose} from 'react-icons/ai';
import Aos from 'aos';
import "aos/dist/aos.css";

import '../../../style/components/portfolio_page/folio_wedding/WeddingP.scss';
import { Link } from 'react-router-dom';

const WeddingP = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [] )

    let data = [ 
        {
            id: 1,
            imgSrc: w1,
            effect: "fade-down-right",
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
            effect: "fade-down-left",
            delay: 300,
        },
        {
            id: 4,
            imgSrc: w4,
            effect: "fade-up-right",
            delay: 200,
        },
        {
            id: 5,
            imgSrc: w5,
            effect: "fade-up",
        },
        {
            id: 6,
            imgSrc: w6,
            effect: "fade-up-left",
            delay: 500,
        }
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg  = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div className='weddingP'>
            <Naviguation />
                <h1>MARIAGE</h1>

                <div className={model ? "model open" : "model"}>
                    <img src={tempImgSrc} alt="" />
                    <AiOutlineClose onClick={() => setModel(false)}/>
                </div>

                <div className="container">
                    <div className="container__row">
                        {data.map((item, index) =>{
                            return(
                                <div className="container__content" key={index} onClick={() => getImg(item.imgSrc)}>
                                    <img src={item.imgSrc} alt="" data-aos={item.effect} data-aos-delay={item.delay} />
                                </div>
                            )
                        })}
                    </div>

                    <Link to='/reservation'> <button className="callToAction">Pourquoi pas vous ?</button> </Link>

                </div>
            <Footer />
        </div>
    );
};

export default WeddingP;