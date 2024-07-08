import {Router,Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Logo from '../assets/LogoFerreteria.png'
import '../css/Cards.css'

const CardDetalle = () => {
  return (
    <div>
        
      <br></br><br></br>

      <div className="d-flex justify-content-center"> {/* combinación de utilidades de Bootstrap*/}

        <Card style={{ width: '18rem' }}> {/*defino el ancho de la card*/}
          <Card.Img variant="top" src={Logo} />

          <Card.Body> {/*se utiliza para encapsular el contenido principal de una tarjeta*/}
             
            <Card.Title></Card.Title>
            
            <Card.Text className='underline'> {/*se utiliza para agregar texto dentro de la card*/}
             Detalle venta:
            </Card.Text>

            <Card.Text className='underline'>
              Número de venta:
            </Card.Text>

            <Card.Text className='underline'>
              Producto:
            </Card.Text>

            <Card.Text className='underline'>
              Cantidad:
            </Card.Text>

            <Card.Text className='underline'>
              Precio unitario:
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