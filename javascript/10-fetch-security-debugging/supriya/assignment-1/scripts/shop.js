"use strict";

const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const allProductsBtn = document.getElementById("all-products-btn");

async function fetchProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data.products;
  } catch (err) {
    productList.innerHTML = `<p>${err.message}</p>`;
  }
}

async function searchProducts(query) {
  try {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    if (!res.ok) throw new Error("Search failed");
    const data = await res.json();
    return data.products;
  } catch (err) {
    productList.innerHTML = `<p>${err.message}</p>`;
  }
}

async function getProduct(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    const data = await res.json();
    return data;
  } catch (err) {
    productDetails.innerHTML = `<p>${err.message}</p>`;
  }
}

function renderProducts(products) {
  productList.innerHTML = "";
  productDetails.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>$${p.price}</p>
    `;
    card.addEventListener("click", () => showProductDetails(p.id));
    productList.appendChild(card);
  });
}

async function showAllProducts() {
  const products = await fetchProducts();
  if (products) renderProducts(products);
}

async function searchHandler() {
  const query = searchInput.value.trim();
  if (!query) return;
  const products = await searchProducts(query);
  if (products) renderProducts(products);
}

async function showProductDetails(id) {
  const product = await getProduct(id);
  if (product) {
    productDetails.innerHTML = `
      <h2>${product.title}</h2>
      <img src="${product.thumbnail}" alt="${product.title}" style="width:300px">
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <p>Brand: ${product.brand}</p>
      <p>Category: ${product.category}</p>
    `;
  }
}

searchBtn.addEventListener("click", searchHandler);
allProductsBtn.addEventListener("click", showAllProducts);

showAllProducts();
