import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../style/components/Navbar.scss';

import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

//image log
import logo from '../medias/Logo beige.png';

const Navbar = ({ toggleHam }) => {
    return (
        <nav className='navbar'> 
        <Link to='/'><img src={logo} alt="logo du site" /></Link>  

            <ul className="navbar__list">
                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/'>
                        Accueil
                    </NavLink>
                </li>

                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/prestylles'>
                        Prest'ylles <i> <MdOutlineKeyboardArrowDown /></i>
                    </NavLink>
                    <ul className="subMenu">
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/prestylles/toumblak'>Toumblak</NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/prestylles/kaladja'>Kaladja</NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/prestylles/mennde'>Menndé</NavLink>
                        </li>

                    </ul>
                </li>

                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/evenements-prives'>
                        Évènements privés
                    </NavLink>
                </li>

                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/evenements-professionels'>
                        Évènements pro 
                    </NavLink>
                </li>

                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/portfolio'>
                        Portfolio
                    </NavLink>
                </li>
                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/blog'>
                        Blog
                    </NavLink>
                </li>

                <li className='navbar__list__item'>
                    <NavLink className='navbar__link' to='/reservation'>
                        <button>Je réserve</button>
                    </NavLink>
                </li>

{/*             <div className="navbar__button" onClick={toggleHam}>
                    <div className="navbar__button__component"></div>
                    <div className="navbar__button__component"></div>
                    <div className="navbar__button__component"></div>
                </div> */}
            </ul>

        </nav>
    );
};

export default Navbar;