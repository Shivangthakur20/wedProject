import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Slider.css"




const Slider = ({start}) => {
  return (
    <Carousel fade>
       
       {start.map((item)  =>(
        
               <Carousel.Item>
                   <img
                   className="d-block w-100"
                   id="sliderid"
                   src={item}
                   alt="Slider"
                   />
               </Carousel.Item>



       ))}

       
    </Carousel>
  )
}

export default Slider