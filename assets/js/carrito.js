import {
    stock_Cosmetica
} from "./stock.js"

var carritoFinal = []; //este es nuestra variable contenedora de todos los carritos

export const carritoFinal = (productoId) => { //acá estamos pasando una función
    const contenedorCarrito = document.querySelector(`carrito_Container`) //A contenedorCarrito le vamos a ir pasando todos los productos que estamos al carrito final de compras. En esa constante se van a ir guardando esos productos.

    const renderProductoCarritoFinal = () => { //A partir de acá hacemos el renderizado del carrito por medio de una función. Y esto se va a ejecutar cuando hagamos click en el boton "agregar al carro" de la página "productos".-
        var producto = stock_Cosmetica.find(producto => stock_Cosmetica.id == productoId) //acá comparamos que productoId sea igual al comestica.id que le pasamos en lá página productos al hacer "click"
        carritoFinal.push(producto) //acá pusheamos el producto almacenado en la var "producto" de la linea 11.

        producto.cantidad = 1 //hacer un condicional en donde si yo quiero agregar unidades de un producto que ya tengo cargado en el array (a través de su identificador ID) en lugar de agregar el producto entero otra vez le agrega directamente las unidades indicadas por el usuario el producto en cantidad.

        var div = document.createElement("div")
        div.classList.add(NOMBREDELACLASEDELPRODUCTOENELCARRITOFINAL)
        div.innerHTML = `<p>${stock_Cosmetica.nombre}</p>
                        <p> Precio: $ ${stock_Cosmetica.precio}</p>
                        <p> Cantidad: ${producto.cantidad}</p>
                        <button class="eliminar" id=${stock_Cosmetica.id}>Eliminar del carro</button> 
    ` 
    
    //hacer ACÁ el boton eliminar producto funcional, ver apuntes de clase. Es casi igual que el de l a linea 11 a 12, sin el push. Se hace con el método REMOVE o SLICE.

        contenedorCarrito.appendChild(div)

    }
    renderProductoCarritoFinal()

}