import { Button } from "react-bootstrap"
import { useState } from "react"
import "../css/Agregar.css"
import axios from "axios"
import {useNavigate } from "react-router-dom"
import {URL_USUARIOS_AGREGAR} from "../constants/constantes"


const AgregarUsuario = () => {

  const navigate= useNavigate()

  const estadoinicial = {
    nombreUsuario: "",
    contraseña: "",
  }


  const [datosForm,setDatosForm]= useState()
  const handleSubmit = async(e)=> {
    e.preventDefault()
    let response = await axios.post(URL_USUARIOS_AGREGAR,{
        nombreUsuario: datosForm.nombreUsuario,
        contraseña: datosForm.contraseña
    })
    if(response){
      alert("Se agrego Usuario")
      navigate("/usuario")
    }
  }

  const handleChange =(e) =>{
    setDatosForm({...datosForm,[e.target.name]:e.target.value})
  }

  return (
    <div className="caja">
      <div className="formularioA">
        <form onSubmit={handleSubmit}>                                                                                   {/* creamos el formulario que contendra los campos para ingresar el usario y la contrasena */}

        <h1>Agregar Producto</h1>
      
        <div>
          <input type="text" placeholder='Nombre Usuario'  onChange={handleChange}  name="nombreUsuario"/>                      
        </div>

        <div>
          <input type="password" placeholder='Contraseña' onChange={handleChange} name="contraseña"/>
        </div>


        <Button type='submit'>Agregar</Button>                                                                          {/* traemos un boton desde react-bootstrap y le damos la propiedad submit para poder enviar el formulario de logueo */}
        

      </form>
      </div>
    </div>
  )
}

export default AgregarUsuario;