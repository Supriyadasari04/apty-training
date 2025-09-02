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
      <td>
        <p id="para1">Paragraph with id=para1</p>
        <p id="para2">Paragraph with id=para2</p>
      </td>
      <td>
        <p class="sameClass">Paragraph 1 with class</p>
        <p class="sameClass">Paragraph 2 with class</p>
      </td>
      <td>
        <span>Span 1 text</span><br>
        <span>Span 2 text</span><br>
      </td>
      <td>
        <input type="text" name="user1" value="User One"><br>
        <input type="text" name="user2" value="User Two"><br>
      </td>
      <td>
        <p custom-attr="first">Custom attribute element 1</p>
        <p custom-attr="second">Custom attribute element 2</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const host = document.getElementById("shadow-host");
const shadowRoot = host.attachShadow({ mode: "open" });
shadowRoot.innerHTML = assignment1Content;

document.getElementById("btnId").addEventListener("click", () => {
  const para = shadowRoot.getElementById("para1");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  para.style.color = randomColor;
});

document.getElementById("btnClass").addEventListener("click", () => {
  const elems = shadowRoot.getElementsByClassName("sameClass");
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.toggle("highlight");
  }
});

document.getElementById("btnTag").addEventListener("click", () => {
  const spans = shadowRoot.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = "Updated span text " + (i + 1);
  }
});

document.getElementById("btnName").addEventListener("click", () => {
  const inputs = [
    ...shadowRoot.getElementsByName("user1"),
    ...shadowRoot.getElementsByName("user2")
  ];
  inputs.forEach(input => {
    input.disabled = !input.disabled;
  });
});

document.getElementById("btnAttr").addEventListener("click", () => {
  const elem = shadowRoot.querySelector("[custom-attr='first']");
  elem.setAttribute("new-attr", "addedValue");
  alert("New attribute added inside shadowDOM!");
});
