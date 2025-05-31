document.addEventListener('DOMContentLoaded', () => {
    const carrito = [];
    const listaProductos = document.querySelector('#lista-1');
    const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    const imgCarrito = document.querySelector('#img-carrito');
    const divCarrito = document.querySelector('#carrito');

    // Mostrar/Ocultar carrito al hacer clic en el ícono
    imgCarrito.addEventListener('click', () => {
        divCarrito.style.display = divCarrito.style.display === 'block' ? 'none' : 'block';
    });

    // Agregar producto
    listaProductos.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const producto = e.target.closest('.golosinas');
            const infoProducto = {
                imagen: producto.querySelector('img').src,
                nombre: producto.querySelector('h3').textContent,
                precio: producto.querySelector('.precio').textContent,
                id: e.target.getAttribute('data-id')
            };

            carrito.push(infoProducto);
            actualizarCarrito();
        }
    });

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        carrito.length = 0;
        actualizarCarrito();
    });

    // Mostrar productos en el carrito
    function actualizarCarrito() {
        contenedorCarrito.innerHTML = '';
        carrito.forEach(producto => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${producto.imagen}" width="50"></td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
            `;
            contenedorCarrito.appendChild(row);
        });
    }
});

