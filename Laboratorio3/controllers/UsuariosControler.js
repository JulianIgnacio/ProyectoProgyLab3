const {conection} = require("../config/DB")


const allUsers = (req,res) =>{
    const query = `select * from Usuarios where disponibleU = 1`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}
const agregarUsuario = (req,res) => {
    const {nombreUsuario,contraseña} = req.body

    const query = `insert into Usuarios (nombreUsuario,contraseña) values ('${nombreUsuario}','${contraseña}')`

    conection.query(query,(err,results)=>{
        if (err) throw err
        res.send(results)
    })
}
const editarUsuario = (req,res) => {
    const id = req.params
    const {nombreUsuario,contraseña} = req.body

    const query = `update Usuarios set nombreUsuario='${nombreUsuario}' ,contraseña='${contraseña}' where idUsuario='${id}'`
    conection.query(query,(err,results)=> {
        if(err) throw err,
        res.send(results)
    })
}
const eliminarUsuario = (req,res) => {
    const id = req.params
    const query = `update Usuarios set disponibleU =0 where idUsuario=${id}`
    conection.query(query,(err,results)=> {
        if(err) throw err,
        res.send(results)
    })
}
const login = async (req,res) => {

    const nombreUsuario = req.body.nombreUsuario;
    const contraseña = req.body.contraseña;

    const query = 'SELECT * FROM Usuarios WHERE nombreUsuario = ?';
    conection.query(query, [nombreUsuario], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Usuario o contraseña erroneo' });
        }

        const usuario = results[0];

        if (contraseña === usuario.contraseña) {
            res.status(200).json({ message: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).json({ message: 'Usuario o contraseña erroneo' });
        }
    });
}

module.exports = {allUsers,agregarUsuario,editarUsuario,eliminarUsuario,login}