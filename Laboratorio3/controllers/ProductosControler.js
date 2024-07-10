const {conection} = require("../config/DB")


const listarProductos = (req,res) => {
    const query = `select * from Productos where disponibleP = 1`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}

const buscarProducto = (req,res)=> {

    const id = req.params.id
    const query = `select * from Productos where idProducto='${id}'`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}

const agregarProducto = (req,res) => {
    const {nombreProd,precio,cantidad,categoria,descripcion} =req.body 

    const query = `insert into Productos (nombreProd,precio,cantidad,categoria,descripcion) values ('${nombreProd}','${precio}','${cantidad}','${categoria}','${descripcion}')`

    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

const editarProducto = (req,res) => {

    const id= req.params.id
    const {nombreProd,precio,cantidad,categoria,descripcion} =req.body
    const query = `update Productos set nombreProd='${nombreProd}' ,precio='${precio}' ,cantidad='${cantidad}' ,categoria='${categoria}' ,descripcion='${descripcion}' where idProducto='${id}'`
    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

const eliminarProducto = (req,res) => {
    const id= req.params.id
    const query= `update Productos set disponible=0 where idProducto='${id}'`
    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

module.exports = {listarProductos,buscarProducto,agregarProducto,editarProducto,eliminarProducto}