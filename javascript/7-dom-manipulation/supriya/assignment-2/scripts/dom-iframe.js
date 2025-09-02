const assignment1Content = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 10px;
      text-align: center;
    }
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <th>id</th>
      <th>className</th>
      <th>tag</th>
      <th>name</th>
      <th>attribute</th>
    </tr>
    <tr>
      <!-- Column id -->
      <td>
        <p id="para1">Paragraph with id=para1</p>
        <p id="para2">Paragraph with id=para2</p>
      </td>

      <!-- Column className -->
      <td>
        <p class="sameClass">Paragraph 1 with class</p>
        <p class="sameClass">Paragraph 2 with class</p>
      </td>

      <!-- Column tag -->
      <td>
        <span>Span 1 text</span><br>
        <span>Span 2 text</span><br>
      </td>

      <!-- Column name -->
      <td>
        <input type="text" name="user1" value="User One"><br>
        <input type="text" name="user2" value="User Two"><br>
      </td>

      <!-- Column attribute -->
      <td>
        <p custom-attr="first">Custom attribute element 1</p>
        <p custom-attr="second">Custom attribute element 2</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const iframe = document.getElementById("myFrame");
iframe.srcdoc = assignment1Content;

iframe.onload = function () {
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  document.getElementById("btnId").addEventListener("click", () => {
    const para = iframeDoc.getElementById("para1");
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    para.style.color = randomColor;
  });
  document.getElementById("btnClass").addEventListener("click", () => {
    const elems = iframeDoc.getElementsByClassName("sameClass");
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.toggle("highlight");
    }
  });
  document.getElementById("btnTag").addEventListener("click", () => {
    const spans = iframeDoc.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      spans[i].innerHTML = "Updated span text " + (i + 1);
    }
  });
  document.getElementById("btnName").addEventListener("click", () => {
    const inputs = [
      ...iframeDoc.getElementsByName("user1"),
      ...iframeDoc.getElementsByName("user2")
    ];
    inputs.forEach(input => {
      input.disabled = !input.disabled;
    });
  });

  document.getElementById("btnAttr").addEventListener("click", () => {
    const elem = iframeDoc.querySelector("[custom-attr='first']");
    elem.setAttribute("new-attr", "addedValue");
    alert("New attribute added to first element inside iframe!");
  });
};
