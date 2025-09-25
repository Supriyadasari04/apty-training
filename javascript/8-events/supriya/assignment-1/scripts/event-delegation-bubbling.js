"use strict";


const table = document.getElementById("myTable");
const tbody = document.createElement("tbody");

for (let row = 0; row < 10; row++) {
  const tr = document.createElement("tr");
  for (let col = 0; col < 10; col++) {
    const td = document.createElement("td");
    td.textContent = `${row},${col}`;
    td.dataset.row = row;
    td.dataset.col = col;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
table.appendChild(tbody);


function highlight(rowIndex, colIndex) {

  const row = table.rows[rowIndex];
  for (let cell of row.cells) {
    cell.style.backgroundColor = "lightblue";
  }


  for (let r = 0; r < table.rows.length; r++) {
    table.rows[r].cells[colIndex].style.backgroundColor = "lightblue";
  }
}

function removeHighlight(rowIndex, colIndex) {

  const row = table.rows[rowIndex];
  for (let cell of row.cells) {
    cell.style.backgroundColor = "";
  }

  for (let r = 0; r < table.rows.length; r++) {
    table.rows[r].cells[colIndex].style.backgroundColor = "";
  }
}
table.addEventListener("mouseover", (e) => {
  const cell = e.target.closest("td");
  if (!cell) return;
  const rowIndex = parseInt(cell.dataset.row, 10);
  const colIndex = parseInt(cell.dataset.col, 10);
  highlight(rowIndex, colIndex);
});

table.addEventListener("mouseout", (e) => {
  const cell = e.target.closest("td");
  if (!cell) return;
  const rowIndex = parseInt(cell.dataset.row, 10);
  const colIndex = parseInt(cell.dataset.col, 10);
  removeHighlight(rowIndex, colIndex);
});
