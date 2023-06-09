import React from 'react'

const Testimonial= () => {
  return (
    <section id="testimonial" className="testimonial-wrapper wrapper">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 text-center mb-4">
        <h3 className="text-black">Testimonials</h3>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-xl-3 col-md-4 col-sm-6">
        <div className="card text-center">
          <img src="./images/testimonial/client1.png" className="img-fluid" />
          <h4 className="pt-4 mb-0">Aliceano Colby</h4>
          <p>CEO of Prime IT</p>
        </div>
      </div>
      <div className="col-xl-9 col-md-8 col-sm-6 ps-md-4 pt-sm-0 pt-4">
        <h4>Awesome Work</h4>
        <p>
          They really took my individual case to heart.Their team is very
          helpful. They all work together in an impressive way to make sure that
          my needs were met and i walked out pain free.{" "}
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Testimonial