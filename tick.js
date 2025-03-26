let cart = {
    normal: 0,
    vip: 0,
    family: 0,
};

let prices = {
    normal: 20,
    vip: 50,
    family: 70,
};

function updateCart() {
    let cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    let totalPrice = 0;

    for (let type in cart) {
        if (cart[type] > 0) {
            let listItem = document.createElement("li");
            listItem.innerHTML = `${capitalize(type)}: ${cart[type]} x ${prices[type]}€`;
            cartList.appendChild(listItem);
            totalPrice += cart[type] * prices[type];
        }
    }

    document.getElementById("total-price").innerText = `${totalPrice}€`;
}

function addTicket(type) {
    cart[type]++;
    updateCart();
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

document.getElementById("checkout-btn").addEventListener("click", function() {
    if (Object.values(cart).reduce((a, b) => a + b, 0) === 0) {
        alert("Το καλάθι είναι άδειο. Παρακαλώ προσθέστε εισιτήρια.");
    } else {
        alert("Ευχαριστούμε για την αγορά σας!");
        cart = { normal: 0, vip: 0, family: 0 };
        updateCart();
    }
});

function toggleCart() {
    const cartBubble = document.getElementById('cart-bubble');
    cartBubble.style.display = cartBubble.style.display === 'block' ? 'none' : 'block';
}



 function toggleContactForm() {
    const formBubble = document.getElementById('contactFormBubble');
    formBubble.style.display = (formBubble.style.display === 'block') ? 'none' : 'block';
}



