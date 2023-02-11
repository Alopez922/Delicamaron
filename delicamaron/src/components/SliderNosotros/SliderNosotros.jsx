import React, { Component } from "react";
import Slider from "react-slick";
import foto1 from "../../utils/imagenes/foto1.jpg"
import foto2 from "../../utils/imagenes/foto2.jpg"
import foto3 from "../../utils/imagenes/foto3.jpg"
import foto4 from "../../utils/imagenes/foto4.jpg"
import foto5 from "../../utils/imagenes/foto5.jpg"
import foto6 from "../../utils/imagenes/foto6.jpg"
import "./sliderno.css"

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className="center">
        <h2>Center Mode</h2>
        <Slider>
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
          <div>
          <img src={foto6} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}