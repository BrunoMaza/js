function obtenerPrecioDeArticulos(articulo) {
    switch (articulo) {
        case "1":
            console.log("Ingreso 1")
            return "El Art. 60500 vale $5000"
        case "2":
            console.log("Ingreso 2")
            return "El Art. 60710 vale $6000"
        case "3":
            console.log("Ingreso 3")
            return "El Art. 70500 vale $7000"
        default:
            console.log("Ingreso " + articulo)
            return "El número de artículo ingresado es incorrecto"
    }
}

let respuesta

while (true) {
    inputUsuario = prompt("Ingrese el numero del articulo para saber su precio: \n1: Art. 60500\n2: Art. 60710\n3: Art.70500\nPara cancelar ingrese: 0")

    if (inputUsuario === "0") {

        break
    }

    alert(obtenerPrecioDeArticulos(inputUsuario.toLowerCase()))
}