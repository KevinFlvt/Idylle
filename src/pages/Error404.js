import React from 'react';

import Footer from '../components/Footer';
import Naviguation from '../components/Naviguation';

const Error404 = () => {
    return (
        <div className='error404'>
            <Naviguation />
            <h1>Il semblerait que ce ne soit pas la prestation souhaité</h1>
            <p>Revenir en lieu sur ici</p>
            <Footer /> 
        </div>
    );
};

export default Error404;