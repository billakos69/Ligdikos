// Ορισμός των προϊόντων
const products = {
    1: { name: 'Φανέλα Εντός', image: 'img/home1.png', price: 50, description: 'Η επίσημη φανέλα εντός έδρας.' },
    2: { name: 'Φανέλα Εκτός', image: 'img/away-jersey.png', price: 50, description: 'Η επίσημη φανέλα εκτός έδρας.' },
    3: { name: '3η Φανέλα', image: 'img/third-jersey.png', price: 50, description: 'Η 3η φανέλα της ομάδας.' },
    4: { name: 'Κασκόλ', image: 'img/scarf.png', price: 15, description: 'Κασκόλ για τη θέρμανση και το στυλ σας.' },
    5: { name: 'Μπουφάν', image: 'img/jacket.png', price: 80, description: 'Μπουφάν της ομάδας για κρύες μέρες.' },
    6: { name: 'Καπέλο', image: 'img/cap.png', price: 20, description: 'Καπέλο της ομάδας για το καλοκαίρι.' },
    // Πρόσθεσε τα υπόλοιπα προϊόντα εδώ
};

// Ανάγνωση του id του προϊόντος από το URL (για τη σελίδα του προϊόντος)
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const product = products[productId];

// Ενημέρωση της σελίδας με τις πληροφορίες του προϊόντος
if (product) {
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-price').textContent = `Τιμή: €${product.price}`;
    document.getElementById('product-description').textContent = product.description;
}

// Φόρτωση του προϊόντος κατά την εκκίνηση της σελίδας
window.onload = function() {
    // Δε χρειάζεται κάποια ειδική λειτουργία για το καλάθι εδώ, απλά εμφανίζουμε το προϊόν.
}


// Ενημέρωση του καλαθιού
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    
    // Ενημέρωση του αριθμού του καλαθιού στο UI
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

// Φόρτωση του καλαθιού κατά την εκκίνηση της σελίδας
window.onload = function() {
    // Ενημέρωση του αριθμού του καλαθιού όταν φορτώνει η σελίδα
    updateCart();
};

// Εξαγωγή του κουμπιού προσθήκης στο καλάθι στο HTML
document.getElementById('add-to-cart-btn').addEventListener('click', addItemToCart);


function toggleContactForm() {
    const formBubble = document.getElementById('contactFormBubble');
    formBubble.style.display = (formBubble.style.display === 'block') ? 'none' : 'block';
}


