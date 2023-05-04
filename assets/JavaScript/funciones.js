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



function searching(productos, searchKey) {
    return productos.filter(producto => {
        const filtrado = producto.nombre + " " + producto.categoria;
        return filtrado.toLowerCase().includes(searchKey.toLowerCase());
    })
}


function add_Product( //FUNCION EN CONSTRUCCION. IGNORAR SU EVALUACIÓN DE MOMENTO
    let addOn = Productos.push();
) { }