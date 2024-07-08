import React from 'react'
import { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import "../css/Editar.css"
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { URL_DETALLEVENTAS, URL_DETALLEVENTAS_EDITAR } from '../constants/constantes'

const EditarDetalle = () => {

  const {id} = useParams()

  const navigate= useNavigate()

  const estadoinicial = {
    idVenta : "",
    idProducto: "",
    cantidad: "",
    precioUni:"" 
  }

  const [DetalleVenta, setDetalleVenta] = useState({})
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      let response = await axios.put(`${URL_DETALLEVENTAS_EDITAR}/${id}`,{
        idVenta : DetalleVenta.idVenta,
        idProducto: DetalleVenta.idProducto,
        cantidad: DetalleVenta.cantidad,
        precioUni: DetalleVenta.precioUni
      })
      if(response.status === 200 ){
        alert("Detalle Venta editado")
        navigate("/detalle")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async() => {
    let response = await axios.get(`${URL_DETALLEVENTAS}/${id}`)
    if(response.status ===200){
      setDetalleVenta(response.data[0])
    }
  }

  const handleChange =(e)=>{
    setDetalleVenta({...DetalleVenta,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>

      <div className='caja'>
        <div className='formularioE'>

          <form onSubmit={handleSubmit}>
            <h1>EDITAR DETALLE DE VENTA</h1>

            <div>
              <input type="text" placeholder='# de Venta' value={DetalleVenta.idVenta} onChange={handleChange} name="idVenta" required />
            </div>

            <div>
              <input type="text" placeholder='# Producto' value={DetalleVenta.idProducto} onChange={handleChange} name="idProducto"  required />
            </div>

            <div>
              <input type="text" placeholder='Cantidad' value={DetalleVenta.cantidad} onChange={handleChange} name="cantidad" required />
            </div>

            <div>
              <input type="text" placeholder='Precio Unitario' value={DetalleVenta.precioUni} onChange={handleChange} name="precioUni" required />
            </div>

            
            <Button className='btn-warning' type='submit'>Editar</Button>

          </form>

        </div>
        </div>
      </div>
  )
}

export default EditarDetalle