const modalContenedor = document.querySelector (`modal_Container`); //Tengo que crear un estilo CSS con ese nombre

const abrirCarrito = document.getElementById(`openCart`); //Hago referencia al Id del carrito en la página index.html Con eso se dispara el evento para abrir el modal

const cerrarCarrito = document.getElementById(`closeCart`);

const modalCarrito = document.querySelector(`.modal`); //Crar una clase para el modal en el index.html

abrirCarrito.addEventListener(`click`, ()=> {
    modalContenedor.classList.toggle(`modal_Active`) //Acá lo que estamos haciendo es que se agregue una nueva clase a modalContenedor siempre que se haga click. Eso es para que el modal se vea únicamente al hacer click, y no que se vea siempre. El "toggle" funciona como un switch, es decir agrega algo si no está y lo quita si es que ya estuviera. Así es como hacemos una ventana emergente.
})

cerrarCarrito.addEventListener(`click`, ()=> {
    modalContenedor.classList.remove(`modal_Active`)
})

modalContenedor.addEventListener(`click`, ()=>{
    cerrarCarrito.click()
} )