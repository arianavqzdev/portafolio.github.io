// 1. Catálogo Fast Food
const productos = [
    {
        id: 5, nombre: "Cheeseburger Clásica", descripcion: "Medallón de 100g, doble cheddar, cebolla en brunoise, kétchup y mostaza en pan brioche.", precio: 6000, categoria: "burgers",
        imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6, nombre: "Veggie Trufada", descripcion: "Medallón de hongos portobello y quinoa, queso provolone, rúcula y mayonesa de trufa.", precio: 7200, categoria: "burgers",
        imagen: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 7, nombre: "Pizza Margherita", descripcion: "Masa de masa madre, auténtica salsa de tomate, mozzarella fior di latte y albahaca fresca.", precio: 8500, categoria: "pizzas",
        imagen: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 8, nombre: "Pizza Cuatro Quesos", descripcion: "Masa de masa madre, mozzarella, roquefort, provolone, parmesano y un hilo de aceite de oliva.", precio: 9500, categoria: "pizzas",
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 9, nombre: "Papas Rústicas Provenzal", descripcion: "Papas cortadas a mano con piel, salteadas con ajo fresco, perejil y acompañadas de alioli.", precio: 4000, categoria: "papas",
        imagen: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 10, nombre: "Nachos Supreme", descripcion: "Crujientes chips de maíz cubiertos con una lluvia de queso cheddar y mozzarella gratinados, carne braseada, tomate, cebolla morada y chiles frescos.", precio: 5800, categoria: "papas",
        imagen: "https://images.unsplash.com/photo-1640659828941-869eaeb2491e?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 11, nombre: "Limonada Menta y Jengibre", descripcion: "Limonada casera exprimida en el momento con hojas de menta fresca, jengibre y mucho hielo.", precio: 2800, categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 12, nombre: "Mojito", descripcion: "Trago súper refrescante preparado con ron blanco, jugo de lima, hojas de menta fresca, azúcar y un toque de soda. Bien helado.", precio: 4000, categoria: "bebidas",
        imagen: "https://plus.unsplash.com/premium_photo-1722194069219-16ec49c08625?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 13, nombre: "Cerveza Artesanal Honey", descripcion: "Pinta de cerveza Honey tirada. Rubia, suave, con un ligero toque dulce a miel.", precio: 3500, categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 14, nombre: "Gaseosa Línea Coca-Cola", descripcion: "Lata de 354ml de línea cola (Regular o Zero) bien helada.", precio: 1800, categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
    }
];

// 2. DOM Elements y Variables
const searchInput = document.getElementById('search-input');
const tabs = document.querySelectorAll('.pill-btn');
const menuContainer = document.getElementById('menu-container');
const titleCategory = document.getElementById('title-category');

const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

let categoriaActual = 'todos';
let busquedaActual = '';
let carrito = []; 

const nombresCategorias = {
    'todos': 'Menú Completo',
    'burgers': 'Smash Burgers',
    'pizzas': 'Pizzas al Horno',
    'papas': 'Papas y Fritos',
    'bebidas': 'Bebidas Frías'
};

// 3. Renderizar el Menú
function renderizarMenu() {
    menuContainer.innerHTML = '';

    const productosFiltrados = productos.filter(producto => {
        const coincideCategoria = categoriaActual === 'todos' || producto.categoria === categoriaActual;
        
        // ACÁ ESTÁ EL CAMBIO: Ahora busca en el nombre O en la descripción
        const termino = busquedaActual.toLowerCase();
        const coincideBusqueda = producto.nombre.toLowerCase().includes(termino) || 
                                 producto.descripcion.toLowerCase().includes(termino);
        
        return coincideCategoria && coincideBusqueda;
    });

    titleCategory.textContent = busquedaActual !== '' ? `Resultados...` : nombresCategorias[categoriaActual];

    if (productosFiltrados.length === 0) {
        menuContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-emoji-frown fs-1 text-muted-light"></i>
                <p class="text-muted-light mt-3 fw-bold">Ups, no hay nada por acá.</p>
            </div>`;
        return;
    }

    productosFiltrados.forEach(producto => {
        const cardHTML = `
            <div class="urban-card animate-fade">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="urban-img">
                <div class="p-4">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h3 class="font-black fs-5 mb-0 text-uppercase">${producto.nombre}</h3>
                        <span class="urban-price">$${producto.precio}</span>
                    </div>
                    <p class="text-muted-light small mb-3">${producto.descripcion}</p>
                    <button class="btn-add-urban w-100" onclick="agregarAlCarrito(${producto.id})">
                        <i class="bi bi-cart-plus me-2"></i> Sumar al pedido
                    </button>
                </div>
            </div>
        `;
        menuContainer.innerHTML += cardHTML;
    });
}

// 4. Lógica del Carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    const itemExistente = carrito.find(item => item.id === idProducto);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    
    actualizarInterfazCarrito();
}

function quitarDelCarrito(idProducto) {
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarInterfazCarrito();
}

function actualizarInterfazCarrito() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let cantidadItems = 0;

    if (carrito.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-muted-light text-center mt-5 small">El carrito está vacío.</p>';
        cartCount.textContent = '0';
        cartTotalElement.textContent = '$0';
        return;
    }

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        cantidadItems += item.cantidad;

        const rowHTML = `
            <div class="cart-item-row d-flex justify-content-between align-items-center">
                <div>
                    <span class="fw-bold d-block">${item.nombre}</span>
                    <span class="text-muted-light small">${item.cantidad} x $${item.precio}</span>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <span class="font-black text-accent">$${subtotal}</span>
                    <button class="btn-remove-item" onclick="quitarDelCarrito(${item.id})">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += rowHTML;
    });

    cartCount.textContent = cantidadItems;
    cartTotalElement.textContent = `$${total}`;
}

// 5. WhatsApp
function enviarPedidoWsp() {
    if (carrito.length === 0) {
        alert("¡Tu carrito está vacío!");
        return;
    }

    const nombre = document.getElementById('cliente-nombre').value.trim();
    const direccion = document.getElementById('cliente-direccion').value.trim();
    const notas = document.getElementById('cliente-notas').value.trim();

    if (!nombre || !direccion) {
        alert("Por favor, completá tu nombre y dirección antes de enviar el pedido.");
        return;
    }

    let total = 0;
    let textoWsp = " *NUEVO PEDIDO - URBAN BURGER* \n\n";
    textoWsp += `👤 *Cliente:* ${nombre}\n`;
    textoWsp += `📍 *Dirección:* ${direccion}\n\n`;
    textoWsp += `🛒 *Detalle del pedido:* \n`;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        textoWsp += `▪️ ${item.cantidad}x ${item.nombre} ($${subtotal})\n`;
    });

    textoWsp += `\n *Total a pagar: $${total}*`;
    
    if (notas) {
        textoWsp += `\n\n *Notas extras:* ${notas}`;
    }

    const mensajeCodificado = encodeURIComponent(textoWsp);
    const numeroWhatsApp = "5493884340135";
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    window.open(url, '_blank');
}

// 6. Buscador y Categorías (Event Listeners)
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        busquedaActual = e.target.value; 
        renderizarMenu(); // Actualiza el menú en tiempo real al escribir
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        categoriaActual = tab.getAttribute('data-category');
        renderizarMenu(); // Actualiza el menú al tocar una categoría
    });
});

// 7. Arrancar la aplicación
renderizarMenu();