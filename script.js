let productos = [
  { id: 60500, nombre: "Table lamp 1", categoria: "deportes", stock: 2, precio: 5000, rutaImagen: "Tortuga-Art-60500.jpg" },
  { id: 60203, nombre: "Table lamp 2", categoria: "indumentaria", stock: 7, precio: 2650, rutaImagen: "Odín-Art-60203.png" },
  { id: 60710, nombre: "Table lamp 3", categoria: "indumentaria", stock: 4, precio: 4500, rutaImagen: "Tortuga-Art-60710.jpg" },
  { id: 1200, nombre: "Pendant light 1", categoria: "deportes", stock: 1, precio: 2800, rutaImagen: "Dixon-Art-1200.jpg" },
  { id: 1212, nombre: "Pendant light 2", categoria: "indumentaria", stock: 3, precio: 7300, rutaImagen: "Odín-Art-1212.png" },
  { id: 1300, nombre: "Pendant light 3", categoria: "indumentaria", stock: 8, precio: 5600, rutaImagen: "Dixon-Art-1300.jpg" },
  { id: 77710, nombre: "floor lamp 1", categoria: "indumentaria", stock: 7, precio: 2650, rutaImagen: "Tortuga-Art-77710.jpg" },
  { id: 66000, nombre: "floor lamp 2", categoria: "indumentaria", stock: 7, precio: 2650, rutaImagen: "Odín-Art-66000.png" },
  { id: 66000, nombre: "floor lamp 3", categoria: "Lámparas de pie", stock: 7, precio: 50000, rutaImagen: "PixarXL-Art-7820.png" },
  { id: 77710, nombre: "Wall lamp 1", categoria: "indumentaria", stock: 7, precio: 2650, rutaImagen: "Dixon-Art-30900.jpg" },
  { id: 66000, nombre: "Wall lamp 2", categoria: "indumentaria", stock: 7, precio: 2650, rutaImagen: "Dixon-Art-30905.png" },
  { id: 66000, nombre: "Wall lamp 3", categoria: "Lámparas de pie", stock: 7, precio: 50000, rutaImagen: "Tortuga-Art-3460.png" },
]

productos.forEach(producto => {
  let mensaje = "Unidades " + producto.stock

  let tarjetaProducto = document.createElement("div")

  if (producto.stock < 5) {
    mensaje = "Últimas unidades"
    tarjetaProducto.classList.add("ultimasUnidades")
  }
  tarjetaProducto.classList.add("tarjetaProducto")
  // tarjetaProducto.innerHTML = "<h2>" + producto.nombre + "</h2>" + "<div></div>" + "<p>" + mensaje + "</p>"
  tarjetaProducto.innerHTML = `
    <h2>${producto.nombre}</h2>
    <div class=imagen style="background-image: url(./images/${producto.rutaImagen})"></div>
    <p>${mensaje}</p>
  `
  contenedor.appendChild(tarjetaProducto)
})
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















