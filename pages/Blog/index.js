import React from 'react'

const Blog = () => {
    return (
        <section id="blog" className="blog-wrapper wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center mb-5">
                        <h3 className="text-block">Latest Blog</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="card p-0 border-0 rounded-0">
                            <img src="./images/blog/1.jpg" />
                            <div className="blog-content">
                                <h5 className="text-white mb-5">Dental Insurance with Benefits</h5>
                                <h6 className="text-white">By Admin - February 18, 2018</h6>
                                <p className="mt-2 text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consectetur fugit libero nobis.
                                </p>
                                <a href="#" className="main-btn mt-2">
                                    Read More{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="card p-0 border-0 rounded-0">
                            <img src="./images/blog/2.jpg" />
                            <div className="blog-content">
                                <h5 className="text-white mb-5">Dental Insurance with Benefits</h5>
                                <h6 className="text-white">By Admin - February 18, 2018</h6>
                                <p className="mt-2 text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consectetur fugit libero nobis.
                                </p>
                                <a href="#" className="main-btn mt-2">
                                    Read More{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="card p-0 border-0 rounded-0">
                            <img src="./images/blog/3.jpg" />
                            <div className="blog-content">
                                <h5 className="text-white mb-5">Dental Insurance with Benefits</h5>
                                <h6 className="text-white">By Admin - February 18, 2018</h6>
                                <p className="mt-2 text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consectetur fugit libero nobis.
                                </p>
                                <a href="#" className="main-btn mt-2">
                                    Read More{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Blog