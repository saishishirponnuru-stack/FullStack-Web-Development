const productName = document.getElementById("productName");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");

const calculateBtn = document.getElementById("calculateBtn");
const message = document.getElementById("message");
const total = document.getElementById("total");

function calculateTotal() {
    const name = productName.value.trim();
    const productPrice = Number(price.value);
    const productQuantity = Number(quantity.value);

    if (name === "") {
        message.textContent = "Please enter the product name.";
        total.textContent = "";
        return;
    }

    if (productPrice <= 0 || productQuantity <= 0) {
        message.textContent = "Please enter valid price and quantity.";
        total.textContent = "";
        return;
    }

    const amount = productPrice * productQuantity;

    message.textContent = "Calculation completed.";
    total.textContent = name + " Total: ₹" + amount.toFixed(2);
}

calculateBtn.addEventListener("click", calculateTotal);

price.addEventListener("input", calculateTotal);
quantity.addEventListener("input", calculateTotal);