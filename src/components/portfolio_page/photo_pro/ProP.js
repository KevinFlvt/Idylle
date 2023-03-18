import React, { useState } from 'react';
import Footer from '../../Footer';
import Naviguation from '../../Naviguation';
import { AiOutlineClose } from 'react-icons/ai';

import './ProP.scss';

/* Photos */

const ProP = () => {
    let data = [
        {
            id: 1,
            imgSrc: "Anniv1",
        },
        {
            id: 2,
            imgSrc: "Bapt1",
        },
        {
            id: 3,
            imgSrc: "Bapt2",
        },
        {
            id: 4,
            imgSrc: "Bapt3",
        },
        {
            id: 5,
            imgSrc: "Bapt4",
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
        <div className='proP'>
            <Naviguation />
            <h1>Evement Professionnel</h1>

            
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

export default ProP;