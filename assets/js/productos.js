import {
    stock_Cosmetica
} from "./stock.js"
import {carritoFinal} from "./carrito.js"

const mostrarProductos = (cosmetica) => { //1) cosmetica es una variable local de mostrarProductos que pasamos como parámetro. mostrarProductos es nuestro contenedor donde vamos a maquetar nuestros productos que tenemos almacenados en la hoja stock.
    const contenedorProductos = document.querySelector(`main`); //2) Esta variable lo que hace es maquetar nuestros productos

    cosmetica.forEach(producto => { //3) acá hacemos una iteración del array recorriendo cada elemento del array.
        const div = document.createElement("div"); //por cada iteración vamos a crear un nuevo div contenedor, es la tarjeta o ficha contenedora.
        div.classList.add("cards_products_container"); //acá agragamos el estilo al div contenedor usando DOM.
        div.innerHTML += `<div class="description"> 
                                <p class="title"> ${stock_Cosmetica.nombre} </p>
                                <p class="descript"> ${stock_Cosmetica.desc}</p>
                                <p class="price"> Precio: $ ${stock_Cosmetica.precio}.- </p>
                                <div class="buttons_container">
                                    <ul>
                                        <button class="amount_items less">-</button>
                                        <input type="text" size="1" readonly="true" value="1" class="amount_items amount">
                                        <button class="amount_items more">+</button>
                                    </ul>
                                    <button class="add_cart" id=${stock_Cosmetica.id}>Agregar al carro</button>
                                </div>
                                <div class="image_product">
                                    <img src="${stock_Cosmetica.img}" alt="${stock_Cosmetica.nombre}"}
                                class="img-fluid imageProduct">
                                </div>
                        </div>` // partir de aca, estamos dando contenido a la tarjeta contenedora del producto. (AGREGAR FUNCIONALIDAD A LOS BOTENES DE LAS LINEAS 17 A 20). 

    contenedorProductos.appendChild(div); //acá incorporamos a la const div de la linea 9 (que es nuestra tarjeta contenedora) como un nodo hijo a ser incorporado. Nuestro nodo hijo va ser toda la tarjeta que se genera a partir de la linea 12 con el innerHTML.

    const boton = document.querySelector(`${stock_Cosmetica.id}`) //Le estamos pasando el mismo id de la linea 22.
    boton.addEventListener("click", ()=>{ //acá va el conjuntos de instrucciones que va a ejecutar al escuchar un evento "click". Se lo pasamos por medio de una función.
        carritoFinal(stock_Cosmetica.id) //carritoFinal hace referencia a la página "carrito.js"
        alert("Se agrego ${stock_Cosmetica.cantidad} de ${stock_Cosmetica.nombre}") //acá lee la cantidad y el nombre que están guardados en el objeto disponible en la pagina "stock" de JS y lo imprime por pantalla al hacer click al agregar al carrito.
    })
    });
}

mostrarProductos(cosmetica)