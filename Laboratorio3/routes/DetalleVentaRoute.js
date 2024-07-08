const express = require("express")

const router = express.Router()

const {listarDetalleVentas,buscarDetalle,agregarDetalleVenta,editarDetalleVenta,eliminarDetalleVenta} = require("../controllers/DetalleVentaControler")

router.get("/DetalleVentas",listarDetalleVentas)
router.get("/DetalleVentas/:id",buscarDetalle)
router.post("/DetalleVentas/AgregarDetalleVenta",agregarDetalleVenta)
router.put("/DetalleVentas/EditarDetalleVenta/:id",editarDetalleVenta)
router.delete("/DetalleVentas/BorrarDetalleVenta/:id",eliminarDetalleVenta)

module.exports = router