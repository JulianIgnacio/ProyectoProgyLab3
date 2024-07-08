import { BrowserRouter , Routes, Route } from "react-router-dom"
import DetalleDeVenta from "./pages/DetalleDeVenta"                                  // importamos el componente DetalleDeVenta
import Productos from "./pages/Productos"                                            // importamos el componente Producto
import Clientes from "./pages/Clientes"                                              // importamos el componente Clientes
import Empleado from "./pages/Empleado"                                              // importamos el componente Empleado
import Usuario from "./pages/Usuario"                                                // importamos el componente Usuario
import Ventas from "./pages/Ventas"                                                  // importamos el componente Ventas
import Login from "./pages/login"                                                    // importamos el componente Login
import AgregarVentas from "./components/AgregarVentas"                                                // importamos el componente Agregar
import EditarVentas from "./components/EditarVentas"     
import Error from "./pages/Error"
import Home from "./pages/home"
import CardDetalle from "./components/CardDetalle"
import AgregarProducto from "./components/AgregarProducto"
import AgregarCliente from "./components/AgregarCliente"
import AgregarEmpleado from "./components/AgregarEmpleado"
import AgregarDetalleVenta from "./components/AgregarDetalleVenta"
import EditarCliente from "./components/EditarCliente"
import EditarProducto from "./components/EditarProducto"
import EditarEmpleado from "./components/EditarEmpleado"
import EditarDetalleVenta from "./components/EditarDetalleVenta"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>                                 {/* en este caso la pagina Login actuara como la raiz de nuestra pagina */}  
      <Route path="/Home" element={<Home/>}></Route>
      <Route path='/detalle' element={<DetalleDeVenta/>}></Route>                 {/* una vez loguado el usuario si los datos ingresados son correctos navegara a la pagina Detalle de venta */}
      <Route path='/detalle/agregar' element={<AgregarDetalleVenta/>}></Route>
      <Route path='/detalle/editar/:id' element={<EditarDetalleVenta/>}></Route>                 
      <Route path='/productos' element={<Productos/>}></Route>                    {/* desde aqui con las ruutas restantes podra navegar por todas opciones del grupo de botones que se muestra en la parte superior de la interfaz */}
      <Route path='/productos/agregar' element={<AgregarProducto/>}></Route> 
      <Route path='/productos/editar/:id' element={<EditarProducto/>}></Route> 
      <Route path='/clientes' element={<Clientes/>}></Route>
      <Route path='/clientes/agregar' element={<AgregarCliente/>}></Route>
      <Route path='/clientes/editar/:id' element={<EditarCliente/>}></Route>
      <Route path='/empleado' element={<Empleado/>}></Route>
      <Route path='/empleado/agregar' element={<AgregarEmpleado/>}></Route>
      <Route path='/empleado/editar/:id' element={<EditarEmpleado/>}></Route>
      <Route path='/usuario' element={<Usuario/>}></Route>
      <Route path='/ventas' element={<Ventas/>}></Route>
      <Route path='/ventas/agregar' element={<AgregarVentas/>}></Route>                        {/* rutas con las que podra navegar con los botones editar y agregar de la tabla */}          
      <Route path='/ventas/editar/:id' element={<EditarVentas/>}></Route>
      <Route path='/detalle/card' element={<CardDetalle/>}></Route>
      <Route path={'*'} element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
