// ==========================================
// GREENDEN - MAIN JAVASCRIPT
// ==========================================


// ==========================================
// PRODUCT DATA
// ==========================================

const products = [
    {
        id: 1,
        name: "Snake Plant",
        price: 2499,
        category: "Indoor",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Monstera Deliciosa",
        price: 3499,
        category: "Indoor",
        image: "https://images.unsplash.com/photo-1614594576028-6b5e2b6b9b9b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Peace Lily",
        price: 1999,
        category: "Air Purifying",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Aloe Vera",
        price: 999,
        category: "Succulent",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Money Plant",
        price: 799,
        category: "Indoor",
        image: "https://images.unsplash.com/photo-1614594576028-6b5e2b6b9b9b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Areca Palm",
        price: 2299,
        category: "Air Purifying",
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Rubber Plant",
        price: 1899,
        category: "Indoor",
        image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "ZZ Plant",
        price: 1599,
        category: "Indoor",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Jade Plant",
        price: 1299,
        category: "Succulent",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Cactus Plant",
        price: 699,
        category: "Succulent",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Bamboo Palm",
        price: 2199,
        category: "Air Purifying",
        image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Spider Plant",
        price: 899,
        category: "Air Purifying",
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        name: "Fiddle Leaf Fig",
        price: 2999,
        category: "Indoor",
        image: "https://images.unsplash.com/photo-1614594576028-6b5e2b6b9b9b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        name: "Croton Plant",
        price: 1399,
        category: "Outdoor",
        image: "https://images.unsplash.com/photo-1597055181300-dc7b2c3c7b3a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        name: "Bougainvillea",
        price: 1799,
        category: "Outdoor",
        image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        name: "Lavender Plant",
        price: 1199,
        category: "Outdoor",
        image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 17,
        name: "Calathea Plant",
        price: 2399,
        category: "Indoor",
        image: "https://images.unsplash.com/photo-1614594576028-6b5e2b6b9b9b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 18,
        name: "English Ivy",
        price: 1099,
        category: "Air Purifying",
        image: "https://images.unsplash.com/photo-1597055181300-dc7b2c3c7b3a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 19,
        name: "Echeveria",
        price: 899,
        category: "Succulent",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 20,
        name: "Lucky Bamboo",
        price: 999,
        category: "Indoor",
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80"
    }
];


// ==========================================
// CART
// ==========================================

let cart = JSON.parse(localStorage.getItem("greendenCart")) || [];


// ==========================================
// UPDATE CART COUNT
// ==========================================

function updateCartCount() {

    const cartCountElements = document.querySelectorAll("#cartCount");

    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}


// ==========================================
// ADD PRODUCT TO CART
// ==========================================

function addProduct(name, price, category, image) {

    const existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            id: Date.now(),
            name: name,
            price: Number(price),
            category: category,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem("greendenCart", JSON.stringify(cart));

    updateCartCount();

    alert(`${name} added to cart!`);
}


// ==========================================
// PRODUCT PAGE
// ==========================================

function displayProducts(productList = products) {

    const productGrid = document.getElementById("productGrid");
    const productCount = document.getElementById("productCount");
    const noProducts = document.getElementById("noProducts");

    if (!productGrid) {
        return;
    }

    productGrid.innerHTML = "";

    if (productCount) {
        productCount.textContent = productList.length;
    }

    if (productList.length === 0) {

        if (noProducts) {
            noProducts.classList.remove("hidden");
        }

        return;
    }

    if (noProducts) {
        noProducts.classList.add("hidden");
    }

    productList.forEach(product => {

        const productCard = document.createElement("div");

        productCard.className =
            "bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300";

        productCard.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                class="w-full h-64 object-cover"
            >

            <div class="p-5">

                <span class="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    ${product.category}
                </span>

                <h3 class="text-xl font-bold text-gray-800 mt-3">
                    ${product.name}
                </h3>

                <div class="flex items-center justify-between mt-4">

                    <p class="text-xl font-bold text-green-700">
                        ₹${product.price.toLocaleString("en-IN")}
                    </p>

                    <button
                        onclick="addProduct(
                            '${product.name}',
                            ${product.price},
                            '${product.category}',
                            '${product.image}'
                        )"
                        class="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>
        `;

        productGrid.appendChild(productCard);
    });
}


// ==========================================
// FILTER PRODUCTS
// ==========================================

function filterProducts(category) {

    const searchInput = document.getElementById("searchInput");

    let searchText = "";

    if (searchInput) {
        searchText = searchInput.value.toLowerCase().trim();
    }

    let filteredProducts = products;

    if (category !== "All") {

        filteredProducts = filteredProducts.filter(product => {
            return product.category === category;
        });
    }

    if (searchText !== "") {

        filteredProducts = filteredProducts.filter(product => {

            return (
                product.name.toLowerCase().includes(searchText) ||
                product.category.toLowerCase().includes(searchText)
            );
        });
    }

    displayProducts(filteredProducts);
}


// ==========================================
// SEARCH PRODUCTS
// ==========================================

function searchProducts() {

    filterProducts("All");
}


// ==========================================
// CART PAGE
// ==========================================

function displayCart() {

    const cartItemsContainer = document.getElementById("cartItems");
    const emptyCart = document.getElementById("emptyCart");

    if (!cartItemsContainer) {
        return;
    }

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {

        if (emptyCart) {
            emptyCart.classList.remove("hidden");
        }

        updateCartSummary();

        return;
    }

    if (emptyCart) {
        emptyCart.classList.add("hidden");
    }

    cart.forEach(item => {

        const cartItem = document.createElement("div");

        cartItem.className =
            "bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row gap-4 items-center";

        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
                class="w-28 h-28 object-cover rounded-xl"
            >

            <div class="flex-1 w-full">

                <h3 class="text-lg font-bold text-gray-800">
                    ${item.name}
                </h3>

                <p class="text-sm text-gray-500">
                    ${item.category}
                </p>

                <p class="text-green-700 font-bold mt-2">
                    ₹${item.price.toLocaleString("en-IN")}
                </p>

            </div>

            <div class="flex items-center gap-3">

                <button
                    onclick="changeQuantity(${item.id}, -1)"
                    class="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 font-bold"
                >
                    -
                </button>

                <span class="font-bold text-lg">
                    ${item.quantity}
                </span>

                <button
                    onclick="changeQuantity(${item.id}, 1)"
                    class="w-9 h-9 rounded-full bg-green-700 text-white hover:bg-green-800 font-bold"
                >
                    +
                </button>

            </div>

            <div class="text-right">

                <p class="font-bold text-gray-800">
                    ₹${(item.price * item.quantity).toLocaleString("en-IN")}
                </p>

                <button
                    onclick="removeFromCart(${item.id})"
                    class="text-red-500 hover:text-red-700 text-sm mt-2"
                >
                    Remove
                </button>

            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    updateCartSummary();
}


// ==========================================
// CHANGE QUANTITY
// ==========================================

function changeQuantity(id, change) {

    const item = cart.find(product => product.id === id);

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {

        cart = cart.filter(product => product.id !== id);
    }

    saveCart();

    displayCart();
}


// ==========================================
// REMOVE FROM CART
// ==========================================

function removeFromCart(id) {

    cart = cart.filter(product => product.id !== id);

    saveCart();

    displayCart();
}


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

    localStorage.setItem(
        "greendenCart",
        JSON.stringify(cart)
    );

    updateCartCount();
}


// ==========================================
// CART SUMMARY
// ==========================================

function updateCartSummary() {

    const summaryItems = document.getElementById("summaryItems");
    const subtotalElement = document.getElementById("subtotal");
    const shippingElement = document.getElementById("shipping");
    const taxElement = document.getElementById("tax");
    const discountElement = document.getElementById("discount");
    const totalElement = document.getElementById("total");

    if (!subtotalElement) {
        return;
    }

    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const subtotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const shipping = subtotal === 0
        ? 0
        : subtotal >= 2000
            ? 0
            : 99;

    const tax = subtotal * 0.05;

    let discount = 0;

    const promoCode = localStorage.getItem("greendenPromo");

    if (promoCode === "GREEN10") {
        discount = subtotal * 0.10;
    }

    const total = subtotal + shipping + tax - discount;

    if (summaryItems) {
        summaryItems.textContent = totalItems;
    }

    subtotalElement.textContent =
        `₹${subtotal.toLocaleString("en-IN", {
            minimumFractionDigits: 2
        })}`;

    shippingElement.textContent =
        shipping === 0
            ? "FREE"
            : `₹${shipping.toLocaleString("en-IN", {
                minimumFractionDigits: 2
            })}`;

    taxElement.textContent =
        `₹${tax.toLocaleString("en-IN", {
            minimumFractionDigits: 2
        })}`;

    discountElement.textContent =
        `-₹${discount.toLocaleString("en-IN", {
            minimumFractionDigits: 2
        })}`;

    totalElement.textContent =
        `₹${total.toLocaleString("en-IN", {
            minimumFractionDigits: 2
        })}`;
}


// ==========================================
// PROMO CODE
// ==========================================

function applyPromo() {

    const promoInput = document.getElementById("promoInput");
    const promoMessage = document.getElementById("promoMessage");

    if (!promoInput || !promoMessage) {
        return;
    }

    const code = promoInput.value.trim().toUpperCase();

    if (code === "GREEN10") {

        localStorage.setItem("greendenPromo", "GREEN10");

        promoMessage.textContent =
            "Promo code applied! You received 10% discount.";

        promoMessage.className =
            "text-sm mt-2 text-green-600";

        updateCartSummary();

    } else {

        localStorage.removeItem("greendenPromo");

        promoMessage.textContent =
            "Invalid promo code. Try GREEN10.";

        promoMessage.className =
            "text-sm mt-2 text-red-500";
    }
}


// ==========================================
// CHECKOUT
// ==========================================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty. Please add some plants first.");

        return;
    }

    alert(
        "Thank you for shopping with Greenden! 🌱\n\n" +
        "This is a demo checkout page.\n" +
        "Payment gateway integration can be added later."
    );
}


// ==========================================
// CONTACT FORM
// ==========================================

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    if (!name || !email || !message) {
        return;
    }

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ) {

        alert("Please fill in all required fields.");

        return;
    }

    alert(
        `Thank you ${name.value}!\n\n` +
        "Your message has been received.\n" +
        "We will contact you soon."
    );

    event.target.reset();
}


// ==========================================
// NEWSLETTER
// ==========================================

function subscribeNewsletter(event) {

    event.preventDefault();

    const form = event.target;

    const emailInput = form.querySelector("input[type='email']");

    if (!emailInput) {
        return;
    }

    const email = emailInput.value.trim();

    if (email === "") {

        alert("Please enter your email address.");

        return;
    }

    alert(
        `Thank you!\n\n${email} has been subscribed to our newsletter. 🌱`
    );

    form.reset();
}


// ==========================================
// INITIAL PAGE LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();

    // Product page
    if (document.getElementById("productGrid")) {
        displayProducts();
    }

    // Cart page
    if (document.getElementById("cartItems")) {
        displayCart();
    }

});