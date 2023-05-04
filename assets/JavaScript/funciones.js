function search() {
    do {

        let searchKey = prompt("Por favor ingrese el nombre del producto que desea buscar: ");

        while ((searchKey != "") || (searchKey != "ESC")) {
            if (isNaN(searchKey) && (searchKey != null) && (searchKey != "")) {
                alert('Por favor ingresa únicamente las palabras del producto que buscas');
                break;
            } else {
                console.log(searching); //acá searching es el nombre de una función definida más abajo que recorre un array buscando la palabra clave searchKey
                continue;
            }
        }
    }
}

function searching(productos, searchKey) { //Está función emplea para la mejor busqueda posible el método "filter", y así devolver todos los objetos que coincidan con la palabra clave. Me parece un método más efectivo que usar un "FIND" para encontrar solo al primer objeto.
    return productos.filter(producto => {
        const filtrado = producto.nombre + " " + producto.categoria;
        return filtrado.toLowerCase().includes(searchKey.toLowerCase());
    })
}


function add_Product() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let categoria = prompt("Ingrese la categoría del producto:");
    let precio = prompt("Ingrese el precio del producto:");
    let nuevoProducto = new Producto(nombre, categoria, precio);
    Productos.push(nuevoProducto);
    console.log("El producto ha sido agregado correctamente.");
}


function delete_Product (){}

function replace_Product (){}
