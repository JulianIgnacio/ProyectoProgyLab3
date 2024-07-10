const {conection} = require("../config/DB")


const listarEmpleados = (req,res) => {
    const query = `select* from Empleados where disponibleE = 1`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}
const buscarEmpleado = (req,res)=> {

    const id = req.params.id
    const query = `select * from Empleados where idEmpleado='${id}'`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}

const agregarEmpleado = (req,res) => {
    const {nombreEmpleado,dniE,emailE,telefonoE,domicilioE} =req.body 

    const query = `insert into Empleados (nombreEmpleado,dniE,emailE,telefonoE,domicilioE) values ('${nombreEmpleado}','${dniE}','${emailE}','${telefonoE}','${domicilioE}')`

    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

const editarEmpleado = (req,res) => {

    const id= req.params.id
    const {nombreEmpleado,dniE,emailE,telefonoE,domicilioE} =req.body
    const query = `update Empleados set nombreEmpleado='${nombreEmpleado}' ,dniE='${dniE}' ,emailE='${emailE}' ,telefonoE='${telefonoE}' ,domicilioE='${domicilioE}' where idEmpleado='${id}'`
    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

const eliminarEmpleado = (req,res) => {
    const id= req.params.id
    const query= `update Empleados set disponible=0 where idEmpleado='${id}'`
    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

module.exports = {listarEmpleados,buscarEmpleado,agregarEmpleado,editarEmpleado,eliminarEmpleado}