import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import Imagen1 from '../assets/herramienta1.jpg'
import Imagen2 from '../assets/herramienta2.jpg'
import Imagen3 from '../assets/herramienta3.jpg'
import '../css/Carrousel.css'


const Carrusel = () => {

    return (

        <div className="carousel-container">
            <Carousel fade>
                <Carousel.Item>
                    <div className="carousel-img-container">
                        <img className="d-block w-100 carousel-img" src={Imagen1} alt="First slide" />
                        <div className="gradient-overlay"></div>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className="carousel-img-container">
                        <img className="d-block w-100 carousel-img" src={Imagen2} alt="Second slide" />
                        <div className="gradient-overlay"></div>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className="carousel-img-container">
                        <img className="d-block w-100 carousel-img" src={Imagen3} alt="Third slide" />
                        <div className="gradient-overlay"></div>
                    </div>
                </Carousel.Item>


            </Carousel>
        </div>
    )
}



export default Carrusel;