import { Table } from "react-bootstrap"; // importamos la tabla que traemos desde react-bootrstrap
import { FaTrashAlt } from "react-icons/fa"; // en las lineas 3 y 4 importamos los iconos que utilizamos en los botones para editar y eliminar desde react-icons
import { MdEdit } from "react-icons/md";
import HeaderMain from "../components/HeaderMain"; // importamos el componente Header para el encabezado de la pagina
import Footer from "../components/footer"; // importamos el componente Footer para el pie de pagina
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Carrusel from "../components/Carousel"; // importamos Link para poder usar Link como boton y asi poder navegar por las rutas
import "../css/Tabla.css";
import axios from "axios";
import { URL_PRODUCTOS } from "../constants/constantes";

const Productos = () => {
  const [datos, setDatos] = useState([]);

  const getDatos = async () => {
    let response = await axios.get(URL_PRODUCTOS);
    console.log(response.data);
    setDatos(response.data)
  };

  const handleEliminarProducto = async (idProducto) =>{
    let response = await axios.delete('http://localhost:8000/Productos/BorrarProducto'+'/'+idProducto)
    if(response) {
        alert("Producto Eliminado")
        getDatos()
    }
  }

  useEffect(() => {
    getDatos();
  }, []);
  return (
    <div>
      <HeaderMain />
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
      <h3 className="ml-4">Lista de Productos</h3>
      <br />
      <div className="p-5">
        <Link to="/productos/agregar" className="btn btn-success float-right">
          Agregar
        </Link>
      </div>

      <br />
      <div className="tabla">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Categoria</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((datos) => <tr key={datos.idProducto}>
              <td>{datos.idProducto}</td>
                <td>{datos.nombreProd}</td>
                <td>{datos.precio}</td>
                <td>{datos.cantidad}</td>
                <td>{datos.categoria}</td>
                <td>{datos.descripcion}</td>
                <td>
                  <Link to={`/productos/editar/${datos.idProducto}`} className="btn btn-warning mr-3">
                    <MdEdit />
                  </Link>
                  <button className="btn btn-danger" onClick={()=>handleEliminarProducto(datos.idProducto)}>
                    <FaTrashAlt />
                  </button>
                </td>{" "}
                {/* boton que nos envia a la pagina para editar un campo */}
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

export default Productos;
