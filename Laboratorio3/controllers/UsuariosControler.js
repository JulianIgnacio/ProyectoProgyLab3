const {conection} = require("../config/DB")


const allUsers = (req,res) =>{
    const query = `select * from Usuarios where disponibleU = 1`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}

const login = (req,res) => {

    const nombreUsuario = req.params.nombreUsuario
    const contraseña = req.body.contraseña

    const query = `select * from Usuarios where nombreUsuario = '${nombreUsuario}' and contraseña='${contraseña}'`
    conection.query(query,(err,results)=>{

        if(err) throw err;
        res.status(200).json({message:"inicio de sesion exitoso"})
    })
}

module.exports = {allUsers,login}