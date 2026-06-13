// 1. Matriz de datos estática (Catálogo completo)
const productos = [
    // --- BEBIDAS ---
    {
        id: 1, nombre: "Espresso Doble", descripcion: "Doble shot de nuestro blend de la casa. Intenso y con gran cuerpo.", precio: "1.800", categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2, nombre: "Americano", descripcion: "Espresso doble diluido en agua filtrada caliente.", precio: "2.100", categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3, nombre: "Flat White", descripcion: "Doble shot de espresso con una capa fina de leche texturizada.", precio: "2.800", categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 4, nombre: "Latte Vainilla", descripcion: "Espresso simple, abundante leche texturizada y sirope de vainilla natural.", precio: "3.200", categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 5, nombre: "Iced Caramel Macchiato", descripcion: "Bebida fría con hielo, leche, espresso y salsa de caramelo artesanal.", precio: "3.500", categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 6, nombre: "Matcha Latte", descripcion: "Té verde matcha premium importado, batido con leche texturizada.", precio: "3.800", categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=200&auto=format&fit=crop"
    },

    // --- PASTELERÍA ---
    {
        id: 7, nombre: "Croissant Clásico", descripcion: "Masa hojaldrada 100% manteca, horneado en el día.", precio: "1.500", categoria: "pasteleria",
        imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 8, nombre: "Roll de Canela", descripcion: "Masa tierna rellena de canela y azúcar negra, cubierto con frosting de queso.", precio: "2.200", categoria: "pasteleria",
        imagen: "https://plus.unsplash.com/premium_photo-1673282160288-9d5381f471af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 9, nombre: "Maicenitas", descripcion: "masa suave a base de almidón de maíz rellenadas con abundante dulce de leche y coco rallado espolvoreado a los costados.", precio: "1.800", categoria: "pasteleria",
        imagen: "https://images.unsplash.com/photo-1552552492-9c335658343d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 10, nombre: "Porción Cheesecake", descripcion: "New York style cheesecake con coulis de frutos rojos.", precio: "4.500", categoria: "pasteleria",
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=200&auto=format&fit=crop"
    },

    // --- BRUNCH ---
    {
        id: 11, nombre: "Avocado Toast", descripcion: "Dos rodajas de masa madre, palta pisada, limón, aceite de oliva y semillas.", precio: "5.500", categoria: "brunch",
        imagen: "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12, nombre: "Huevos Revueltos", descripcion: "Huevos de campo revueltos y cremosos, acompañados con tostadas.", precio: "4.200", categoria: "brunch",
        imagen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 13, nombre: "Bagel Rúcula", descripcion: "Bagel tostado con queso crema, rúcula y tomates cherry.", precio: "8.500", categoria: "brunch",
        imagen: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    // --- GRANOS ---
    {
        id: 14, nombre: "Blend Casa (250g)", descripcion: "Notas a chocolate y almendras. Tueste medio. Ideal para espresso.", precio: "9.500", categoria: "granos",
        imagen: "https://images.unsplash.com/photo-1690983322609-e5ac181bfaa2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 15, nombre: "Colombia Origen (250g)", descripcion: "Notas cítricas y florales. Tueste ligero. Ideal para métodos de filtrado.", precio: "12.000", categoria: "granos",
        imagen: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=200&auto=format&fit=crop"
    }
];

// 2. Elementos del DOM
const searchInput = document.getElementById('search-input');
const tabs = document.querySelectorAll('.tab-item');
const menuContainer = document.getElementById('menu-container');
const titleClassics = document.getElementById('title-classics');

// Estado inicial (Ahora arranca mostrando todos)
let categoriaActual = 'todos';
let busquedaActual = '';

// Nombres legibles para los títulos
const nombresCategorias = {
    'todos': 'Menú Completo',
    'bebidas': 'Todas las Bebidas',
    'pasteleria': 'Pastelería Artesanal',
    'brunch': 'Opciones de Brunch',
    'granos': 'Café en Grano'
};

// 3. Función de renderizado
function renderizarMenu() {
    menuContainer.innerHTML = '';

    // Filtrar productos (AQUÍ ESTÁ LA MAGIA DEL "TODOS")
    const productosFiltrados = productos.filter(producto => {
        // Si la categoría es 'todos', siempre da true, sino compara con la categoría del producto
        const coincideCategoria = categoriaActual === 'todos' || producto.categoria === categoriaActual;
        const coincideBusqueda = producto.nombre.toLowerCase().includes(busquedaActual.toLowerCase());
        return coincideCategoria && coincideBusqueda;
    });

    // Actualizar el título
    if (busquedaActual !== '') {
        titleClassics.textContent = `Resultados para "${busquedaActual}"`;
    } else {
        titleClassics.textContent = nombresCategorias[categoriaActual];
    }

    // Si no hay productos
    if (productosFiltrados.length === 0) {
        menuContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-search fs-1" style="color: #d1c8c1;"></i>
                <p class="text-muted-brown mt-3">No encontramos resultados.</p>
            </div>`;
        return;
    }

    // Dibujar las tarjetas
    productosFiltrados.forEach(producto => {
        const cardHTML = `
            <div class="menu-item-card d-flex align-items-center p-3 animate-fade bg-white shadow-sm">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="item-img object-fit-cover">
                <div class="ms-3 flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start mb-1">
                        <h4 class="font-serif color-espresso fs-6 mb-0 fw-bold pe-2">${producto.nombre}</h4>
                        <span class="fw-bold color-espresso px-2 py-1 rounded" style="background-color: var(--latte-bg); font-size: 0.9rem;">$${producto.precio}</span>
                    </div>
                    <p class="text-muted-brown mb-0 mt-1" style="font-size: 0.82rem; line-height: 1.4;">${producto.descripcion}</p>
                </div>
            </div>
        `;
        menuContainer.innerHTML += cardHTML;
    });
}

// 4. Listeners
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

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Limpiar búsqueda al cambiar de pestaña
        searchInput.value = '';
        busquedaActual = '';

        categoriaActual = tab.getAttribute('data-category');
        renderizarMenu();
    });
});

// Iniciar
renderizarMenu();