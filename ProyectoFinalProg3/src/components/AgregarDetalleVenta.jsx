import { Button } from "react-bootstrap"
import { useState } from "react"
import "../css/Agregar.css"
import axios from "axios"
import {useNavigate } from "react-router-dom"
import {URL_DETALLEVENTAS_AGREGAR} from "../constants/constantes"


const AgregarDetalleVenta = () => {

  const navigate= useNavigate()

  const estadoinicial = {
    idVenta : "",
    idProducto: "",
    cantidad: "",
    precioUni:"" 
  }


  const [datosForm,setDatosForm]= useState()
  const handleSubmit = async(e)=> {
    e.preventDefault()
    let response = await axios.post(URL_DETALLEVENTAS_AGREGAR,{
      idVenta : datosForm.idVenta,
      idProducto: datosForm.idProducto,
      cantidad: datosForm.cantidad,
      precioUni: datosForm.precioUni
    })
    if(response){
      alert("Se agrego un nuevo detalle de Venta")
      navigate("/detalle")
    }
  }

  const handleChange =(e) =>{
    setDatosForm({...datosForm,[e.target.name]:e.target.value})
  }

  return (
    <div className="caja">
      <div className="formularioA">
        <form onSubmit={handleSubmit}>                                                                                   {/* creamos el formulario que contendra los campos para ingresar el usario y la contrasena */}

        <h1>Agregar Venta</h1>
      
        <div>
          <input type="text" placeholder='idVenta'  onChange={handleChange}  name="idVenta"/>                      
        </div>

        <div>
          <input type="text" placeholder='idProducto' onChange={handleChange} name="idProducto"/>
        </div>

        <div>
          <input type="text" placeholder='cantidad' onChange={handleChange}  name="cantidad"/>
        </div>

        <div>
          <input type="text" placeholder='Precio Final' onChange={handleChange} name="precioUni"/>
        </div>

        <Button type='submit'>Agregar</Button>                                                                          {/* traemos un boton desde react-bootstrap y le damos la propiedad submit para poder enviar el formulario de logueo */}
        

      </form>
      </div>
    </div>
  )
}

export default AgregarDetalleVenta;