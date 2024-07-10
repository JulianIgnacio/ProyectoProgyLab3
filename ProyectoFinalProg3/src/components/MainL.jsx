import { useState } from "react"; // importamos estados
import { Button } from "react-bootstrap"; // traemos el boton de iniciar desde react-bootstrap
import { FaUser } from "react-icons/fa";
import { PiLockKeyFill } from "react-icons/pi"; // linea 4 y 5 traemos los iconos desde react-icons
import "../css/Login.css"; // importamos la carpeta de estilos para el login
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_LOGIN } from "../constants/constantes";

const MainL = () => {
  const [usuario, setUsuario] = useState(""); // creamos dos estados con useState para el usuario y contrasena

  const navigate = useNavigate();

  const estadoInicial = {
    nombreUsuario: "",
    contraseña: "",
  };

  const handleSubmit = async (e) => {
    // creamos la funcion handleSubmit para tomar los valores de los inputs del logueo

    e.preventDefault(); // utilizamos e.preventeDefault () para prevenir el comportamiento por defecto

    let response = await axios.post(URL_LOGIN, {
      nombreUsuario: usuario.nombreUsuario,
      contraseña: usuario.contraseña,
    });
    if (response) {
      navigate("/Home");
    } else {
      alert("usuario o contraseña incorrectos");
    }

    e.target.reset(); // para resetear los campos usuario y contrasena
  };

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  return (
    <div className="formulario">
      <br />
      <form onSubmit={handleSubmit}>
        {" "}
        {/* creamos el formulario que contendra los campos para ingresar el usario y la contrasena */}
        <h2>Inciar Sesión</h2>
        <div className="input-box">
          <input
            type="text"
            placeholder="Usuario"
            onChange={handleChange}
            name="nombreUsuario"
          />{" "}
          {/* de este modo utilazamos el evento onChange para capturar los valores ingresados */}
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            name="contraseña"
          />
          <PiLockKeyFill className="icon" />
        </div>
        <div className="recordar-olvido">
          <label htmlFor="">
            <input type="checkbox" />
            Recordar
          </label>
          <a href="#">Olvidó su contraseña?</a>
        </div>
        <Button type="submit">Iniciar</Button>{" "}
        {/* traemos un boton desde react-bootstrap y le damos la propiedad submit para poder enviar el formulario de logueo */}
      </form>
    </div>
  );
};

export default MainL;
