const express = require("express")

const router = express.Router()

const {listarEmpleados,buscarEmpleado,agregarEmpleado,editarEmpleado,eliminarEmpleado} = require("../controllers/EmpleadosControler")

router.get("/Empleados",listarEmpleados)
router.get("/Empleados/:id",buscarEmpleado)
router.post("/Empleados/AgregarEmpleado",agregarEmpleado)
router.put("/Empleados/EditarEmpleado/:id",editarEmpleado)
router.delete("/Empleados/BorrarEmpleado/:id",eliminarEmpleado)

module.exports =router
