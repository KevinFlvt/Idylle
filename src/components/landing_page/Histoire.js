import React from 'react';
import '../../style/components/landing_page/Histoire.scss';
import photoPresentation from '../../medias/photo_presentation.jpeg';

const Histoire = () => {
    return (
        <div className='histoire'>
            <div className="row">

                <div className="col">
                    <img src={photoPresentation} alt="Présentation" />
                </div>

                <div className="col">
                    <h1>Notre Histoire</h1>
                    <p>Je me présente, Talita FRANCIUS, organisatrice d'évènements en tant qu'event planner et balloons designer, fondadtrice de l'agence événementielle « L'idylle event ».</p>
                    <br />
                    <p>L'idylle est une agence événementielle unique et intimiste. La volonté́ de l'agence est de vous offrir un moment d'évasion, à travers un cadre, un décor, une ambiance minutieusement imaginée et créée, en fonction de vos gouts.</p>
                    <br />
                    <p>Des événements privés aux évènements professionnels, du dîner romantique, au pique-nique entre copines, l'agence est présente pour répondre à vos besoins et créer votre idylle.</p>
                    <br />
                    <p>Nous pensons que rien n'est impossible. Nous croyons au spectaculaire, nous nous efforçons de faire de chaque instant un moment unique, nous vivons et respirons des événements inspirants, nous les aimons.</p>
                </div>

            </div>
        </div>
    );
};

export default Histoire;