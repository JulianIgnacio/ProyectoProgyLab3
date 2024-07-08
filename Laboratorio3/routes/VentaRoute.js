const express = require("express")

const router = express.Router()

const {listarVentas,buscarVenta,agregarVenta,editarVenta,eliminarVenta} = require("../controllers/VentaControler")

router.get("/Ventas",listarVentas)
router.get("/Ventas/:id",buscarVenta)
router.post("/Ventas/AgregarVentas",agregarVenta)
router.put("/Ventas/EditarVentas/:id",editarVenta)
router.delete("/Ventas/BorrarVentas/:id",eliminarVenta)

module.exports = router