import React from 'react';
import Naviguation from '../components/Naviguation';
import Footer from '../components/Footer';

const EventPro = () => {

    const style = {
        title: {
            margin: 'auto', 
            textAlign: 'center', 
            borderBottom: '3px solid #fff',
            width: '34%',
            marginBottom: '50px',
        }
    };

    return (
        <div>
            <Naviguation />
            <h1 style={style.title}>Évènements Professionnels</h1>

            <p style={{width: '80%', margin: 'auto'}}>L'idylle vous accompagne aussi dans vos évènements professionnels! Dans la décoration de votre boutique! 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse ad, consectetur porro asperiores beatae natus nulla quos? Non, quam!</p>
            <Footer />
        </div>
    );
};

export default EventPro;