import React from 'react';
import { Link } from 'react-router-dom';
import K from '../../../medias/Kaladja.jpeg';
import '../../../style/components/blog_page/posts_folder/Post.scss';

const Post = () => {
    /* Couverture d'un post */
    return (
        <div className='post'>
           <Link to='/article'> <img className="post__image"  src={K} alt="" /></Link>
            
            <div className="post__info">
                <div className="post__info__categories">
                    <span className="post__info__categories__cat">Pique-nique</span>
                    <span className="post__info__categories__cat">Prestylles</span>
                </div>

                <span className="post__info__title">Lorem ipsum dolor sit amet.</span>
                <hr />

                <span className="post__info__date">23/11/2022</span>
            </div>

            <p className="post__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo animi doloribus eligendi iure repellat optio dolor, sit officiis in itaque facilis architecto vel numquam, enim totam assumenda cupiditate iusto est dolorum quam at laudantium nobis voluptates? Iste odio et reprehenderit!
            </p>
        </div>
    );
};

export default Post;