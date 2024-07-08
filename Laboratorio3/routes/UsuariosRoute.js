const express = require("express")

const router = express.Router()

const {allUsers,login} = require("../controllers/UsuariosControler")

//peticiones http

router.get("/Usuarios",allUsers)
router.post("/Usuarios/login",login)

module.exports = router