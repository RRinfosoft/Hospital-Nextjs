import React from 'react'

const Footer = () => {
  return (
    <section id="footer" className="footer-wrapper wrapper">
    <div className="container pb-3">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <h5>Clinic Location</h5>
          <p className="ps-0">Moradabad</p>
          <div className="contact-info">
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <i className="fa fa-home me-3" />
                  NO. 96,Moradabad
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-phone me-3" />
                  +1 222 3333
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope me-3" />
                  info@example.come
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5>More Links</h5>
          <ul className="link-widget p-0">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Office</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Our Store</a>
            </li>
            <li>
              <a href="#">Guarantee</a>
            </li>
            <li>
              <a href="#">Buy Gift Card</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5>More Links</h5>
          <ul className="link-widget p-0">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Office</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Our Store</a>
            </li>
            <li>
              <a href="#">Guarantee</a>
            </li>
            <li>
              <a href="#">Buy Gift Card</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 ">
          <h5>Newsletter</h5>
          <div className="form-group mb-4">
            <input
              type="email"
              className="form-control bg-transparent"
              placeholder="Enter your Email Here"
            />
            <button
              type="submit"
              className="main-btn rounded-2 mt-3 border-white text-white"
            >
              Subscribe
            </button>
          </div>
          <h5>Stay Connected</h5>
          <ul className="social-network d-flex align-items-center p-0">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-vimeo-v" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Footer