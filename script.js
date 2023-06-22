//array de objetos
let productos = [
  { id: 60500, nombre: "Lámpara de mesa Tortuga Art. 60500", categoria: "Lámparas de mesa", stock: 10, precio: 50000 },
  { id: 60203, nombre: "Lámpara de mesa Odín Art. 60203", categoria: "Lámparas de mesa", stock: 14, precio: 52000 },
  { id: 60710, nombre: "Lámpara de mesa Tortuga Art. 60710", categoria: "Lámparas de mesa", stock: 16, precio: 54000 },
  { id: 77710, nombre: "Lámpara de pie Tortuga Art. 77710", categoria: "Lámparas de pie", stock: 3, precio: 60000 },
  { id: 66000, nombre: "Lámpara de pie Odín Art. 66000", categoria: "Lámparas de pie", stock: 4, precio: 70000 },
  { id: 7820, nombre: "Lámpara de pie Pixar XL Art. 7820", categoria: "Lámparas de pie", stock: 5, precio: 80000 },
  { id: 30900, nombre: "Aplique de pared Dixon Art. 30900", categoria: "Apliques", stock: 10, precio: 35000 },
  { id: 3430, nombre: "Aplique de pared Dixon Art. 3460", categoria: "Apliques", stock: 11, precio: 40000 },
  { id: 3700, nombre: "Aplique de pared Dixon Art. 3700", categoria: "Apliques", stock: 12, precio: 45000 },
  { id: 1300, nombre: "Colgante de techo Dixon Art.1300", categoria: "Colgantes", stock: 7, precio: 25000 },
  { id: 1200, nombre: "Colgante de techo Dixon Art.1200", categoria: "Colgantes", stock: 5, precio: 23000 },
  { id: 1212, nombre: "Colgante de techo Dixon Art.1212", categoria: "Colgantes", stock: 10, precio: 23000 },
];


//variable mensaje
let mensaje = "Tienda - Luz inteiror SRL\n1 - Listado de productos\n2 - Agregar productos al carrito \n3 - Filtrar por categoría \n4 - Ordenar por precio \n5 - Ver carrito \n6 - Finalizar compra \n0 - Salir"

//variable opcion
let opcion

//array carrito6
let carrito = []


do {
  //Opción 1
  opcion = Number(prompt(mensaje))
  if (opcion === 1) {
    alert(listarProductosConStock(productos))

    //Opción 2 find
  } else if (opcion === 2) {
    let id = Number(prompt("Seleccione Art. del producto\n" + listar(productos)))
    let productoBuscado = productos.find(prod => prod.id === id)
    let posicionProductoEnCarrito = carrito.findIndex(prod => prod.id === productoBuscado.id)

    if (posicionProductoEnCarrito === -1) {
      carrito.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precioUnitario: productoBuscado.precio,
        unidades: 1,
        subtotal: productoBuscado.precio
      })
    } else {
      carrito[posicionProductoEnCarrito].unidades++
      carrito[posicionProductoEnCarrito].subtotal = carrito[posicionProductoEnCarrito].precioUnitario * carrito[posicionProductoEnCarrito].unidades

    }

    //Filter categorias
    console.log(carrito)
  } if (opcion === 3) {
    let categoria = prompt("Seleccione categoría")
    let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
    alert(listar(productosFiltrados))

    //Opcion 4
  } if (opcion === 4) {
    let tipoDeOrden = Number(prompt("Ingrese tipo de orden \n 1 - Menor a mayor precio \n 2 - Mayor a menor precio"))
    if (tipoDeOrden === 1) {
      ordenarPorPrecios("asc", productos)

    } else if (tipoDeOrden === 2) {
      ordenarPorPrecios("des", productos)

    } else (
      alert("Ingreso un valor incorrecto")
    )

    //Opción 5 
  } if (opcion === 5) {
    if (carrito.length > 0) {
      alert(listarCarrito(carrito))
    } else {
      alert(" Primero debe agregar productos al carrito")
    }
    //Oción6
  } if (opcion === 6) {
    if (carrito.length > 0) {
      alert(listarCarritoConTotal(carrito))
    } else {
      alert(" Primero debe agregar productos al carrito")
    }
  }

} while (opcion !== 0)

//Funcion ForEach
function listarProductosConStock(arrayAListar) {
  let listado = "Listado de productos:\n";
  arrayAListar.forEach(element => {
    listado += "Nombre: " + element.nombre + "\n";
    listado += "Precio: $" + element.precio + "\n";
    listado += "Stock: " + element.stock + "\n";
    listado += "------------------------\n";
  });
  return listado;
}

function listarCarritoConTotal(carrito) {
  let listado = "ID - Nombre - Unidades - Precio\n"
  let total = 0
  carrito.forEach(element => {
    listado = listado + element.id + " - " + element.nombre + " - Unidades:" + element.unidades + " - $" + element.precioUnitario + "\n"
    total += element.subtotal
  })
  return listado + "\n Precio Total: $" + total
}

function listar(arrayAListar) {
  let listado = "ID - Nombre \n"
  arrayAListar.forEach(element => {
    listado = listado + element.id + " - " + element.nombre + "\n"
  })
  return listado
}

function listarCarrito(arrayAListar) {
  let listado = "ID - Nombre - Unidades\n"
  arrayAListar.forEach(element => {
    listado = listado + element.id + " - " + element.nombre + " - Unidades:" + element.unidades + "\n"
  })
  return listado
}

function listarConPrecio(arrayAListar) {
  let listado = "Precio - Nombre\n"
  arrayAListar.forEach(element => {
    listado = listado + "$" + element.precio + " - " + element.nombre + "\n"
  })
  return listado
}

function ordenarPorPrecios(tipoDeOrden, arrayAOrdenar) {
  if (tipoDeOrden === "asc") {
    arrayAOrdenar.sort((x, y) => x.precio - y.precio)
    alert(listarConPrecio(arrayAOrdenar))
  } else if (tipoDeOrden === "des") {
    arrayAOrdenar.sort((x, y) => y.precio - x.precio)
    alert(listarConPrecio(arrayAOrdenar))
  }
}


















