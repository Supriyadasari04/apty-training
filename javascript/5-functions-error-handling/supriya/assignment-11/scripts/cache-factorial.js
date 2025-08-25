// Closure to create a factorial calculator with caching
const factorialWithCache = (function () {
  const cache = {}; // private cache object

  function factorial(n) {
    if (n === 0 || n === 1) return 1;

    // Check cache first
    if (cache[n]) {
      console.log(`Fetching from cache: ${n}! = ${cache[n]}`);
      return cache[n];
    }

    // Compute if not cached
    console.log(`Computing factorial of ${n}`);
    let result = n * factorial(n - 1);

    // Store in cache
    cache[n] = result;
    return result;
  }

  return factorial;
})();

// Function connected to the button
function calculateFactorial() {
  const num = parseInt(document.getElementById("num").value, 10);

  if (isNaN(num) || num < 0) {
    document.getElementById("output").textContent = "Please enter a valid non-negative integer.";
    return;
  }

  const result = factorialWithCache(num);
  document.getElementById("output").textContent = `${num}! = ${result}`;
}
