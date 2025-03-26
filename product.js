let currentProduct = null;
let selectedSize = null;
let currentImageIndex = 0;

const products = {
    1: {
        name: "Εντός Έδρας Φανέλα",
        description: "adipas Official Ligdikos FC Home Φανέλα .",
        price: "50",
        images: [
            "img/home1.jpg",
            "img/home2.jpeg",
            "img/home3.jpg",
            
        ]
    },
    2: {
        name: "Εκτός Έδρας Φανέλα",
        description: "adipas Official Ligdikos FC Away Φανέλα.",
        price: "50",
        images: [
            "img/away1.png",
            "img/away2.jpg",
            "img/away3.webp"
        ]
    },

    3: {
        name: "Τρίτη  Φανέλα",
        description: "adipas Official Ligdikos FC Third Φανέλα .",
        price: "50",
        images: [
            "img/third.png",
            "img/third2.png",
         
        ]
    },

    4: {
        name: "Εντός Έδρας Φανέλα",
        description: "Κασκόλ Ligdikou Serres Club.",
        price: "20",
        images: [
            "img/kaskol.png"
            
        ]
    } ,

    5: {
        name: "Μπουφάν Ligdikou FC",
        description: "adipas Ligdikos 2024/25 Χειμωνιάτικο Μπουφάν Navy Μπλε.",
        price: "80",
        images: [
            "img/mpoufan.png",
             "img/mpoufan2.png"
            
        ]
    },

    6: {
        name: "Καπέλο Ligdikou FC",
        description: "Επίσημο καπέλο Ligdikou Fc.",
        price: "20",
        images: [
            "img/kapelo.png"
            
        ]
    }
};

// Αρχικοποίηση της σελίδας προϊόντος
function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (products[productId]) {
        currentProduct = products[productId];
        document.getElementById('product-name').textContent = currentProduct.name;
        document.getElementById('product-description').textContent = currentProduct.description;
        document.getElementById('product-price').textContent = `Τιμή: €${currentProduct.price}`;
        updateMainImage();
        generateThumbnails();
    } else {
        alert("Προϊόν δεν βρέθηκε!");
        window.location.href = "eshop.html";
    }
}

// Ενημέρωση κύριας εικόνας
function updateMainImage() {
    document.getElementById('main-image').src = currentProduct.images[currentImageIndex];
}

// Εναλλαγή εικόνας - Προηγούμενη
document.getElementById('prev-main-image').onclick = function(event) {
    event.stopPropagation();
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateMainImage();
    }
};

// Εναλλαγή εικόνας - Επόμενη
document.getElementById('next-main-image').onclick = function(event) {
    event.stopPropagation();
    if (currentImageIndex < currentProduct.images.length - 1) {
        currentImageIndex++;
        updateMainImage();
    }
};

// Δημιουργία των thumbnails
function generateThumbnails() {
    const thumbnailsContainer = document.getElementById('thumbnails');
    thumbnailsContainer.innerHTML = "";

    currentProduct.images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.className = "thumbnail";
        thumb.onclick = () => {
            currentImageIndex = index;
            updateMainImage();
        };
        thumbnailsContainer.appendChild(thumb);
    });
}

// Επιλογή μεγέθους
function selectSize(size) {
    selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelector(`.size-btn[onclick="selectSize('${size}')"]`).classList.add('selected');
}

// Προσθήκη στο καλάθι
function addToCart() {
    if (!selectedSize) {
        alert("Παρακαλώ επιλέξτε μέγεθος!");
        return;
    }

    const item = {
        name: currentProduct.name,
        size: selectedSize,
        image: currentProduct.images[0], 
        price: currentProduct.price
    };

    addItemToCart(item); // Κλήση για την προσθήκη στο καλάθι
    alert("Το προϊόν προστέθηκε στο καλάθι!");
}

// Ενημέρωση του καλαθιού
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

// Εμφάνιση της φόρμας επικοινωνίας
function toggleContactForm() {
    const contactFormBubble = document.getElementById('contactFormBubble');
    contactFormBubble.style.display = (contactFormBubble.style.display === "block") ? "none" : "block";
}

// Άνοιγμα popup εικόνας
function openImagePopup() {
    document.getElementById('image-popup').style.display = "flex";  // Αλλάξαμε το 'block' σε 'flex' για να κεντράρουμε το περιεχόμενο
    document.getElementById('popup-image').src = currentProduct.images[currentImageIndex];
}

// Κλείσιμο popup εικόνας
function closeImagePopup() {
    document.getElementById('image-popup').style.display = "none";
}

// Προηγούμενη εικόνα στο popup
function prevImage(event) {
    event.stopPropagation();
    if (currentImageIndex > 0) {
        currentImageIndex--;
        document.getElementById('popup-image').src = currentProduct.images[currentImageIndex];
    }
}

// Επόμενη εικόνα στο popup
function nextImage(event) {
    event.stopPropagation();
    if (currentImageIndex < currentProduct.images.length - 1) {
        currentImageIndex++;
        document.getElementById('popup-image').src = currentProduct.images[currentImageIndex];
    }
}

window.onload = loadProduct;

 // Ολοκλήρωση αγοράς
 function checkout() {
    window.location.href = 'checkout.html'; // Οδηγεί σε άλλη σελίδα ολοκλήρωσης αγοράς
}
