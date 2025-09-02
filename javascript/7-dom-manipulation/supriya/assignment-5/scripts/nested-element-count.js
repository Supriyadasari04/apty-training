document.getElementById("countBtn").addEventListener("click", () => {
  const parents = document.body.children;
  const output = document.getElementById("output");
  output.innerHTML = "";
  for (let i = 0; i < parents.length; i++) {
    const parent = parents[i];
    if (parent.id && parent.id.startsWith("parent")) {
      const nestedCount = parent.getElementsByTagName("*").length;
      const li = document.createElement("li");
      li.textContent = `${parent.tagName.toLowerCase()}#${parent.id}: ${nestedCount} nested elements`;
      output.appendChild(li);
    }
  }
});
