// Sistema de carrito de compras
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.currentRestaurant = JSON.parse(localStorage.getItem('currentRestaurant')) || null;
    }

    addItem(dish, restaurant) {
        // Verificar si es del mismo restaurante
        if (this.currentRestaurant && this.currentRestaurant.id !== restaurant.id) {
            if (!confirm(`Solo puedes pedir de un restaurante a la vez. ¿Deseas vaciar el carrito de ${this.currentRestaurant.name}?`)) {
                return false;
            }
            this.clear();
        }

        this.currentRestaurant = restaurant;
        
        const existingItem = this.items.find(item => item.name === dish.name);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({
                ...dish,
                quantity: 1,
                restaurant: restaurant
            });
        }

        this.save();
        this.updateUI();
        return true;
    }

    removeItem(dishName) {
        this.items = this.items.filter(item => item.name !== dishName);
        if (this.items.length === 0) {
            this.currentRestaurant = null;
        }
        this.save();
        this.updateUI();
    }

    updateQuantity(dishName, quantity) {
        if (quantity === 0) {
            this.removeItem(dishName);
        } else {
            const item = this.items.find(item => item.name === dishName);
            if (item) {
                item.quantity = quantity;
                this.save();
                this.updateUI();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            const price = typeof item.price === 'string' 
                ? parseFloat(item.price.split('/')[0]) 
                : item.price;
            return total + (price * item.quantity);
        }, 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this.currentRestaurant = null;
        localStorage.removeItem('cart');
        localStorage.removeItem('currentRestaurant');
        this.updateUI();
    }

    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        if (this.currentRestaurant) {
            localStorage.setItem('currentRestaurant', JSON.stringify(this.currentRestaurant));
        }
    }

    updateUI() {
        const cartButton = document.getElementById('cart-button');
        const cartCount = document.getElementById('cart-count');
        const count = this.getItemCount();
        
        if (cartButton && cartCount) {
            if (count > 0) {
                cartButton.classList.remove('hidden');
                cartButton.classList.add('flex');
                cartCount.textContent = count;
            } else {
                cartButton.classList.add('hidden');
                cartButton.classList.remove('flex');
            }
        }
    }
}

// Instancia global del carrito
const cart = new ShoppingCart();
