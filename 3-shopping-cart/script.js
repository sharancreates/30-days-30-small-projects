const products = [
    { id: 1, name: 'DAIRY MILK', price: 20 },
    { id: 2, name: '5 STAR', price: 20 },
    { id: 3, name: 'DARK CHOCOLATE', price: 265 }
];

//state initialisatiom
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

const productListEl = document.getElementById('product-list');
const cartListEl = document.getElementById('cart-list');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveAndRender();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1); 
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    renderCart();
}

//render fnc
function renderProducts() {
    productListEl.innerHTML = products.map(product => `
        <div class="item">
            <span>${product.name} ..... ₹${product.price}</span>
            <button class="btn-add" onclick="addToCart(${product.id})">ADD</button>
        </div>
    `).join('');
}

function renderCart() {
    if (cart.length === 0) {
        cartListEl.innerHTML = '<li style="text-align:center; font-style:italic; margin:10px 0;">( No items recorded )</li>';
    } 
    else {
        cartListEl.innerHTML = cart.map((item, index) => `
            <li class="item">
                <span>${item.name}</span>
                <span>₹${item.price} <button class="btn-remove" onclick="removeFromCart(${index})">X</button></span>
            </li>
        `).join('');
    }
    updateTotals();
}

function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    taxEl.textContent = `₹${tax.toFixed(2)}`;
    totalEl.textContent = `₹${total.toFixed(2)}`;
}

renderProducts();
renderCart();