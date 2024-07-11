const {conection} = require("../config/DB")


const listarClientes = (req,res) => {
    const query = `select* from Clientes where disponibleC = 1`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}
const buscarClientes = (req,res)=> {

    const id = req.params.id
    const query = `select * from Clientes where idCliente='${id}'`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}

const agregarClientes = (req,res) => {
    const {apynomCliente,dniC,emailC,telefonoC,domicilioC} =req.body 

    const query = `insert into Clientes (apynomCliente,dniC,emailC,telefonoC,domicilioC) values ('${apynomCliente}','${dniC}','${emailC}','${telefonoC}','${domicilioC}')`

    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

const editarClientes = (req,res) => {

    const id= req.params.id
    const {apynomCliente,dniC,emailC,telefonoC,domicilioC} =req.body
    const query = `update Clientes set apynomCliente='${apynomCliente}' ,dniC='${dniC}' ,emailC='${emailC}' ,telefonoC='${telefonoC}' ,domicilioC='${domicilioC}' where idCliente='${id}'`
    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

const eliminarClientes = (req,res) => {
    const id= req.params.id
    const query= `update Clientes set disponibleC=0 where idCliente='${id}'`
    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

module.exports = {listarClientes,buscarClientes,agregarClientes,editarClientes,eliminarClientes}