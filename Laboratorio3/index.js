const express = require("express")
const {conection} = require("./config/DB")
const cors= require("cors")

const Usuarios = require("./routes/UsuariosRoute")
const Empleados = require("./routes/EmpleadosRoute")
const Clientes = require("./routes/ClientesRoute")
const Productos = require("./routes/ProductosRoute")
const Venta = require("./routes/VentaRoute")
const DetalleVenta = require("./routes/DetalleVentaRoute")

const app = express();



const port = 8000;

app.use(express.json())
app.use(cors())

app.use("/",Usuarios)
app.use("/",Empleados)
app.use("/",Clientes)
app.use("/",Productos)
app.use("/",Venta)
app.use("/",DetalleVenta)


app.get("/",(req,res)=>{
    console.log("Bienvenido");
    res.send({message:"Welcome to my API"})
})

conection.connect(()=>{
    console.log("conectado a mi DB");
})

app.listen(port,()=> {
    console.log("Escuchando en el puerto "+port);
})
