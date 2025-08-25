function repeatAction(action, n) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function generateList() {
  const count = parseInt(document.getElementById("count").value, 10);
  const content = document.getElementById("content").value.trim();
  const list = document.getElementById("list");

  list.innerHTML = "";

  if (isNaN(count) || count <= 0 || content === "") {
    list.innerHTML = "<li>Please enter a valid number and content.</li>";
    return;
  }

  repeatAction((i) => {
    const li = document.createElement("li");
    li.textContent = `${content} ${i + 1}`;
    list.appendChild(li);
  }, count);
}
