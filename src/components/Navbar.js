import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../style/components/Navbar.scss';

import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {  Turn } from 'hamburger-react';

//image log
import logo from '../medias/Logo beige.png';

const Navbar = ({ toggleHam }) => {
    return (
        <nav className='navbar'> 
        <Link to='/'><img src={logo} alt="logo du site"  className='logoDesktop'/></Link>  

            <ul className="navbar__list">

                <Link to='/'><img src={logo} alt="logo du site" className='logoPhone'/></Link> {/* Pour la version phone */}

                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/'>
                        Accueil
                    </NavLink>
                </li>

                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/pique-nique'>
                        Pique-Nique<i><MdOutlineKeyboardArrowDown /></i>
                    </NavLink>
                    <ul className="subMenu">
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/pique-nique/toumblak'>Toumblak</NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/pique-nique/kaladja'>Kaladja</NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/pique-nique/mennde'>Menndé</NavLink>
                        </li>
                    </ul>
                </li>

                <li className="navbar__list__item" >
                    <NavLink className='navbar__link' to ='/evenements-prives'>
                        Évènements privés <i> <MdOutlineKeyboardArrowDown /></i>
                    </NavLink>
                    <ul className="subMenu" style={{marginTop: '150px'}}>
                        <li className="navbar__list__item" >
                            <NavLink className='navbar__link' to ='/pique-nique/toumblak'>Anniversaire</NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/pique-nique/kaladja'>Demande en mariage</NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/pique-nique/mennde'>fête de naissance</NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/pique-nique/mennde'>EVJF</NavLink>
                        </li>
                    </ul>
                </li>

                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/evenements-professionels'>
                        Évènements pro <i> <MdOutlineKeyboardArrowDown /></i>
                    </NavLink>
                    <ul className="subMenu">
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/pique-nique/toumblak'>décoration</NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/pique-nique/kaladja'>séminaire</NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/pique-nique/mennde'>inauguration</NavLink>
                        </li>
                    </ul>
                </li>
                
                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/wedding-planner'>
                        Wedding Planner
                    </NavLink>
                </li> 

                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/portfolio'>
                        Portfolio
                    </NavLink>
                </li>
                <li className='navbar__list__item'>
                    <NavLink className='navbar__link' to='/reservation'>
                        <button>Je réserve</button>
                    </NavLink>
                </li>

                <div className="navbar__hamburger" onClick={toggleHam}>
                    <Turn />
                </div>
            </ul>

        </nav>
    );
};

export default Navbar;