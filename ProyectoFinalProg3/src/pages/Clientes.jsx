import { Table } from "react-bootstrap"; // importamos la tabla que traemos desde react-bootrstrap
import { FaTrashAlt } from "react-icons/fa"; // en las lineas 3 y 4 importamos los iconos que utilizamos en los botones para editar y eliminar desde react-icons
import { MdEdit } from "react-icons/md";
import HeaderMain from "../components/HeaderMain"; // importamos el componente Header para el encabezado de la pagina
import Footer from "../components/footer"; // importamos el componente Footer para el pie de pagina
import { Link } from "react-router-dom"; // importamos Link para poder usar Link como boton y asi poder navegar por las rutas
import "../css/Tabla.css";
import { URL_CLIENTES } from "../constants/constantes";
import Carrusel from "../components/Carousel";
import { useState,useEffect } from "react";
import axios from "axios";

const Clientes = () => {
  const [datos, setDatos] = useState([]);

  const getDatos = async () => {
    let response = await axios.get(URL_CLIENTES);
    console.log(response.data);
    setDatos(response.data)
  };
  const handleEliminarCliente = async (idCliente) =>{
    let response = await axios.delete(`http://localhost:8000/Clientes/BorrarClientes/${idCliente}`)
    if(response) {
        alert("Cliente Eliminado")
        getDatos()
    }
  }

  useEffect(() => {
    getDatos();
  }, []);

  return (
    <div>
      <HeaderMain /> {/* llamamos al componente Header */}
      <Carrusel />
      <br />
      <br />
      <div className="btn-toolbar d-flex justify-content-center">
        <div className="btn-group me-2 item-align-center">
          {" "}
          {/* con una clase de bootstrap creamos un grupo de botenes (Link) para navegar entre las diferentes tablas */}
          <Link to="/productos" className="btn btn-primary">
            Productos
          </Link>
          <Link to="/clientes" className="btn btn-primary">
            Clientes
          </Link>
          <Link to="/ventas" className="btn btn-primary">
            Ventas
          </Link>
          <Link to="/detalle" className="btn btn-primary">
            Detalle de Ventas
          </Link>
          <Link to="/empleado" className="btn btn-primary">
            Empleados
          </Link>
          <Link to="/usuario" className="btn btn-primary">
            Usuario
          </Link>
        </div>
      </div>
      <br />
      <br />
      <h3 className="ml-4">Lista de Clientes</h3>{" "}
      {/* titulo para ubicar en que tabla nos encontramos */}
      <br />
      <div className="p-5">
        <Link to="/clientes/agregar" className="btn btn-success float-right">
          Agregar
        </Link>{" "}
        {/* boton (link) que nos envia a la pagina para agregar en la tabla  */}
      </div>
      <br />
      <div className="tabla">
        {" "}
        {/* tabla traida desde react-bootstrap para mostrar los elementos de la base de datos */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Apellido y Nombre</th>
              <th>DNI</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Domicilio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((datos) => <tr key={datos.idCliente}>
              <td>{datos.idCliente}</td>
                <td>{datos.apynomCliente}</td>
                <td>{datos.dniC}</td>
                <td>{datos.emailC}</td>
                <td>{datos.telefonoC}</td>
                <td>{datos.domicilioC}</td>
                <td>
                  <Link to={`/clientes/editar/${datos.idCliente}`} className="btn btn-warning mr-3">
                    <MdEdit />
                  </Link>{" "}
                  {/* boton que nos envia a la pagina para editar un campo */}
                  <button className="btn btn-danger" onClick={()=>handleEliminarCliente(datos.idCliente)}>
                    <FaTrashAlt />
                  </button>
                </td>{" "}
                {/* boton para eliminar */}
              </tr>)}
          </tbody>
        </Table>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Clientes;
