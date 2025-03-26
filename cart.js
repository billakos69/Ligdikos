let cart = JSON.parse(localStorage.getItem('cart')) || []; // Ανάγνωση του καλαθιού από το localStorage

// Προσθήκη προϊόντος στο καλάθι
function addItemToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart)); // Αποθήκευση στο localStorage
    updateCartBubble();
}

// Ενημέρωση της φούσκας του καλαθιού
function updateCartBubble() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Ενημέρωση των προϊόντων στο dropdown του καλαθιού
function updateCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Το καλάθι είναι άδειο.</p>';
    } else {
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Μέγεθος: ${item.size}</p>
                    <p>€${item.price}</p>
                </div>
                <button onclick="removeFromCart(${index})">Αφαίρεση</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
    }
}

// Εμφάνιση/Απόκρυψη του dropdown του καλαθιού
function toggleCartDropdown() {
    const dropdown = document.getElementById('cartDropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    updateCartItems();
}

// Αφαίρεση προϊόντος από το καλάθι
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart)); // Ενημέρωση στο localStorage
    updateCartBubble();
    updateCartItems();
}

// Άδειασμα του καλαθιού
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart)); // Ενημέρωση στο localStorage
    updateCartBubble();
    updateCartItems();
}

// Ολοκλήρωση παραγγελίας
function checkout() {
    if (cart.length === 0) {
        alert("Το καλάθι σας είναι άδειο.");
    } else {
        alert("Η παραγγελία σας ολοκληρώθηκε!");
        clearCart();
    }
}
