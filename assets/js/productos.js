import {
    stock_Cosmetica
} from "./stock.js"
import {carrito} from "./carrito.js"

const mostrarProductos = (cosmetica) => { //cosmetica es una variable local
    const contenedorProductos = document.querySelector(#main);

    cosmetica.forEach(producto => { //acá hacemos una iteración del array
        const div = document.createElement("div"); //por cada iteración vamos a crear un nuevo div contenedor 
        div.classList.add("cards_products_container"); //acá agragamos el estilo al div contenedor
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
                        </div>`

    contenedorProductos.appendChild(div); //acá incorporamos a la const div de la linea 9 como un nodo hijo a ser incorporado

    const boton = document.querySelector(`${stock_Cosmetica.id}`)
    boton.addEventListener("click", ()=>{
        carrito(stock_Cosmetica.id)
        alert("Se agrego ${stock_Cosmetica.cantidad} de ${stock_Cosmetica.nombre}")
    })
    });
}

mostrarProductos(cosmetica)