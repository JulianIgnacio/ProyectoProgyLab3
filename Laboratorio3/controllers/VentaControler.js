const {conection} = require("../config/DB")


const listarVentas = (req,res) => {
    const query = `select* from Ventas where disponible = 1`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}
const buscarVenta = (req,res)=> {

    const id = req.params.id
    const query = `select * from Ventas where idVenta='${id}'`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}

const agregarVenta = (req,res) => {
    const {idEmpleado,idCliente,fechaVenta,totalVenta,metodoPago} =req.body 

    const query = `insert into Ventas (idEmpleado,idCliente,fechaVenta,totalVenta,metodoPago) values ('${idEmpleado}','${idCliente}','${fechaVenta}','${totalVenta}','${metodoPago}')`

    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

const editarVenta = (req,res) => {

    const id= req.params.id
    const {idEmpleado,idCliente,fechaVenta,totalVenta,metodoPago} =req.body
    const query = `update Ventas set idEmpleado='${idEmpleado}' ,idCliente='${idCliente}' ,fechaVenta='${fechaVenta}' ,totalVenta='${totalVenta}' ,metodoPago='${metodoPago}' where idVenta='${id}'`
    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

const eliminarVenta = (req,res) => {
    const id= req.params.id
    const query= `update Ventas set disponible=0 where idVenta='${id}'`
    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

module.exports = {listarVentas,buscarVenta,agregarVenta,editarVenta,eliminarVenta}