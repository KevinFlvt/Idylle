import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../medias/eventPri/anniversaire.jpg';
import img2 from '../../medias/eventPri/fete_naissance.jpg';
import img3 from '../../medias/Toumblak.jpg';

import '../../style/components/landing_page/PortfolioHome.scss';

const PortfolioHome = () => {

    const style= {
           container: {
            margin:'100px auto 0',
            width: '40%',
           } 
    }

    const datas = [
        {
            id: 1,
            image: img1,
            title : 'titre du slider 1 ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero iure ullam corrupti officiis rem!',
        },
        {
            id: 2,
            image: img2,
            title : 'titre du slider 2 ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero iure ullam corrupti officiis rem!',
        },
        {
            id: 3,
            image: img3,
            title : 'titre du slider 3 ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero iure ullam corrupti officiis rem!',
        },
    ]
    
    return (
        <div className='portfolioHome' style={style.container}>
            <h1 style={{textAlign:'center', textTransform:'uppercase', marginBottom:'10px'}}>Découvrez nos créations</h1> 


             <Carousel 
             autoPlay
             infiniteLoop={true}
             interval={3000}
             thumbWidth={130} >

                {datas.map((slide) => (
                    <div key={slide.id}>
                        <img src={slide.image} alt="" />
                        <div className="overlay">
                            <h2 className="overlay__title">{slide.title}</h2>
                            <p className="overlay__text">{slide.text}</p>
                        </div>
                    </div>
                )
                )}
            </Carousel>
        </div>
    );
};

export default PortfolioHome;