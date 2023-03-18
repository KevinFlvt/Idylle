import React, { useState } from 'react';
import Footer from '../../Footer';
import Naviguation from '../../Naviguation';

import w1 from '../../../medias/Wedding/wedding1.jpg';
import w2 from '../../../medias/Wedding/wedding2.jpg';
import w3 from '../../../medias/Wedding/wedding3.jpg';
import w4 from '../../../medias/Wedding/wedding4.jpg';
import w5 from '../../../medias/Wedding/wedding5.jpg';
import w6 from '../../../medias/Wedding/wedding6.jpg';

import { AiOutlineClose } from 'react-icons/ai';

import '../../../style/components/portfolio_page/folio_wedding/WeddingP.scss';
/* import { Link } from 'react-router-dom'; */

const WeddingP = () => {

    let data = [
        {
            id: 1,
            imgSrc: w1,
        },
        {
            id: 2,
            imgSrc: w2,
        },
        {
            id: 3,
            imgSrc: w3,
        },
        {
            id: 4,
            imgSrc: w4,
        },
        {
            id: 5,
            imgSrc: w5,
        },
        {
            id: 6,
            imgSrc: w6,
        }
    ]

    /* Permet d'afficher l'image quand on click */
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempimgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempimgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div className='weddingP'>
            <Naviguation />
            <h1>MARIAGE</h1>

            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="" />
                <AiOutlineClose onClick={() => setModel(false)} />
            </div>

            <div className="container">
                <div className="gallery">
                    {data.map((item, index) => {
                        return (
                            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt={item.alt} style={{ width: '100%' }} />
                            </div>
                        )
                    })}
                </div>

                {/*                 <Link to='/reservation'> <button className="callToAction">Pourquoi pas vous ?</button> </Link> */}

            </div>

            <Footer />
        </div>
    );
};

export default WeddingP;