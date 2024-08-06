const {conection} = require("../config/DB")


const listarDetalleVentas = (req,res) => {
    const query = `
    select 
    DetalleVenta.idDetalle,
    Ventas.idVenta,
    Productos.nombreProd,
    DetalleVenta.cantidad,
    DetalleVenta.precioUni
    from DetalleVenta 
    join Ventas on DetalleVenta.idVenta = Ventas.idVenta
    join Productos on DetalleVenta.idProducto = Productos.idProducto
    where disponibleDV=1`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}

const buscarDetalle = (req,res)=> {

    const id = req.params.id
    const query = `select * from DetalleVenta where idDetalle='${id}'`
    conection.query(query,(err,results)=>{
        if (err) throw err;
        res.json(results)
    })
}

const agregarDetalleVenta = (req,res) => {
    const {idVenta,idProducto,cantidad,precioUni} =req.body 

    const query = `insert into DetalleVenta (idVenta,idProducto,cantidad,precioUni) values ('${idVenta}','${idProducto}','${cantidad}','${precioUni}')`

    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

const editarDetalleVenta = (req,res) => {

    const id= req.params.id
    const {idVenta,idProducto,cantidad,precioUni} =req.body
    const query = `update DetalleVenta set idVenta='${idVenta}' ,idProducto='${idProducto}' ,cantidad='${cantidad}' ,precioUni='${precioUni}' where idDetalle='${id}'`
    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

const eliminarDetalleVenta = (req,res) => {
    const id= req.params.id
    const query= `update DetalleVenta set disponibleDV = 0 where idDetalle='${id}'`
    conection.query(query,(err,results)=> {
        if (err) throw err
        res.send(results)
    })
}

module.exports = {listarDetalleVentas,buscarDetalle,agregarDetalleVenta,editarDetalleVenta,eliminarDetalleVenta}