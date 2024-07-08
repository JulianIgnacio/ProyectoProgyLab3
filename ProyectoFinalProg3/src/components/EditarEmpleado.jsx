import React from 'react'
import { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import "../css/Editar.css"
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { URL_EMPLEADOS, URL_EMPLEADOS_EDITAR } from '../constants/constantes'

const EditarEmpleado = () => {

  const {id} = useParams()

  const navigate= useNavigate()

  const estadoinicial = {
    nombreEmpleado : "",
    dniE: "",
    emailE: "",
    telefonoE:"" ,
    domicilioE:""
  }

  const [Empleado, setEmpleado] = useState({})
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      let response = await axios.put(`${URL_EMPLEADOS_EDITAR}/${id}`,{
        nombreEmpleado : Empleado.nombreEmpleado,
        dniE: Empleado.dniE,
        emailE: Empleado.emailE,
        telefonoE: Empleado.telefonoE,
        domicilioE: Empleado.domicilioE
      })
      if(response.status === 200 ){
        alert("Empleado editado")
        navigate("/empleado")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async() => {
    let response = await axios.get(`${URL_EMPLEADOS}/${id}`)
    if(response.status ===200){
      setEmpleado(response.data[0])
    }
  }

  const handleChange =(e)=>{
    setEmpleado({...Empleado,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>

      <div className='caja'>
        <div className='formularioE'>

          <form onSubmit={handleSubmit}>
            <h1>EDITAR EMPLEADO</h1>

            <div>
              <input type="text" placeholder='Apellido y Nombre' value={Empleado.nombreEmpleado} onChange={handleChange} name="nombreEmpleado" required />
            </div>

            <div>
              <input type="text" placeholder='DNI' value={Empleado.dniE} onChange={handleChange} name="dniE" required />
            </div>

            <div>
              <input type="email" placeholder='E-mail' value={Empleado.emailE} onChange={handleChange} name="emailE" required />
            </div>

            <div>
              <input type="text" placeholder='Domicilio' value={Empleado.domicilioE} onChange={handleChange} name="domicilioE" required />
            </div>

            <div>
              <input type="text" placeholder='telefono' value={Empleado.telefonoE} onChange={handleChange} name="telefonoE" required />
            </div>


            <Button className='btn-warning' type='submit'>Editar</Button>

          </form>

        </div>
        </div>
      </div>
  )
}

export default EditarEmpleado