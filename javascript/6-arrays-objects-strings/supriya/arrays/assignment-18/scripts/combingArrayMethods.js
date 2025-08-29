function processNumbers() {
  const input = document.getElementById("array1").value;
  const output = document.getElementById("output");

  try {
    const numbers = JSON.parse(input);

    if (!Array.isArray(numbers)||numbers.some(item=>typeof item!=='number')) {
      throw "Input must be a valid array of numbers.";
    }

    const result = numbers
      .filter(num => num % 2 === 0)
      .map(num => num * 2)
      .reduce((sum, num) => sum + num, 0);

    output.innerHTML = `Sum of doubled even numbers: ${result}`;
  } catch (err) {
    output.innerHTML = "Invalid input. Please enter a valid array like [1, 2, 3, 4]";
  }
}