import React from 'react'
import { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import "../css/Editar.css"
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { URL_VENTAS, URL_VENTAS_EDITAR } from '../constants/constantes'


const EditarVenta = () => {

  const {id} = useParams()

  const navigate= useNavigate()

  const estadoinicial = {
    idEmpleado : "",
    idCliente: "",
    fechaVenta: "",
    totalVenta:"" ,
    metodoPago:""
  }

  const [Ventas, setVentas] = useState({})
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      let response = await axios.put(`${URL_VENTAS_EDITAR}/${id}`,{
        idEmpleado : Ventas.idEmpleado,
        idCliente: Ventas.idCliente,
        fechaVenta: Ventas.fechaVenta,
        totalVenta: Ventas.totalVenta,
        metodoPago: Ventas.metodoPago
      })
      if(response.status === 200 ){
        alert("Venta editada")
        navigate("/ventas")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async() => {
    let response = await axios.get(`${URL_VENTAS}/${id}`)
    if(response.status ===200){
      setVentas(response.data[0])
    }
  }

  const handleChange =(e)=>{
    setVentas({...Ventas,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div>

      <div className='caja'>
        <div className='formularioE'>

          <form onSubmit={handleSubmit}>
            <h1>EDITAR VENTA</h1>

            <div>
              <input type="text" placeholder='Empleado' value={Ventas.idEmpleado} onChange={handleChange} name="idEmpleado"required />
            </div>

            <div>
              <input type="text" placeholder='Cliente' value={Ventas.idCliente} onChange={handleChange} name="idCliente"required />
            </div>

            <div>
              <input type="text" placeholder='fecha' value={Ventas.fechaVenta} onChange={handleChange} name="fechaVenta"required />
            </div>

            <div>
              <input type="text" placeholder='Total' value={Ventas.totalVenta} onChange={handleChange} name="totalVenta"required />
            </div>

            <div>
              <input type="text" placeholder='Pago' value={Ventas.metodoPago} onChange={handleChange} name="metodoPago"required />
            </div>


            <Button className='btn-warning' type='submit'>Editar</Button>

          </form>

        </div>
        </div>
      </div>

    
  )
}

export default EditarVenta