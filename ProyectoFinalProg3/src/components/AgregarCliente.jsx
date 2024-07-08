import { Button } from "react-bootstrap"
import { useState } from "react"
import "../css/Agregar.css"
import axios from "axios"
import {useNavigate } from "react-router-dom"
import {URL_CLIENTES_AGREGAR} from "../constants/constantes"


const AgregarCliente = () => {

  const navigate= useNavigate()

  const estadoinicial = {
    apynomCliente : "",
    dniC: "",
    emailC: "",
    telefonoC:"" ,
    domicilioC:""
  }


  const [datosForm,setDatosForm]= useState()
  const handleSubmit = async(e)=> {
    e.preventDefault()
    let response = await axios.post(URL_CLIENTES_AGREGAR,{
      apynomCliente : datosForm.apynomCliente,
      dniC: datosForm.dniC,
      emailC: datosForm.emailC,
      telefonoC: datosForm.telefonoC,
      domicilioC:datosForm.domicilioC
    })
    if(response){
      alert("Se agrego Cliente")
      navigate("/clientes")
    }
  }

  const handleChange =(e) =>{
    setDatosForm({...datosForm,[e.target.name]:e.target.value})
  }

  return (
    <div className="caja">
      <div className="formularioA">
        <form onSubmit={handleSubmit}>                                                                                   {/* creamos el formulario que contendra los campos para ingresar el usario y la contrasena */}

        <h1>Agregar Cliente</h1>
      
        <div>
          <input type="text" placeholder='Apellido y nombre Cliente'  onChange={handleChange}  name="apynomCliente"/>                      
        </div>

        <div>
          <input type="text" placeholder='DNI Cliente' onChange={handleChange} name="dniC"/>
        </div>

        <div>
          <input type="email" placeholder='email Cliente' onChange={handleChange}  name="emailC"/>
        </div>

        <div>
          <input type="text" placeholder='telefono Cliente' onChange={handleChange} name="telefonoC"/>
        </div>

        <div>
          <input type="text" placeholder='direccion Cliente' onChange={handleChange} name="domicilioC"/>
        </div>

        <Button type='submit'>Agregar</Button>                                                                          {/* traemos un boton desde react-bootstrap y le damos la propiedad submit para poder enviar el formulario de logueo */}
        

      </form>
      </div>
    </div>
  )
}

export default AgregarCliente;