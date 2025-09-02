const frame = document.getElementById("myFrame");
const frameDoc = frame.contentDocument || frame.contentWindow.document;

const iframeHTML = `
  <html>
  <head>
    <style>
      body { font-family: Arial, sans-serif; margin: 10px; }
      table { width: 100%; border-collapse: collapse; }
      td { border: 1px solid #ccc; padding: 12px; text-align: center; }
      tr { transition: background 0.2s; }
      tr:hover { background: #f1f1f1; }
    </style>
  </head>
  <body>
    <table id="innerTable">
      <tbody>
        ${Array.from({ length: 10 }, (_, i) => `
          <tr><td>Row ${i + 1}</td></tr>
        `).join("")}
      </tbody>
    </table>
  </body>
  </html>
`;

frameDoc.open();
frameDoc.write(iframeHTML);
frameDoc.close();

const table = frameDoc.getElementById("innerTable");
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
