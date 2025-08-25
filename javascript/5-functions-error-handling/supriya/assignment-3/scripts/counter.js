let count = 0;

// Arrow function for handling button click
const incrementCounter = () => {
  count++;
  document.getElementById("count").textContent = count;
};

document.getElementById("incrementBtn").addEventListener("click", incrementCounter);
