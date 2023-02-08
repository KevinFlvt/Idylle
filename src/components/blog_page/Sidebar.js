import React from 'react';
import me from '../../medias/photo_presentation.jpeg';

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import '../../style/components/blog_page/Sidebar.scss';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__item">
                <span className="sidebar__item__title">à Propos</span>
                <img src={me} alt="Moi" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestias sunt libero quidem sint quasi.</p>
            </div>

            <div className="sidebar__item">
                <span className="sidebar__item__title"> Catégories </span>
                <ul className="sidebar__item__list">
                    <li className="sidebar__item__list__items">Prestylle</li>
                    <li className="sidebar__item__list__items">Wedding</li>
                    <li className="sidebar__item__list__items">Anniversaire</li>
                    <li className="sidebar__item__list__items">Boutique</li>
                </ul>
            </div>

            <div className="sidebar__item">
                <span className="sidebar__item__title"> Suivez-Nous</span>
                <div className="sidebar__item__social">
                    <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer' id='insta'> <FaInstagram /></a>
                    <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer' id='facebook'> <FaFacebookSquare /></a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;