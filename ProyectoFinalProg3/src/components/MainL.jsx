import { useState } from 'react'                                       // importamos estados
import { Button } from "react-bootstrap"                               // traemos el boton de iniciar desde react-bootstrap
import { FaUser } from "react-icons/fa";                               
import { PiLockKeyFill } from "react-icons/pi";                        // linea 4 y 5 traemos los iconos desde react-icons
import "../css/Login.css"                                          // importamos la carpeta de estilos para el login
import { useNavigate } from 'react-router-dom';
  

const MainL = () => {

  const [user, setUser] = useState("")                                 // creamos dos estados con useState para el usuario y contrasena 
  const [password, setPassword] = useState("")

  const navigate = useNavigate() 



  const handleSubmit = (e) => {                                       // creamos la funcion handleSubmit para tomar los valores de los inputs del logueo

    e.preventDefault()                                                // utilizamos e.preventeDefault () para prevenir el comportamiento por defecto


    if (user === "empleado" && password === "12345") {                    // condicion para el logueo
      
      navigate("/Home")
    } else {
      alert("usuario o contraseña incorrectos")
    }

    e.target.reset()                                                  // para resetear los campos usuario y contrasena 
    setUser("") 
    setPassword("")

  }


  return (
    <div className='formulario'>                                      
     
      <br />
      <form onSubmit={handleSubmit}>                                                                                   {/* creamos el formulario que contendra los campos para ingresar el usario y la contrasena */}
        <h2>Inciar Sesión</h2>
      
        <div className='input-box'>
          <input type="text" placeholder='Usuario' onChange={(e) => setUser(e.target.value)} />                        {/* de este modo utilazamos el evento onChange para capturar los valores ingresados */}
          <FaUser className='icon' />
        </div>

        <div className='input-box'>
          <input type="password" placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} />
          <PiLockKeyFill className='icon'/>
        </div>

        <div className='recordar-olvido'>
          <label htmlFor=""><input type="checkbox" />Recordar</label>
          <a href="#">Olvidó su contraseña?</a>
        </div>

        <Button type='submit'>Iniciar</Button>                                                                          {/* traemos un boton desde react-bootstrap y le damos la propiedad submit para poder enviar el formulario de logueo */}
        

      </form>



    </div>
  )
}

export default MainL