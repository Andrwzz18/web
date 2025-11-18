// Script para checkout
document.addEventListener('DOMContentLoaded', function() {
    if (cart.items.length === 0) {
        document.getElementById('empty-cart').classList.remove('hidden');
        document.getElementById('checkout-content').classList.add('hidden');
        return;
    }

    loadCartSummary();

    document.getElementById('checkout-form').addEventListener('submit', handleSubmit);
});

function loadCartSummary() {
    const restaurantName = document.getElementById('restaurant-name');
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');

    if (cart.currentRestaurant) {
        restaurantName.textContent = cart.currentRestaurant.name;
    }

    cart.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'flex justify-between items-center p-3 bg-orange-50 rounded-lg';
        
        const price = typeof item.price === 'string' 
            ? parseFloat(item.price.split('/')[0]) 
            : item.price;
        
        itemDiv.innerHTML = `
            <div>
                <p class="font-medium">${item.name}</p>
                <p class="text-sm text-gray-600">Cantidad: ${item.quantity}</p>
            </div>
            <p class="font-semibold">${(price * item.quantity).toFixed(2)} Bs</p>
        `;
        
        cartItems.appendChild(itemDiv);
    });

    totalAmount.textContent = cart.getTotal().toFixed(2) + ' Bs';
}

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const reference = document.getElementById('reference').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const notes = document.getElementById('notes').value;

    // Crear mensaje para WhatsApp
    const message = `🍽️ *NUEVO PEDIDO*

📍 *Restaurante:* ${cart.currentRestaurant.name}
👤 *Cliente:* ${name}
📱 *Teléfono:* ${phone}
🏠 *Dirección:* ${address}
📌 *Referencia:* ${reference || 'N/A'}

*PEDIDO:*
${cart.items.map(item => {
    const price = typeof item.price === 'string' 
        ? parseFloat(item.price.split('/')[0]) 
        : item.price;
    return `• ${item.quantity}x ${item.name} - ${(price * item.quantity).toFixed(2)} Bs`;
}).join('\n')}

💰 *TOTAL: ${cart.getTotal().toFixed(2)} Bs*

💳 *Método de pago:* ${paymentMethod === 'cash' ? 'Efectivo' : 'Pago con QR'}
📝 *Notas:* ${notes || 'Ninguna'}`;

    const phoneNumber = '59162678314';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');

    // Limpiar carrito
    cart.clear();

    // Redirigir a confirmación
    setTimeout(() => {
        window.location.href = 'confirmation.html';
    }, 1000);
}
