import React from 'react';

import '../../style/components/landing_page/NewBlog.scss';
import K from '../../medias/Kaladja.jpg';
import M from '../../medias/Mennde.jpg';
import T from '../../medias/Toumblak.jpg';

import {Link} from 'react-router-dom';
import {RiArrowDropRightLine} from 'react-icons/ri';

const NewBlog = () => {
    return (
        <div className='newBlog'>
            <h1>L'idylle c'est aussi un blog ! </h1>

            <div className="row">
                <div className="content">
                    <Link to='/article'>
                        <img className='content__image' src={K} alt="" />
                        <h4>Titre du post</h4>
                        <span>Voir l'article <i className='content__icon'><RiArrowDropRightLine /></i></span>
                    </Link>
                </div>

                <div className="content">
                    <img className='content__image' src={M} alt="" />
                    <h4>Titre du post</h4>
                    <span>Voir l'article <i className='content__icon'><RiArrowDropRightLine /></i></span>
                </div>

                <div className="content">
                    <img className='content__image' src={T} alt="" />
                    <h4>Titre du post</h4>
                    <span>Voir l'article <i className='content__icon'><RiArrowDropRightLine /></i></span>
                </div>                           
            </div>
        </div>
    );
};

export default NewBlog;