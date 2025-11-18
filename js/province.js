// Script para la página de provincia
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const provinceId = urlParams.get('id');
    
    if (provinceId) {
        loadProvince(provinceId);
    }

    cart.updateUI();

    const cartButton = document.getElementById('cart-button');
    if (cartButton) {
        cartButton.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }
});

function loadProvince(provinceId) {
    const province = provincesData.find(p => p.id === provinceId);
    
    if (!province) {
        window.location.href = 'index.html';
        return;
    }

    // Actualizar header
    document.getElementById('province-name').textContent = province.name;
    document.getElementById('province-description').textContent = province.description;
    document.getElementById('restaurant-count').textContent = `${province.restaurants.length} restaurantes disponibles`;

    // Cargar restaurantes
    const grid = document.getElementById('restaurants-grid');
    
    province.restaurants.forEach((restaurant, index) => {
        const card = document.createElement('div');
        card.className = 'space-y-6 slide-in';
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.innerHTML = `
            <div class="overflow-hidden rounded-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white">
                <!-- Restaurant Image -->
                <div class="relative h-56 overflow-hidden">
                    <img src="${restaurant.image}" alt="${restaurant.name}" 
                         class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <!-- Restaurant Info -->
                <div class="p-6 pb-3">
                    <h3 class="text-2xl text-gray-800 font-bold mb-3">${restaurant.name}</h3>
                    <div class="space-y-2">
                        <div class="flex items-center gap-2 text-gray-600">
                            <svg class="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            </svg>
                            <span class="text-sm">${restaurant.location}</span>
                            ${restaurant.locationUrl ? `
                                <a href="${restaurant.locationUrl}" target="_blank" 
                                   class="ml-auto flex items-center gap-1 text-xs bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full transition-colors">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                                    </svg>
                                    Ver mapa
                                </a>
                            ` : ''}
                        </div>
                        <div class="flex items-start gap-2 text-gray-600">
                            <svg class="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="text-sm">
                                <div class="font-medium">${restaurant.schedule}</div>
                                <div class="text-gray-500 text-xs mt-0.5">${restaurant.hours}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Menu -->
                <div class="p-6 border-t">
                    <div class="flex items-center gap-2 mb-3">
                        <svg class="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <h4 class="font-semibold text-gray-800">Menú Disponible</h4>
                    </div>
                    <div class="space-y-2">
                        ${restaurant.menu.map(item => `
                            <div onclick='showDishModal(${JSON.stringify(item)}, ${JSON.stringify(restaurant)})' 
                                 class="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg hover:from-orange-100 hover:to-amber-100 transition-all cursor-pointer transform hover:scale-[1.02] hover:shadow-md">
                                <span class="font-medium text-gray-700">${item.name}</span>
                                <span class="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap">
                                    ${item.price} Bs
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Comments Section -->
                <div class="p-6 border-t bg-gray-50">
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            Comentarios
                        </h4>
                        <div id="comments-${restaurant.id}" class="text-sm text-gray-600">
                            <div class="text-center py-4 text-gray-500">
                                Aún no hay comentarios. ¡Sé el primero en comentar!
                            </div>
                        </div>
                    </div>
                    <button onclick="showCommentForm('${restaurant.id}', '${restaurant.name}')" 
                            class="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white py-2 px-4 rounded-lg text-sm font-semibold">
                        Dejar un comentario
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function showCommentForm(restaurantId, restaurantName) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-md w-full p-6">
            <h3 class="text-2xl font-bold mb-4">Dejar un comentario</h3>
            <form onsubmit="submitComment(event, '${restaurantId}', '${restaurantName}')">
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">Tu nombre</label>
                    <input type="text" id="comment-name" required 
                           class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">Calificación</label>
                    <div class="flex gap-2" id="rating-stars">
                        ${[1,2,3,4,5].map(star => `
                            <svg onclick="setRating(${star})" data-rating="${star}"
                                 class="w-8 h-8 cursor-pointer text-gray-300 hover:text-orange-500 transition-colors" 
                                 fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        `).join('')}
                    </div>
                    <input type="hidden" id="comment-rating" value="5">
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">Tu comentario</label>
                    <textarea id="comment-text" required rows="4"
                              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                </div>
                <div class="flex gap-3">
                    <button type="button" onclick="closeModal()" 
                            class="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50">
                        Cancelar
                    </button>
                    <button type="submit" 
                            class="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700">
                        Publicar
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function setRating(rating) {
    document.getElementById('comment-rating').value = rating;
    const stars = document.querySelectorAll('#rating-stars svg');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('text-gray-300');
            star.classList.add('text-orange-500');
        } else {
            star.classList.add('text-gray-300');
            star.classList.remove('text-orange-500');
        }
    });
}

function submitComment(event, restaurantId, restaurantName) {
    event.preventDefault();
    
    const name = document.getElementById('comment-name').value;
    const rating = document.getElementById('comment-rating').value;
    const text = document.getElementById('comment-text').value;
    
    // Aquí podrías enviar al backend si existiera
    console.log('Comentario:', { restaurantId, restaurantName, name, rating, text });
    
    closeModal();
    showToast('¡Comentario publicado exitosamente!');
}
