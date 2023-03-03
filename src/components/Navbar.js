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
                        Évènement privé <i> <MdOutlineKeyboardArrowDown /></i>
                    </NavLink>
                    <ul className="subMenu" style={{marginTop: '150px'}}>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/portfolio'>Fête de naissance</NavLink>
                        </li>
                        <li className="navbar__list__item" >
                            <NavLink className='navbar__link' to ='/portfolio'>Anniversaire</NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/portfolio'>Baptême</NavLink>
                        </li>
                        <li className="navbar__list__item">
                            <NavLink className='navbar__link' to ='/portfolio'>EVJF</NavLink>
                        </li>
                    </ul>
                </li>

                <li className="navbar__list__item">
                    <NavLink className='navbar__link' to ='/evenements-professionnels'>
                        Évènement pro <i> <MdOutlineKeyboardArrowDown /></i>
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
                    <NavLink className='navbar__link' to ='/offres-exception'>
                        Offres d'exception
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