function measurePerformance() {
  const input = document.getElementById("userInput").value;
  const output = document.getElementById("results");
  output.innerHTML = "";

  let arr;
  try {
    arr = JSON.parse(input);
    if (!Array.isArray(arr)) throw "Not an array";
  } catch {
    output.innerHTML = "Please enter a valid JSON array of numbers.";
    return;
  }

  let t1, t2;
  t1 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i] * 2;
  }
  t2 = performance.now();
  output.innerHTML += `For loop: ${(t2 - t1).toFixed(4)} ms<br>`;

  t1 = performance.now();
  for (const num of arr) {
    let x = num * 2;
  }
  t2 = performance.now();
  output.innerHTML += `For...of loop: ${(t2 - t1).toFixed(4)} ms<br>`;

  t1 = performance.now();
  arr.forEach(num => {
    let x = num * 2;
  });
  t2 = performance.now();
  output.innerHTML += `forEach loop: ${(t2 - t1).toFixed(4)} ms<br>`;
}