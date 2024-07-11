const express = require("express")

const router = express.Router()

const {allUsers,login,agregarUsuario,editarUsuario,eliminarUsuario} = require("../controllers/UsuariosControler")

//peticiones http

router.get("/Usuarios",allUsers)
router.post("/Usuarios/login",login)
router.post("/Usuarios/AgregarUsuario",agregarUsuario)
router.put("/Usuarios/EditarUsuario/:id",editarUsuario)
router.delete("/Usuarios/BorrarUsuario/:id",eliminarUsuario)

module.exports = router