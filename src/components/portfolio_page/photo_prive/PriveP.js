import React, { useState } from 'react';
import Footer from '../../Footer';
import Naviguation from '../../Naviguation';
import { AiOutlineClose } from 'react-icons/ai';

import './PriveP.scss';
/* Anniversaire */
import Anniv1 from '../../../medias/eventPri/Anniversaire/anniversaire.jpeg';
/* Bapteme */
import Bapt1 from '../../../medias/eventPri/Bapteme/Bapt1.JPG';
import Bapt2 from '../../../medias/eventPri/Bapteme/Bapt2.JPG';
import Bapt3 from '../../../medias/eventPri/Bapteme/Bapt3.JPG';
import Bapt4 from '../../../medias/eventPri/Bapteme/Bapt4.JPG';


const PriveP = () => {

    let data = [
        {
            id: 1,
            imgSrc: Anniv1,
            alt: 'Table décorer',
        },
        {
            id: 2,
            imgSrc: Bapt1,
        },
        {
            id: 3,
            imgSrc: Bapt2,
        },
        {
            id: 4,
            imgSrc: Bapt3,
        },
        {
            id: 5,
            imgSrc: Bapt4,
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
        <div className='priveP'>
            <Naviguation />
            <h1>Évènement privé</h1>

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

export default PriveP;