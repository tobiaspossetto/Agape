const producto = require('../models/Productos.js')

const ctrl = {};

//guardar productos POST
ctrl.guardarProductos = async (req, res) => {
    const {nombre, descripcion,img,stock} = req.body;
    const newProducto =  new producto({
        nombre,
        descripcion,
        img,
        stock
    })
    await newProducto.save()
    console.log(newProducto)
    res.send('entraste a edit y en  GET')
}


//pedir productos GET
ctrl.pedirProductos = async (req, res) => {
  const productos =  await producto.find()
  res.send(productos)
}


module.exports = ctrl;