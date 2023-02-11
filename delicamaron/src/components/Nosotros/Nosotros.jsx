import React from "react";
import Footer from "../Footer/Footer";
import Navreact from "../Navbar/Navbar";
import videodeli from "../../utils/imagenes/videodeli.mp4"
import "./nosotros.css"

export default function Nosotros() {
  return (
    <div className="Nosotros-Container">
      <Navreact />

      <div className="mission-section">
        <h2 className="mission-title">Misión</h2>
        <div className="mission-content">
          <div className="mission-video">
            <video width="100%" height="300px" src={videodeli} controls loop />
          </div>
          <div className="mission-description">
            <p>
              En Delicamaron, nuestra visión es ofrecer una experiencia culinaria única y memorable a cada uno de nuestros clientes. Queremos ser reconocidos como el restaurante más innovador e inolvidable de la ciudad, donde la calidad de la comida y el servicio al cliente son nuestras máximas prioridades. Nos esforzamos por crear un ambiente acogedor y una atmósfera relajada, donde la gente pueda disfrutar de la comida y el tiempo con sus seres queridos. Juntos, trabajamos hacia el objetivo de ser la primera elección de los clientes para cualquier ocasión especial o una noche cualquiera.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

        
        
      
    
