import { Table } from "react-bootstrap"; // importamos la tabla que traemos desde react-bootrstrap
import { FaEye, FaTrashAlt } from "react-icons/fa"; // en las lineas 3 y 4 importamos los iconos que utilizamos en los botones para editar y eliminar desde react-icons
import { MdEdit } from "react-icons/md";
import HeaderMain from "../components/HeaderMain"; // importamos el componente Header para el encabezado de la pagina
import Footer from "../components/footer"; // importamos el componente Footer para el pie de pagina
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Carrusel from "../components/Carousel"; // importamos Link para poder usar Link como boton y asi poder navegar por las rutas
import "../css/Tabla.css";
import axios from "axios";
import { URL_DETALLEVENTAS } from "../constants/constantes";

const DetalleDeVenta = () => {
  const [datos, setDatos] = useState([]);

  const getDatos = async () => {
    let response = await axios.get(URL_DETALLEVENTAS);
    console.log(response.data);
    setDatos(response.data);
  };

  const handleEliminarDetalle = async (idDetalle) => {
    let response = await axios.delete(
      `http://localhost:8000/DetalleVentas/BorrarDetalleVenta/${idDetalle}`
    );
    if (response) {
      alert("Detalle Venta Eliminado");
      getDatos();
    }
  };

  useEffect(() => {
    getDatos();
  }, []);
  return (
    <div>
      <HeaderMain />
      <Carrusel /> {/* llamamos al componente Header */}
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
          <button type="button" className="btn btn-primary">
            Detalle de Ventas
          </button>
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
      <h3 className="ml-4">Detalle de Ventas</h3>
      <br />
      <div className="p-5">
        <Link to="/detalle/agregar" className="btn btn-success float-right">
          Agregar
        </Link>
      </div>
      <br />
      <div className="tabla">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th># de Venta</th>
              <th># Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((datos) => (
              <tr key={datos.idDetalle}>
                <td>{datos.idDetalle}</td>
                <td>{datos.idVenta}</td>
                <td>{datos.nombreProd}</td>
                <td>{datos.cantidad}</td>
                <td>{datos.precioUni}</td>
                <td>
                  <Link
                    to={`/detalle/factura/${datos.idDetalle}`}
                    className="btn btn-primary"
                  >
                    <FaEye />
                  </Link>
                  <Link
                    to={`/detalle/editar/${datos.idDetalle}`}
                    className="btn btn-warning mr-3 ms-1"
                  >
                    <MdEdit />
                  </Link>{" "}
                  {/* boton que nos envia a la pagina para editar un campo */}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleEliminarDetalle(datos.idDetalle)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>{" "}
                {/* boton para eliminar */}
              </tr>
            ))}
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

export default DetalleDeVenta;
