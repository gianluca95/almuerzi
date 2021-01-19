const express = require("express")
const app = express()

app.get("*", (request, response) => {
    response.send({message: "Hola soy Gian"})
})

app.listen(3000, () => console.log("Nuestro servidor esta escuchando en el puerto 3000"))

// Verbos HTTP:
//      GET: listar -> /users/:id -> 200
//      POST: crear un recurso -> /users/ -> 201
//      PUT: reemplazar un recurso -> /users/:id -> 204
//      PATCH: actualizar un recurso -> /users/:id -> 204
//      DELETE: eliminar un recurso -> /users/:id -> 204

