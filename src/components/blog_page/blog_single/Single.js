import React from 'react';
import Naviguation from '../../Naviguation';
import Footer from '../../Footer';
import Sidebar from '../Sidebar';
import SinglePost from './SinglePost';

import '../../../style/components/blog_page/blog_single/Single.scss';

const Single = () => {
    return (
        /* Page des post seul */
        <div>
            <Naviguation />
            <div className='single'>
                <SinglePost />
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
};

export default Single;