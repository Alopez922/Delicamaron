import React, { Component } from "react";
import Slider from "react-slick";
import foto1 from "../../utils/imagenes/Nosotros/foto1"
import foto2 from "../../utils/imagenes/Nosotros/foto2"
import foto3 from "../../utils/imagenes/Nosotros/foto3"
import foto4 from "../../utils/imagenes/Nosotros/foto4"
import foto5 from "../../utils/imagenes/Nosotros/foto5"


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <img src={foto1} alt="" />
          </div>
          <div>
          <img src={foto2} alt="" />
          </div>
          <div>
          <img src={foto3} alt="" />

          </div>
          <div>
          <img src={foto4} alt="" />
          </div>
          <div>
          <img src={foto5} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}