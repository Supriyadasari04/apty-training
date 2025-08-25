let count = 0;
const incrementCounter = () => {
  count++;
  document.getElementById("count").textContent = count;
};

document.getElementById("incrementBtn").addEventListener("click", incrementCounter);
