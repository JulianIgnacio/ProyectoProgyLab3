import { Button } from "react-bootstrap"
import { useState } from "react"
import "../css/Agregar.css"
import axios from "axios"
import {useNavigate } from "react-router-dom"
import {URL_PRODUCTOS_AGREGAR} from "../constants/constantes"


const AgregarProducto = () => {

  const navigate= useNavigate()

  const estadoinicial = {
    nombreProd : "",
    precio: "",
    cantidad: "",
    categoria:"" ,
    descripcion:""
  }


  const [datosForm,setDatosForm]= useState()
  const handleSubmit = async(e)=> {
    e.preventDefault()
    let response = await axios.post(URL_PRODUCTOS_AGREGAR,{
      nombreProd : datosForm.nombreProd,
      precio: datosForm.precio,
      cantidad: datosForm.cantidad,
      categoria: datosForm.categoria,
      descripcion:datosForm.descripcion
    })
    if(response){
      alert("Se agrego Producto")
      navigate("/productos")
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
          <input type="text" placeholder='Nombre Producto'  onChange={handleChange}  name="nombreProd"/>                      
        </div>

        <div>
          <input type="text" placeholder='precio' onChange={handleChange} name="precio"/>
        </div>

        <div>
          <input type="text" placeholder='cantidad' onChange={handleChange}  name="cantidad"/>
        </div>

        <div>
          <input type="text" placeholder='categoria' onChange={handleChange} name="categoria"/>
        </div>

        <div>
          <input type="text" placeholder='descripcion' onChange={handleChange} name="descripcion"/>
        </div>

        <Button type='submit'>Agregar</Button>                                                                          {/* traemos un boton desde react-bootstrap y le damos la propiedad submit para poder enviar el formulario de logueo */}
        

      </form>
      </div>
    </div>
  )
}

export default AgregarProducto;