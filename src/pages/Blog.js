import React from 'react';
import Naviguation from '../components/Naviguation';
import Sidebar from '../components/blog_page/Sidebar';
import Posts from '../components/blog_page/Posts';
import Footer from '../components/Footer';

import '../style/pages/Blog.scss';

const Blog = () => {
    return (
        <div className='blog'>
            <Naviguation />
            <h1>BLOG</h1>
            <div className="blog__content">
                <Posts />
                <Sidebar />
            </div>

            <Footer />
        </div>
    );
};

export default Blog;