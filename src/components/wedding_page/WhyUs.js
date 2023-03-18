import React, { useState, useEffect } from 'react';

import w4 from '../../medias/Wedding/wedding4.jpg';
import w5 from '../../medias/Wedding/wedding5.jpg';
import w6 from '../../medias/Wedding/wedding6.jpg';

import { AiOutlineClose } from 'react-icons/ai';
import Aos from 'aos';
import "aos/dist/aos.css";

import '../../style/components/wedding_page/WhyUs.scss';

const WhyUs = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    let data2 = [
        {
            id: 1,
            imgSrc: w4,
            effect: "fade-right",
            delay: 200,
        },
        {
            id: 2,
            imgSrc: w5,
            effect: "fade-up",
        },
        {
            id: 3,
            imgSrc: w6,
            effect: "fade-left",
            delay: 500,
        }
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div className='nous'>
            <h1>Pourquoi nous dire </h1>
            <h2>OUI !</h2>

            <div className="text">
                <p>Organiser un mariage demande énormément d'investissement personnel.
                    Le plus important, lors de votre mariage, ce sera de partager ensemble un moment de
                    bonheur inoubliable. Vous vous retrouverez avec vos proches, pour vivre un instant
                    privilégié de joie, de partage et de tendresse. Le plus important... C'est vous !
                    D'ou l'importance du choix de votre wedding planner. Alors, pourquoi nous dire oui ?</p>

                <br /> <br />

                <p><h4>L'organisation</h4></p>
                <p>Organisé, rigoureux, capable d’anticiper les problèmes et d'organiser les différentes
                    tâches de votre événement sans jamais se laisser déborder, voici les points principaux qui
                    sont primordiaux pour nous.
                </p>

                <br /> <br />

                <p><h4>Dynamique</h4></p>
                <p>Dynamique, notre équipe est toujours en forme, capable de vous booster quand vous avez un passage à vide
                </p>

                <br /><br />

                <p><h4>Créatif</h4></p>
                <p>Attentifs aux dernières tendances, désireux d’en savoir toujours plus, doué d’imagination, de créativité, voilà encore quelques traits de notre personnalité qui feront la différence pour votre grand jour !
                </p>

                <br /> <br />

                <p><h4>Attentif</h4></p>
                <p>Attentive, sachant s’adapter facilement à toutes sortes de profils et de désirs. Nous ferons le nécessaire afin que vous vous sentirez à l’aise avec notre équipe.
                </p>

                <br /> <br />

                <p><h4>Emphatique</h4></p>
                <p>Et oui le mariage peu être stressant, nous sommes passez par là ! C'est pour cela que nous pouvons comprendre vos angoisses et inquiétudes. Nous mettons un point d'honneur à être rassurant, présent et patient en toutes circonstances.
                </p>

            </div>

            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="" />
                <AiOutlineClose onClick={() => setModel(false)} />
            </div>

            <div className="container">
                <div className="container__row">
                    {data2.map((item, index) => {
                        return (
                            <div className="container__content" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt="" data-aos={item.effect} data-aos-delay={item.delay} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhyUs;