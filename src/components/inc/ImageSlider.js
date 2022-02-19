import React from "react";
import img1 from '../images/EDCC Poster 1.png' ;
import img2 from '../images/EDCC Poster 2.jpg' ;
import img3 from '../images/TJProf.jpeg' ;
import img4 from '../images/TJProheticProf.jpeg' ;



function ImageSlider(){

    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} alt="poster" className="d-block w-100 " height={'350px'}/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="poster 2" height={'350px'}/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." height={'350px'}/>
    </div><div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..." height={'350px'}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default ImageSlider;