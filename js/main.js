
"// Script principal"
document.addEventListener('DOMContentLoaded', function() {
    // Cargar provincias en la página principal
    if (document.getElementById('provinces-grid')) {
        loadProvinces();
    }

    // Actualizar contador del carrito
    cart.updateUI();

    // Event listener para el botón del carrito
    const cartButton = document.getElementById('cart-button');
    if (cartButton) {
        cartButton.addEventListener('click', function() {
            window.location.href = 'checkout.html';
        });
    }
});

function loadProvinces() {
    const grid = document.getElementById('provinces-grid');
    
    provincesData.forEach((province, index) => {
        const card = document.createElement('div');
        card.className = 'group cursor-pointer overflow-hidden rounded-lg border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white fade-in-up';
        card.style.animationDelay = `${index * 0.1}s`;
        card.onclick = () => window.location.href = `province.html?id=${province.id}`;
        
        card.innerHTML = `
            <div class=\"relative h-64 overflow-hidden\">
                <img src=\"${province.image}\" alt=\"${province.name}\" 
                     class=\"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700\">
                <div class=\"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent\"></div>
                <div class=\"absolute bottom-0 left-0 right-0 p-6\">
                    <h3 class=\"text-3xl font-bold text-white mb-2\">${province.name}</h3>
                    <p class=\"text-white/90 text-sm\">${province.restaurants.length} restaurantes disponibles</p>
                </div>
            </div>
            <div class=\"p-6\">
                <p class=\"text-gray-600 mb-4\">${province.description}</p>
                <button class=\"w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center\">
                    Ver Restaurantes
                    <svg class=\"ml-2 w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">
                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\"></path>
                    </svg>
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function showDishModal(dish, restaurant) {
    const dishInfo = dishesData[dish.name] || {
        image: 'https://via.placeholder.com/400',
        ingredients: ['Ingredientes variados'],
        description: 'Delicioso plato tradicional'
    };

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    modal.innerHTML = `
        <div class=\"bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto\">
            <div class=\"relative h-64\">
                <img src=\"${dishInfo.image}\" alt=\"${dish.name}\" class=\"w-full h-full object-cover\">
                <div class=\"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent\"></div>
                <button onclick=\"closeModal()\" class=\"absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full\">
                    <svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">
                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"></path>
                    </svg>
                </button>
            </div>
            <div class=\"p-6\">
                <div class=\"flex items-center justify-between mb-3\">
                    <h3 class=\"text-3xl font-bold text-gray-800\">${dish.name}</h3>
                    <span class=\"bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-lg text-lg font-semibold\">
                        ${dish.price} Bs
                    </span>
                </div>
                <p class=\"text-gray-600 italic mb-4\">${dishInfo.description}</p>
                
                <div class=\"mb-6\">
                    <div class=\"flex items-center gap-2 text-orange-600 mb-3\">
                        <svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">
                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\"></path>
                        </svg>
                        <h4 class=\"text-lg font-semibold\">Ingredientes</h4>
                    </div>
                    <div class=\"grid grid-cols-2 gap-2\">
                        ${dishInfo.ingredients.map(ingredient => `
                            <div class=\"flex items-center gap-2 p-2 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg\">
                                <div class=\"w-2 h-2 bg-orange-500 rounded-full\"></div>
                                <span class=\"text-sm text-gray-700\">${ingredient}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button onclick=\"addToCartAndClose('${dish.name}', ${dish.price}, '${restaurant.id}', '${restaurant.name}', '${restaurant.location}')\" 
                        class=\"w-full h-12 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-lg font-semibold rounded-lg flex items-center justify-center gap-2\">
                    <svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">
                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z\"></path>
                    </svg>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

function addToCartAndClose(dishName, price, restaurantId, restaurantName, restaurantLocation) {
    const dish = { name: dishName, price: price };
    const restaurant = { id: restaurantId, name: restaurantName, location: restaurantLocation };
    
    if (cart.addItem(dish, restaurant)) {
        closeModal();
        showToast('¡Agregado al carrito!');
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-20 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
"Observation: Create successful: /app/public/js/main.js"