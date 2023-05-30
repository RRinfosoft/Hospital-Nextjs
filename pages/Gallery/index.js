import React from 'react'

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-wrapper wrapper">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 text-center mb-5">
        <h3>Our Gallery</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-6 mb-4">
        <img src="./images/gallery/1.jpg" className="w-100 h-100" />
      </div>
      <div className="col-md-4 col-sm-6 mb-4">
        <img src="./images/gallery/2.jpg" className="w-100 h-100" />
      </div>
      <div className="col-md-4 col-sm-6 mb-4">
        <img src="./images/gallery/3.jpg" className="w-100 h-100" />
      </div>
      <div className="col-md-4 col-sm-6 mb-4">
        <img src="./images/gallery/5.jpg" className="w-100 h-100" />
      </div>
      <div className="col-md-8 col-sm-6 mb-4">
        <img src="./images/gallery/4.jpg" className="w-100 h-100" />
      </div>
    </div>
  </div>
</section>

  )
}

export default Gallery