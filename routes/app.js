const { Router } = require("express");
const router = Router();
const productos = [];

//Mostar Productos
router.get("/", (req, res) => {
    res.json(productos);
});

//Devuelve producto segun id
router.get("/:id", (req, res) => {
    const idProducto = req.params.id;
    let product;
    productos.forEach(e => {
        if (e.id == idProducto) {
            product = e;
            return
        }
    })
    res.json(product)
});

//Recibe y agrega un nuevo producto
router.post("/", (req, res) => {
    const { nombre, precio, imagen } = req.body;
    let id;
    if (productos.length == 0) {
        id = 1;
    } else {
        id = productos[productos.length - 1].id + 1;
    }
    let nuevoProducto = { id: id, nombre, precio, imagen };
    productos.push(nuevoProducto);
    res.json(productos);
});

//Actualiza un producto con dicho Id
router.put("/:id", (req, res) => {
    const { nombre, precio, imagen } = req.body;
    const idProducto = req.params.id;
    let product;

    productos.forEach(e => {
        if (e.id == idProducto) {
            e.nombre = nombre;
            e.precio = precio;
            e.imagen = imagen;
            product = e;
            return;
        }
    })
    res.send(`Se ha actualizado el producto con id: ${idProducto}`);
})

//Elimina el producto con dicho Id
router.delete("/:id", (req, res) => {
    const idProducto = req.params.id;
    let respuesta;
    productos.forEach(e => {
        if (e.id == idProducto) {
            let i = productos.indexOf(e);
            productos.splice(i, 1);
            respuesta = "Ha sido eliminado el producto"
            return;
        }
    })
    res.send(respuesta);
})

module.exports = router;