// 1. Catálogo Bilingüe
const productos = [
    {
        id: 1, categoria: "entradas", precio: "12.000",
        nombre_es: "Carpaccio de Pulpo", desc_es: "Finas láminas de pulpo con aceite de oliva virgen extra, pimentón de la Vera y alcaparras.",
        nombre_en: "Octopus Carpaccio", desc_en: "Thin slices of octopus with extra virgin olive oil, smoked paprika, and capers."
    },
    {
        id: 2, categoria: "entradas", precio: "9.500",
        nombre_es: "Burrata Trufada", desc_es: "Burrata fresca importada sobre un nido de rúcula salvaje, tomates secos y aceite de trufa.",
        nombre_en: "Truffle Burrata", desc_en: "Fresh imported burrata on wild arugula, sun-dried tomatoes, and truffle oil."
    },
    {
        id: 3, categoria: "principales", precio: "28.000",
        nombre_es: "Ojo de Bife Madurado", desc_es: "Corte de 400g madurado 45 días, acompañado de puré de papas aligot y demi-glace al malbec.",
        nombre_en: "Dry-Aged Ribeye", desc_en: "400g cut aged for 45 days, served with aligot potato purée and malbec demi-glace."
    },
    {
        id: 4, categoria: "principales", precio: "24.000",
        nombre_es: "Salmón Rosado del Pacífico", desc_es: "Confitado a baja temperatura, crema de azafrán y espárragos grillados.",
        nombre_en: "Pacific Pink Salmon", desc_en: "Slow-cooked confit salmon, saffron cream, and grilled asparagus."
    },
    {
        id: 5, categoria: "postres", precio: "8.500",
        nombre_es: "Crème Brûlée de Pistacho", desc_es: "Clásica crema tostada infusionada con pasta de pistachos italianos.",
        nombre_en: "Pistachio Crème Brûlée", desc_en: "Classic torched cream infused with Italian pistachio paste."
    }
];

// 2. Diccionario para la interfaz de usuario (UI)
const traduccionesUI = {
    'es': {
        'subtitle': 'Restaurante',
        'tab-todos': 'Menú',
        'tab-entradas': 'Entradas',
        'tab-principales': 'Principales',
        'tab-postres': 'Postres',
        'tab-vinos': 'Vinos',
        'title-todos': 'Nuestra Carta',
        'title-entradas': 'Entradas',
        'title-principales': 'Platos Principales',
        'title-postres': 'Postres',
        'title-vinos': 'Nuestra Cava',
        'empty': 'No hay platos disponibles en esta categoría.',
        'footer': '© 2026 Desarrollado por Ariana Agustina Vasquez'
    },
    'en': {
        'subtitle': 'Restaurant',
        'tab-todos': 'Menu',
        'tab-entradas': 'Starters',
        'tab-principales': 'Mains',
        'tab-postres': 'Desserts',
        'tab-vinos': 'Wines',
        'title-todos': 'Our Menu',
        'title-entradas': 'Starters',
        'title-principales': 'Main Courses',
        'title-postres': 'Desserts',
        'title-vinos': 'Our Cellar',
        'empty': 'No dishes available in this category.',
        'footer': '© 2026 Developed by Ariana Agustina Vasquez'
    }
};

// 3. Estado de la App
let categoriaActual = 'todos';
let idiomaActual = 'es'; // Arranca en español por defecto

const menuContainer = document.getElementById('menu-container');
const titleCategory = document.getElementById('title-category');
const tabs = document.querySelectorAll('.elegant-tab');

// 4. Cambiar Idioma Principal
function cambiarIdioma(idioma) {
    idiomaActual = idioma;
    
    document.getElementById('lang-es').classList.toggle('active', idioma === 'es');
    document.getElementById('lang-en').classList.toggle('active', idioma === 'en');

    // Traducir los textos fijos de la interfaz
    document.getElementById('ui-subtitle').textContent = traduccionesUI[idioma]['subtitle'];
    document.getElementById('tab-todos').textContent = traduccionesUI[idioma]['tab-todos'];
    document.getElementById('tab-entradas').textContent = traduccionesUI[idioma]['tab-entradas'];
    document.getElementById('tab-principales').textContent = traduccionesUI[idioma]['tab-principales'];
    document.getElementById('tab-postres').textContent = traduccionesUI[idioma]['tab-postres'];
    document.getElementById('tab-vinos').textContent = traduccionesUI[idioma]['tab-vinos'];
    

    renderizarMenu();
}

// 5. Renderizar Platos
function renderizarMenu() {
    menuContainer.innerHTML = '';

    const productosFiltrados = productos.filter(p => categoriaActual === 'todos' || p.categoria === categoriaActual);

    // Actualizar Título de Categoría según idioma
    titleCategory.textContent = traduccionesUI[idiomaActual][`title-${categoriaActual}`];

    if (productosFiltrados.length === 0) {
        menuContainer.innerHTML = `<p class="text-center text-muted fst-italic mt-4">${traduccionesUI[idiomaActual]['empty']}</p>`;
        return;
    }

    productosFiltrados.forEach(producto => {
        // Seleccionamos la propiedad dinámicamente según el idioma
        const nombre = idiomaActual === 'es' ? producto.nombre_es : producto.nombre_en;
        const desc = idiomaActual === 'es' ? producto.desc_es : producto.desc_en;

        const cardHTML = `
            <div class="menu-item-elegant animate-fade-slow">
                <div class="item-header">
                    <h3 class="font-serif item-name">${nombre}</h3>
                    <div class="item-dots"></div>
                    <span class="font-serif item-price">$${producto.precio}</span>
                </div>
                <p class="item-desc">${desc}</p>
            </div>
        `;
        menuContainer.innerHTML += cardHTML;
    });
}

// 6. Listeners para Pestañas
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        categoriaActual = tab.getAttribute('data-category');
        renderizarMenu();
    });
});

// Arrancar
renderizarMenu();