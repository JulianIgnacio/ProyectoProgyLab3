import React from 'react'
import { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import "../css/Editar.css"
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { URL_PRODUCTOS, URL_PRODUCTOS_EDITAR } from '../constants/constantes'

const EditarProducto = () => {

  const {id} = useParams()

  const navigate= useNavigate()

  const estadoinicial = {
    nombreProd : "",
    precio: "",
    cantidad: "",
    categoria:"" ,
    descripcion:""
  }

  const [Producto, setProducto] = useState({})
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      let response = await axios.put(`${URL_PRODUCTOS_EDITAR}/${id}`,{
        nombreProd : Producto.nombreProd,
        precio: Producto.precio,
        cantidad: Producto.cantidad,
        categoria: Producto.categoria,
        descripcion:Producto.descripcion
      })
      if(response.status === 200 ){
        alert("Producto editado")
        navigate("/productos")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async() => {
    let response = await axios.get(`${URL_PRODUCTOS}/${id}`)
    if(response.status ===200){
      setProducto(response.data[0])
    }
  }

  const handleChange =(e)=>{
    setProducto({...Producto,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    
   <div>
      <div className='caja'>
        <div className='formularioE'>

          <form onSubmit={handleSubmit}>
            <h1>EDITAR PRODUCTO</h1>

            <div>
              <input type="text" placeholder='Nombre' value={Producto.nombreProd} onChange={handleChange} name="nombreProd" required />
            </div>

            <div>
              <input type="text" placeholder='Precio' value={Producto.precio} onChange={handleChange} name="precio" required />
            </div>

            <div>
              <input type="text" placeholder='Cantidad' value={Producto.cantidad} onChange={handleChange} name="cantidad" required />
            </div>

            <div>
              <input type="text" placeholder='Categoria' value={Producto.categoria} onChange={handleChange} name="categoria" required />
            </div>

            <div>
              <input type="text" placeholder='Descripcion' value={Producto.descripcion} onChange={handleChange} name="descripcion" required />
            </div>

            <Button className='btn-warning' type='submit'>Editar</Button>

          </form>

        </div>
        </div>
      </div>



   
  )
}

export default EditarProducto