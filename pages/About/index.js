import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <section id="about" className="about-wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-mb-0 mb-5">
            <div className="position-relative">
            <img src="images/about/about-banner1.png" className="img-fluid" />
              <img src="images/about/about-img2.png" className="about-animate" />
            </div>
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h2>Welcome to a family</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              fugiat tempore temporibus molestias aperiam, enim aliquam consectetur.
              Cumque, iusto ipsa? ipsum dolor sit amet consect
            </p>
            <div className="mt-5 card">
              <div className="about-clinic">
                <h4>500+</h4>
                <p>Happy Patients</p>
              </div>
              <div className="about-clinic">
                <h4>88+</h4>
                <p>Qualified Doctors</p>
              </div>
              <div className="about-clinic">
                <h4>25+</h4>
                <p>Years Experience</p>
              </div>
              <div className="about-clinic">
                <h4>55+</h4>
                <p>Dental Awards</p>
              </div>
              <span className="line-1" />
              <span className="line-2" />
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default About