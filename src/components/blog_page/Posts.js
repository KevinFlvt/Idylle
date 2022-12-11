import React from 'react';
import Post from './posts_folder/Post';

import '../../style/components/blog_page/Posts.scss';

const Posts = () => {
    return (
        /* Page avec tout les posts */
        <div className='posts'>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Posts;