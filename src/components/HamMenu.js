import React from 'react';
import '../style/components/Ham.scss';
import { NavLink } from 'react-router-dom';

//image logo
import logo from '../medias/Logo beige.png';

const HamMenu = ({
    isOpen, 
    closeHam
}) => {
    const styles = isOpen ? 'ham ham--open' : 'ham ham--closed';

    return (
        <div className='ham'>
            {isOpen ? <div className='ham__backdrop' onClick={closeHam}></div> : ''}
            <nav className= {`${styles}`}>
                <ul className='ham__list'>
                    <div className="ham__logo">
                        <img src={logo} alt="Logo du site" />
                    </div>

                    <li className="ham__list__item">
                        <NavLink className='ham__link' to='/'>Acceuil</NavLink>
                    </li>

                    <li className="ham__list__item">
                        <NavLink className='ham__link' to='/prestylles'>Prest'ylles</NavLink>
                    </li>

                    <li className="ham__list__item">
                        <NavLink className='ham__link' to='/evenements-prives'>Évènements privés</NavLink>
                    </li>

                    <li className="ham__list__item">
                        <NavLink className='ham__link' to='/evenements-professionels'>Évènements pro </NavLink>
                    </li>
                    <li className="ham__list__item">
                        <NavLink className='ham__link' to='/portfolio'>Portfolio</NavLink>
                    </li>
                    <li className="ham__list__item">
                        <NavLink className='ham__link' to='/blog'>Blog</NavLink>
                    </li>
                    <li className="ham__list__item">
                        <NavLink className='ham__link' to='/reservation'>Je réserve</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default HamMenu;