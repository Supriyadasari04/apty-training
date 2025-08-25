function sumAll(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

function calculateSum() {
  const input = document.getElementById("numbers").value;
  const numArray = input
    .split(",")
    .map(n => Number(n.trim()))
    .filter(n => !isNaN(n));

  const result = sumAll(...numArray);

  document.getElementById("result").textContent = 
    `Sum of numbers: ${result}`;
}
