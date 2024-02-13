let products = [];

function addProduct() {
    let idInput = document.getElementById("proId");
    let nameInput = document.getElementById("proName");
    let priceInput = document.getElementById("proPrice");

    let id = idInput.value;
    let name = nameInput.value;
    let price = priceInput.value;

    if (!isValidInput(id, name, price)) {
        alert("Invalid input. Please try again with valid values.");
        return;
    }
    price = parseFloat(price);
    if (isIdUnique(id)) {
        products.push({ id, name, price });
        displayProducts();
        idInput.value = "";
        nameInput.value = "";
        priceInput.value = "";
    } else {
        alert("ID must be unique. Please enter a unique ID.");
    }
}

function isValidInput(id, name, price) {
    return isNumeric(price) && typeof name === 'string';
}

function isNumeric(value) {
    return !isNaN(parseFloat(value));
}

function isIdUnique(id) {
    return !products.some(product => product.id === id);
}

function displayProducts() {
    let proList = document.getElementById("productList");
    proList.innerHTML = "";  

    products.forEach((product, index) => {
        let proInfo = document.createElement("div");
        proInfo.className = "product-info";

        let proId = document.createElement("p");
        proId.textContent = `Product ID: ${product.id}`;

        let proName = document.createElement("p");
        proName.textContent = `Product Name: ${product.name}`;

        let proPrice = document.createElement("p");
        proPrice.textContent = `Product Price: ${product.price}`;

        proInfo.appendChild(proId);  
        proInfo.appendChild(proName);
        proInfo.appendChild(proPrice);
        proList.appendChild(proInfo);

        if (index < products.length - 1) {
            let separatorLine = document.createElement("hr");
            proList.appendChild(separatorLine);
        }
    });
}
