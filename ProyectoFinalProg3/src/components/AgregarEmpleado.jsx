import { Button } from "react-bootstrap"
import { useState } from "react"
import "../css/Agregar.css"
import axios from "axios"
import {useNavigate } from "react-router-dom"
import {URL_EMPLEADOS_AGREGAR} from "../constants/constantes"


const AgregarEmpleado = () => {

  const navigate= useNavigate()

  const estadoinicial = {
    nombreEmpleado : "",
    dniE: "",
    emailE: "",
    telefonoE:"" ,
    domicilioE:""
  }


  const [datosForm,setDatosForm]= useState()
  const handleSubmit = async(e)=> {
    e.preventDefault()
    let response = await axios.post(URL_EMPLEADOS_AGREGAR,{
      nombreEmpleado : datosForm.nombreEmpleado,
      dniE: datosForm.dniE,
      emailE: datosForm.emailE,
      telefonoE: datosForm.telefonoE,
      domicilioE:datosForm.domicilioE
    })
    if(response){
      alert("Se agrego Empleado")
      navigate("/empleado")
    }
  }

  const handleChange =(e) =>{
    setDatosForm({...datosForm,[e.target.name]:e.target.value})
  }

  return (
    <div className="caja">
      <div className="formularioA">
        <form onSubmit={handleSubmit}>                                                                                   {/* creamos el formulario que contendra los campos para ingresar el usario y la contrasena */}

        <h1>Agregar Empleado</h1>
      
        <div>
          <input type="text" placeholder='Apellido y nombre Empleado'  onChange={handleChange}  name="nombreEmpleado"/>                      
        </div>

        <div>
          <input type="text" placeholder='DNI Empleado' onChange={handleChange} name="dniE"/>
        </div>

        <div>
          <input type="email" placeholder='email Empleado' onChange={handleChange}  name="emailE"/>
        </div>

        <div>
          <input type="text" placeholder='telefono Empleado' onChange={handleChange} name="telefonoE"/>
        </div>

        <div>
          <input type="text" placeholder='direccion Empleado' onChange={handleChange} name="domicilioE"/>
        </div>

        <Button type='submit'>Agregar</Button>                                                                          {/* traemos un boton desde react-bootstrap y le damos la propiedad submit para poder enviar el formulario de logueo */}
        

      </form>
      </div>
    </div>
  )
}

export default AgregarEmpleado;