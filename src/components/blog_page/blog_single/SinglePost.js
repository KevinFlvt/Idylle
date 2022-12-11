import React from 'react';
import { Link } from 'react-router-dom';
import K from '../../../medias/Kaladja.jpg';
import '../../../style/components/blog_page/blog_single/SinglePost.scss';

import {TbArrowBackUp} from 'react-icons/tb';

const SinglePost = () => {
    /* Redaction d'un post */
    return (
        <div className='singlePost'>
            <div className="singlePost__wrapper">
                <img src={K} alt="" className="singlePost__wrapper__image" />

                <h1 className="singlePost__wrapper__title"> 
                    Lorem ipsum dolor sit amet.
                </h1>

                <div className="singlePost__wrapper__infos">
                    <span className="author">Auteur : <b>L'idylle</b></span>
                    <span className="date">Publié le : <b>22/11/2022</b></span>
                </div>

                <p className='singlePost__wrapper__desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur minima qui maxime deleniti tempore, quibusdam atque fuga dolor modi, omnis officia corporis! Perspiciatis libero quis aspernatur consequuntur incidunt eos cum, similique accusamus, modi fugit reprehenderit quos porro. Id, rerum incidunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aperiam error voluptatum quisquam praesentium vitae quia aliquid ipsa quasi maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam fuga sed quasi illum quae vitae veniam iure ipsum soluta at aliquid tempora harum quis ipsa molestiae, excepturi dolores! Quae repellendus blanditiis officiis dolorem, consectetur dicta voluptates? Voluptatibus optio, itaque officiis earum ab sunt consectetur commodi quis sequi. Similique, nostrum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur minima qui maxime deleniti tempore, quibusdam atque fuga dolor modi, omnis officia corporis! Perspiciatis libero quis aspernatur consequuntur incidunt eos cum, similique accusamus, modi fugit reprehenderit quos porro. Id, rerum incidunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aperiam error voluptatum quisquam praesentium vitae quia aliquid ipsa quasi maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam fuga sed quasi illum quae vitae veniam iure ipsum soluta at aliquid tempora harum quis ipsa molestiae, excepturi dolores! Quae repellendus blanditiis officiis dolorem, consectetur dicta voluptates? Voluptatibus optio, itaque officiis earum ab sunt consectetur commodi quis sequi. Similique, nostrum!</p>
                <p><i className='back'> <TbArrowBackUp /> </i> <Link to='/blog'>Retour</Link></p>
            </div>
        </div>
    );
};

export default SinglePost;