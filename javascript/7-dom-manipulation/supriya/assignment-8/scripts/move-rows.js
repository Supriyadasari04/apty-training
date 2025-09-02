const table = document.getElementById("myTable");

table.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const row = e.target.closest("tr");
  const tbody = table.querySelector("tbody");

  if (e.target.classList.contains("up") && row.previousElementSibling) {
    tbody.insertBefore(row, row.previousElementSibling);
  }

  if (e.target.classList.contains("down") && row.nextElementSibling) {
    tbody.insertBefore(row.nextElementSibling, row);
  }

  if (e.target.classList.contains("top")) {
    tbody.insertBefore(row, tbody.firstElementChild);
  }

  if (e.target.classList.contains("bottom")) {
    tbody.appendChild(row);
  }
});
