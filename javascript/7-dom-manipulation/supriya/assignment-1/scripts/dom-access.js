function changeColorById() {
  const para = document.getElementById("para1");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  para.style.color = randomColor;
}

function toggleClassBackground() {
  const elems = document.getElementsByClassName("sameClass");
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.toggle("highlight");
  }
}

function changeSpans() {
  const spans = document.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = "Updated span text " + (i + 1);
  }
}

function toggleDisableInputs() {
  const inputs = document.getElementsByName("user1").concat(document.getElementsByName("user2"));
  inputs.forEach(input => {
    input.disabled = !input.disabled;
  });
}

NodeList.prototype.concat = function(other) {
  return [...this, ...other];
};

function addNewAttribute() {
  const elem = document.querySelector("[custom-attr='first']");
  elem.setAttribute("new-attr", "addedValue");
  alert("New attribute added to first element!");
}
