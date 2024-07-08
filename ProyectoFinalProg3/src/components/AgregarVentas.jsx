import { Button } from "react-bootstrap"
import { useState } from "react"
import "../css/Agregar.css"
import axios from "axios"
import {useNavigate } from "react-router-dom"
import {URL_VENTAS_AGREGAR} from "../constants/constantes"


const AgregarVentas = () => {

  const navigate= useNavigate()

  const estadoinicial = {
    idEmpleado : "",
    idCliente: "",
    fechaVenta: "",
    totalVenta:"" ,
    metodoPago:""
  }


  const [datosForm,setDatosForm]= useState()
  const handleSubmit = async(e)=> {
    e.preventDefault()
    let response = await axios.post(URL_VENTAS_AGREGAR,{
      idEmpleado : datosForm.idEmpleado,
      idCliente: datosForm.idCliente,
      fechaVenta: datosForm.fechaVenta,
      totalVenta: datosForm.totalVenta,
      metodoPago:datosForm.metodoPago
    })
    if(response){
      alert("Se agrego Venta")
      navigate("/ventas")
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
          <input type="text" placeholder='idEmpleado'  onChange={handleChange}  name="idEmpleado"/>                      
        </div>

        <div>
          <input type="text" placeholder='idCliente' onChange={handleChange} name="idCliente"/>
        </div>

        <div>
          <input type="text" placeholder='Fecha' onChange={handleChange}  name="fechaVenta"/>
        </div>

        <div>
          <input type="text" placeholder='Total' onChange={handleChange} name="totalVenta"/>
        </div>

        <div>
          <input type="text" placeholder='Pago' onChange={handleChange} name="metodoPago"/>
        </div>

        <Button type='submit'>Agregar</Button>                                                                          {/* traemos un boton desde react-bootstrap y le damos la propiedad submit para poder enviar el formulario de logueo */}
        

      </form>
      </div>
    </div>
  )
}

export default AgregarVentas;