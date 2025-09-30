"use strict";

const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const allBtn = document.getElementById("all-btn");

async function fetchProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=30");
    if (!res.ok) throw new Error("Unable to load products");
    const data = await res.json();
    return data.products;
  } catch (err) {
    productList.innerHTML = `<p class="error">${err.message}</p>`;
  }
}

async function searchProducts(query) {
  try {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    if (!res.ok) throw new Error("Search failed");
    const data = await res.json();
    return data.products;
  } catch (err) {
    productList.innerHTML = `<p class="error">${err.message}</p>`;
  }
}

async function getProduct(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Unable to fetch product details");
    return await res.json();
  } catch (err) {
    productDetails.innerHTML = `<p class="error">${err.message}</p>`;
  }
}

function renderProducts(products) {
  productDetails.classList.add("hidden");
  productList.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>$${p.price}</p>
    `;
    card.addEventListener("click", () => showProduct(p.id));
    productList.appendChild(card);
  });
}

async function showProduct(id) {
  const product = await getProduct(id);
  if (product) {
    productDetails.classList.remove("hidden");
    productDetails.innerHTML = `
      <h2>${product.title}</h2>
      <img src="${product.thumbnail}" alt="${product.title}">
      <p>${product.description}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Brand:</strong> ${product.brand}</p>
      <p><strong>Category:</strong> ${product.category}</p>
    `;
    window.scrollTo({ top: productDetails.offsetTop - 20, behavior: "smooth" });
  }
}

async function loadAllProducts() {
  const products = await fetchProducts();
  if (products) renderProducts(products);
}

async function handleSearch() {
  const query = searchInput.value.trim();
  if (!query) return;
  const products = await searchProducts(query);
  if (products) renderProducts(products);
}

searchBtn.addEventListener("click", handleSearch);
allBtn.addEventListener("click", loadAllProducts);

window.addEventListener("load", loadAllProducts);