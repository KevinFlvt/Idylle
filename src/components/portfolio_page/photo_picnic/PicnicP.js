import React, { useState } from 'react';
import Footer from '../../Footer';
import Naviguation from '../../Naviguation';
import { AiOutlineClose } from 'react-icons/ai';

import './PicnicP.scss';

/* Retrouvaille */
import R1 from '../../../medias/Picnics/Partage/Retr1.JPG';
import R2 from '../../../medias/Picnics/Partage/Retr2.JPG';
import R3 from '../../../medias/Picnics/Partage/Retr3.JPG';
import R4 from '../../../medias/Picnics/Partage/Retr4.JPG';
import R5 from '../../../medias/Picnics/Partage/Retr5.JPG';

const PicnicP = () => {
    let data = [
        {
            id: 1,
            imgSrc: R1,
            alt: 'Table décorer',
        },
        {
            id: 2,
            imgSrc: R2,
        },
        {
            id: 3,
            imgSrc: R3,
        },
        {
            id: 4,
            imgSrc: R4,
        },
        {
            id: 5,
            imgSrc: R5,
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
        <div className='picnicP'>
            <Naviguation />

            <h1>Pique-Nique</h1>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="" />
                <AiOutlineClose onClick={() => setModel(false)} />
            </div>

            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={item.alt} style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    );
};

export default PicnicP;