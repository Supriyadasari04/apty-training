const factorialWithCache = (function () {
  const cache = {};

  function factorial(n) {
    if (n === 0 || n === 1) return 1;

    if (cache[n]) {
      console.log(`Fetching from cache: ${n}! = ${cache[n]}`);
      return cache[n];
    }

    console.log(`Computing factorial of ${n}`);
    let result = n * factorial(n - 1);

    cache[n] = result;
    return result;
  }

  return factorial;
})();
function calculateFactorial() {
  const num = parseInt(document.getElementById("num").value, 10);

  if (isNaN(num) || num < 0) {
    document.getElementById("output").textContent = "Please enter a valid non-negative integer.";
    return;
  }

  const result = factorialWithCache(num);
  document.getElementById("output").textContent = `${num}! = ${result}`;
}
