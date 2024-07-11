import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Logo from '../assets/LogoFerreteria.png'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Cards.css'
import { URL_DETALLEVENTAS_FILTRAR } from '../constants/constantes'

const CardDetalle = () => {
  const { id } = useParams();

  const [detalle, setDetalle] = useState({});

  const getDetalle = async () => {
    try {
      let result = await axios.get(`${URL_DETALLEVENTAS_FILTRAR}/${id}`);
      setDetalle(result.data[0]);
    } catch (error) {
        console.error(error)
    }
  };

  useEffect(()=> {
    getDetalle()
  },[])
  return (
    <div>
        
      <br></br><br></br>

      <div className="d-flex justify-content-center"> {/* combinación de utilidades de Bootstrap*/}

        <Card style={{ width: '18rem' }}> {/*defino el ancho de la card*/}
          <Card.Img variant="top" src={Logo} />

          <Card.Body> {/*se utiliza para encapsular el contenido principal de una tarjeta*/}
             
            <Card.Title></Card.Title>
            
            <Card.Text className='underline'> {/*se utiliza para agregar texto dentro de la card*/}
             Detalle venta:{detalle.idDetalle}
            </Card.Text>

            <Card.Text className='underline'>
              Número de venta:{detalle.idVenta}
            </Card.Text>

            <Card.Text className='underline'>
              Producto:{detalle.idProducto}
            </Card.Text>

            <Card.Text className='underline'>
              Cantidad:{detalle.cantidad}
            </Card.Text>

            <Card.Text className='underline'>
              Precio unitario:{detalle.precioUni}
            </Card.Text>
            <br></br>

            <div className='text-center'> {/* para centrar el boton*/}
           <Link className="btn btn-warning" to="/detalle">Volver</Link>
          </div>
          </Card.Body>

        </Card>
      </div>
      <br></br><br></br>
    </div>
  )
}

export default CardDetalle