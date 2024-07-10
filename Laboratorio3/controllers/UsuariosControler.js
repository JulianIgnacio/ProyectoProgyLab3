const {conection} = require("../config/DB")
const {axios} = require("axios")


const allUsers = (req,res) =>{
    const query = `select * from Usuarios where disponibleU = 1`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
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

        // Comparar la contraseña en texto plano (no recomendado)
        if (contraseña === usuario.contraseña) {
            res.status(200).json({ message: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).json({ message: 'Usuario o contraseña erroneo' });
        }
    });
}

module.exports = {allUsers,login}