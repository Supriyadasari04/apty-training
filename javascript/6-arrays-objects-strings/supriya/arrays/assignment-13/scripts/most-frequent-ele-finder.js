function findMostFrequent() {
  const input = document.getElementById("arrayInput").value;
  const arr = input.split(",").map(Number);

  const counts = {};
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  let max = 0;
  let mostFrequent;

  for (let num in counts) {
    if (counts[num] > max) {
      max = counts[num];
      mostFrequent = num;
    }
  }

  document.getElementById("result").textContent =
    "Most frequent number is: " + mostFrequent;
}