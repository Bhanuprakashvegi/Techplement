let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

document.getElementById('cart-btn').addEventListener('click', showCart);

function showCart() {
  const cartModal = document.getElementById('cart-modal');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
  cartModal.style.display = 'flex';
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}
function prepareCheckout() {
    localStorage.setItem('cartData', JSON.stringify(cart));
  }
  