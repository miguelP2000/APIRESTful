const express = require('express');
const app = express();
const puerto = 8080;
const rutas = require("./routes/app");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", rutas);
app.use("/html", express.static(__dirname + "/html/index.html"));



app.listen(puerto, err => {
    if (err) {
        console.log(`Hubo un error al inciar el servidor ${err}`)
    } else {
        console.log(`Servidor escuchando el puerto: ${puerto}`)
    }
});