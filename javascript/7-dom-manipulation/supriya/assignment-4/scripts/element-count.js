document.getElementById("countBtn").addEventListener("click", () => {
  const allElems = document.body.getElementsByTagName("*");
  const counts = {};
  for (let i = 0; i < allElems.length; i++) {
    const tag = allElems[i].tagName.toLowerCase();
    counts[tag] = (counts[tag] || 0) + 1;
  }
  const output = document.getElementById("output");
  output.innerHTML = "";
  for (const tag in counts) {
    const li = document.createElement("li");
    li.textContent = `${tag}: ${counts[tag]}`;
    output.appendChild(li);
  }
});
