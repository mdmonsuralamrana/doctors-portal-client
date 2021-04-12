import React from 'react';
import willson from '../../../images/willson.png';
import BlogPost from '../BlogPost/BlogPost';
import './Blog.css';

const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: willson,
        date: '23 April 2019'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: willson,
        date: '23 April 2019'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: willson,
        date: '23 April 2019'
    },
]


const Blog = () => {

    const detailsBoxStyle = {
        float: 'left',
        width: '100%',
        height: '100%',
        border: '0px 1px 1px 0px',
        textAlign: 'center',
        marginLeft: '50px'
    }

    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div style={{float: 'left'}} className="row col-md-4 float-left d-flex justify-content-center card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;