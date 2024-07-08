import React from 'react'
import { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import "../css/Editar.css"
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { URL_CLIENTES, URL_CLIENTES_EDITAR } from '../constants/constantes'

const EditarClientes = () => {

  const {id} = useParams()

  const navigate= useNavigate()

  const estadoinicial = {
    apynomCliente : "",
    dniC: "",
    emailC: "",
    telefonoC:"" ,
    domicilioC:""
  }

  const [Clientes, setClientes] = useState({})
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      let response = await axios.put(`${URL_CLIENTES_EDITAR}/${id}`,{
        apynomCliente: Clientes.apynomCliente,
        dniC: Clientes.dniC,
        emailC: Clientes.emailC,
        telefonoC: Clientes.telefonoC,
        domicilioC: Clientes.domicilioC
      })
      if(response.status === 200 ){
        alert("Cliente editado")
        navigate("/clientes")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async() => {
    let response = await axios.get(`${URL_CLIENTES}/${id}`)
    if(response.status ===200){
      setClientes(response.data[0])
    }
  }

  const handleChange =(e)=>{
    setClientes({...Clientes,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div>

      <div className='caja'>
        <div className='formularioE'>

          <form onSubmit={handleSubmit}>
            <h1>EDITAR CLIENTE</h1>

            <div>
              <input type="text" placeholder='Apellido y Nombre' value={Clientes.apynomCliente} onChange={handleChange} name="apynomCliente" required />
            </div>

            <div>
              <input type="text" placeholder='DNI' value={Clientes.dniC} onChange={handleChange} name="dniC" required />
            </div>

            <div>
              <input type="email" placeholder='E-mail' value={Clientes.emailC} onChange={handleChange} name="emailC" required />
            </div>

            <div>
              <input type="text" placeholder='Domicilio' value={Clientes.domicilioC} onChange={handleChange} name="domicilioC" required />
            </div>

            <div>
              <input type="text" placeholder='telefono' value={Clientes.telefonoC} onChange={handleChange} name="telefonoC" required />
            </div>

            <Button className='btn-warning' type='submit'>Editar</Button>

          </form>

        </div>
        </div>
      </div>
  )
}

export default EditarClientes