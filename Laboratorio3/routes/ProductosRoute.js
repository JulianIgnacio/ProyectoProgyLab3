const express = require("express")

const router = express.Router()

const {listarProductos,buscarProducto,agregarProducto,editarProducto,eliminarProducto} = require("../controllers/ProductosControler")

router.get("/Productos",listarProductos)
router.get("/Productos/:id",buscarProducto)
router.post("/Productos/AgregarProducto",agregarProducto)
router.put("/Productos/EditarProducto/:id",editarProducto)
router.delete("/Productos/BorrarProducto/:id",eliminarProducto)

module.exports =router