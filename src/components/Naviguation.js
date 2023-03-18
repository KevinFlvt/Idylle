import React from 'react';
import Navbar from './Navbar';
import HamMenu from './HamMenu';
import { useState } from 'react';


const Naviguation = () => {

    const [showHam, setShowHam] = useState(false);

    const closeHam = () => {
        setShowHam(false);
    }

    const toggleHam = () => {
        setShowHam(!showHam);
    }

    return (
        <div className='naviguation'>
            <Navbar toggleHam={toggleHam} />
            <HamMenu isOpen={showHam} closeHam={closeHam} />
        </div>
    );
};

export default Naviguation;