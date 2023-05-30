import React from 'react'
import About from '../About'
import Service from '../services'
import Team from '../Team'
import Gallery from '../Gallery'
import Testimonial from '../Testimonials'
import Blog from '../Blog'


const Hero = () => {
  return (

    <section id="home" className="home">
    <div className="banner-wrapper wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order md-1 order-2">
            <h3>Better Life Throught</h3>
            <h1>Better Dentistry</h1>
            <p>
              join us to a fun and friendly dental enviroment,Our professional are
              working so har to see smile on your face that your deserval about
              your duties.
            </p>
            <a href="#" className="main-btn mt-4 fill-btn">
              Appointment
            </a>
            <a href="#" className="main-btn mt-4 ms-3">
              Learn More
            </a>
          </div>
          <div className="col-md-6 order-md-2 order-1 mb-md-0 mb-5">
            <div className="top-rigth-sec">
              <div className="animate-img">
                <img
                  className="aimg1"
                  src="images/top-banner-img/woman-brush.png"
                />
                <img className="aimg2" src="images/top-banner-img/doctor.png" />
              </div>
              <img
                className="img-fluid ms-xl-5"
                src="images/top-banner-img/top-right-img-1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="wrapper pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card text-center">
              <div className="icon-box">
                <img src="images/top-banner-img//Appointment-icon.png" />
              </div>
              <h4>Easy Appointment</h4>
              <p>
                Lorem ipsum is simpl is very dum text of the printing and typing
                seeting
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card text-center">
              <div className="icon-box">
                <img src="images/top-banner-img/Emergency-icon.png" />
              </div>
              <h4>Emergency Services</h4>
              <p>
                Lorem ipsum is simpl is very dum text of the printing and typing
                seeting
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card text-center">
              <div className="icon-box">
                <img src="images/top-banner-img/7-Service-icon.png" />
              </div>
              <h4>24/7 Services</h4>
              <p>
                Lorem ipsum is simpl is very dum text of the printing and typing
                seeting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
<About/>
<Service/>
<Team/>
<Gallery/>
<Testimonial/>
<Blog/>
  </section>


  )
}

export default Hero