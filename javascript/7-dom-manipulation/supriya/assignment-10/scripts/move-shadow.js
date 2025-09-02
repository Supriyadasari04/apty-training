const host = document.getElementById("shadow-host");
const shadow = host.attachShadow({ mode: "open" });

const shadowHTML = `
  <style>
    table { width: 100%; border-collapse: collapse; }
    td { border: 1px solid #ccc; padding: 12px; text-align: center; }
    tr { transition: background 0.2s; }
    tr:hover { background: #f1f1f1; }
    button { margin: 2px; padding: 5px 10px; cursor: pointer; }
  </style>
  <table id="innerTable">
    <tbody>
      ${Array.from({ length: 10 }, (_, i) => `
        <tr>
          <td>Row ${i + 1}</td>
          <td>
            <button class="row-up">Up</button>
            <button class="row-down">Down</button>
            <button class="row-top">Top</button>
            <button class="row-bottom">Bottom</button>
          </td>
        </tr>
      `).join("")}
    </tbody>
  </table>
`;

shadow.innerHTML = shadowHTML;

const table = shadow.getElementById("innerTable");
let selectedRow = table.rows[0];

table.addEventListener("click", (e) => {
  if (e.target.tagName === "TD") {
    Array.from(table.rows).forEach(r => r.style.background = "");
    selectedRow = e.target.parentElement;
    selectedRow.style.background = "#d1ecf1";
  }
});

document.getElementById("up").addEventListener("click", () => {
  if (selectedRow && selectedRow.previousElementSibling) {
    table.tBodies[0].insertBefore(selectedRow, selectedRow.previousElementSibling);
  }
});

document.getElementById("down").addEventListener("click", () => {
  if (selectedRow && selectedRow.nextElementSibling) {
    table.tBodies[0].insertBefore(selectedRow.nextElementSibling, selectedRow);
  }
});

document.getElementById("top").addEventListener("click", () => {
  if (selectedRow) {
    table.tBodies[0].insertBefore(selectedRow, table.tBodies[0].firstElementChild);
  }
});

document.getElementById("bottom").addEventListener("click", () => {
  if (selectedRow) {
    table.tBodies[0].appendChild(selectedRow);
  }
});
