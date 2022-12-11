import React from 'react';
import Naviguation from '../components/Naviguation';
import Formulaire from '../components/form_page/Formulaire';
import Footer from '../components/Footer';

import '../style/pages/Contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <Naviguation />
            <Formulaire />
            <Footer />
            
        </div>
    );
};

export default Contact;