import React from 'react';
import Naviguation from '../components/Naviguation';
import Footer from '../components/Footer';

const EventPrive = () => {
    const style = {
        title: {
            margin: 'auto', 
            textAlign: 'center', 
            borderBottom: '3px solid #fff',
            width: '24%',
            marginBottom: '50px',
        }
    };

    return (

        <div>
            <Naviguation />
            <h1 style={style.title}>Évènements Privés</h1>

            <Footer />
        </div>
    );
};

export default EventPrive;