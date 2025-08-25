function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function showFibonacci() {
  const num = Number(document.getElementById("num").value);
  let series = [];

  for (let i = 0; i < num; i++) {
    series.push(fibonacci(i));
  }

  document.getElementById("result").textContent =
    `Fibonacci Series (${num} terms): ${series.join(", ")}`;
}
