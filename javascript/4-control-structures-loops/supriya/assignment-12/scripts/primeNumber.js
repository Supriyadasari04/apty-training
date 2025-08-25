function findPrimes() {
  const start = Number(document.getElementById("start").value);
  const end = Number(document.getElementById("end").value);
  let primes = [];
  if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
    document.getElementById("final").textContent = "Please enter a valid range (≥2, start ≤ end).";
    return;
  }
  for (let num = start; num <= end; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  document.getElementById("final").textContent = 
    primes.length > 0 ? `Prime numbers between ${start} and ${end}: ${primes.join(", ")}` : `No prime numbers found in this range.`;
}