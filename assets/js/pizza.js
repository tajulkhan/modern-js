// Define the Pizza class
class Pizza {
    constructor(typePizza, sizePizza, crustPizza) {
        this.type = typePizza;
        this.size = sizePizza;
        this.crust = crustPizza;
        this.toppings = [];
    }

    getToppings() {
        return this.toppings;
    }

    setToppings(toppingsPizza) {
        this.toppings.push(...toppingsPizza.split(',').map(t => t.trim()));
    }

    bake() {
        return `Baking a ${this.type} ${this.size} ${this.crust} crust pizza with ${this.toppings.join(', ')}`;
    }
}

// Handle form submission
document.getElementById('pizza-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const type = document.getElementById('type').value;
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const toppings = document.getElementById('toppings').value;

    // Create a new Pizza instance
    const pizza = new Pizza(type, size, crust);
    pizza.setToppings(toppings);

    // Generate pizza details string
    const pizzaDetails = pizza.bake();

    // Store pizza details in localStorage
    localStorage.setItem('pizzaOrder', pizzaDetails);

    // Display pizza details
    document.getElementById('pizza-details').innerText = pizzaDetails;
    console.log(pizzaDetails);
    console.log(pizza.getToppings());
});

// Retrieve pizza details from localStorage on page load
window.addEventListener('load', function() {
    const storedPizzaDetails = localStorage.getItem('pizzaOrder');
    
    if (storedPizzaDetails) {
        document.getElementById('pizza-details').innerText = storedPizzaDetails;
        console.log('Retrieved Pizza Details:', storedPizzaDetails);
    }
});

//Why Use Classes for Business Logic

// Product class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Business logic: calculate discounted price
    getDiscountedPrice(discountPercentage) {
        return this.price - (this.price * discountPercentage / 100);
    }
}

// Cart class
class Cart {
    constructor() {
        this.items = [];
    }

    // Business logic: add product to cart
    addProduct(product, quantity) {
        this.items.push({ product, quantity });
    }

    // Business logic: calculate total price
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}

// Order class
class Order {
    constructor(cart) {
        this.cart = cart;
        this.status = 'Pending';
    }

    // Business logic: complete the order
    completeOrder() {
        if (this.cart.items.length === 0) {
            throw new Error('Cart is empty. Cannot complete the order.');
        }
        this.status = 'Completed';
        return `Order completed. Total amount: $${this.cart.getTotalPrice()}`;
    }
}

// Usage
const product1 = new Product('Laptop', 1000);
const product2 = new Product('Mouse', 50);

const cart = new Cart();
cart.addProduct(product1, 1);
cart.addProduct(product2, 2);

const order = new Order(cart);
console.log(order.completeOrder()); // Order completed. Total amount: $1100
