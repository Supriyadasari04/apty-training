// Higher-Order Function: executes a given function n times
function repeatAction(action, n) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// Main function to generate list
function generateList() {
  const count = parseInt(document.getElementById("count").value, 10);
  const content = document.getElementById("content").value.trim();
  const list = document.getElementById("list");

  // Clear old list
  list.innerHTML = "";

  if (isNaN(count) || count <= 0 || content === "") {
    list.innerHTML = "<li>Please enter a valid number and content.</li>";
    return;
  }

  // Use higher-order function
  repeatAction((i) => {
    const li = document.createElement("li");
    li.textContent = `${content} ${i + 1}`;
    list.appendChild(li);
  }, count);
}
