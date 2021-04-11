import React from 'react';


const Blog = () => {
    return (
        <div>
            <div className="blog-container text-center">
                <h2 className="mb-3 text-primary">Our Blog</h2>
                <h1>From Our Blog News</h1>
            </div>
            <div style={{width:'95%', height:'95%', border:'0px 1px 1px 0px'}} className='blog-news-container col-4 d-flex justify-content-center mt-5'>
                <div className="mx-5 px-2">
                    <h5>Dr. Rashid Kabir</h5>
                    <p>22 August 2020</p>
                    <h5>Check at list a Doctor In a year for your teeth</h5>
                </div>
                <div className="mx-5 px-2">
                    <h5>Dr. Caudi</h5>
                    <p>24 August 2020</p>
                    <h5>2 Times of brush in a day make your teeth healthy</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo</p>
                </div>
                <div className="mx-5 px-2"> 
                    <h5>Dr. John Mitchel</h5>
                    <p>25 August 2020</p>
                    <h5>The tooth cancer is taking a challenge</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo</p>
                </div>
            </div>
        </div>

    );
};

export default Blog;