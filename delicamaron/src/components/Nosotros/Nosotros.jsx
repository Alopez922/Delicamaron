import React from "react";
import Navreact from "../Navbar/Navbar";
import AutoPlay from "../SliderNosotros/SliderNosotros";

export default function Nosotros(){
    return(
        
           <div className="Nosotros-Container">
            
            <AutoPlay/>
            <Navreact/>

            <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h2 style={titleStyle}>Visión</h2>
        <p style={paragraphStyle}>Nuestra visión es ser reconocidos como uno de los mejores restaurantes en la ciudad, ofreciendo comida de calidad y un ambiente acogedor para nuestros clientes.</p>
      </div>
      <img style={imageStyle} src="path/to/your/image.jpg" alt="Visión" />
     <div style={textContainerStyle}>
        <h2 style={titleStyle}>Misión</h2>
        <p style={paragraphStyle}>
        "En Delicamaron, nuestra visión es ofrecer una experiencia culinaria única y memorable a cada uno de nuestros clientes. Queremos ser reconocidos como el restaurante más innovador e inolvidable de la ciudad, donde la calidad de la comida y el servicio al cliente son nuestras máximas prioridades. Nos esforzamos por crear un ambiente acogedor y una atmósfera relajada, donde la gente pueda disfrutar de la comida y el tiempo con sus seres queridos. Juntos, trabajamos hacia el objetivo de ser la primera elección de los clientes para cualquier ocasión especial o una noche cualquiera."
        </p>
      </div>
    </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '40px'
};

const textContainerStyle = {
  width: '60%',
  textAlign: 'center',
  marginBottom: '40px'
};

const titleStyle = {
  fontWeight: 'bold',
  marginBottom: '20px'
};

const paragraphStyle = {
  fontSize: '18px'
};

const imageStyle = {
  width: '100%',
  maxWidth: '400px',
  objectFit: 'cover'
};
        
        
      
    
