// Default callback function: Converts string to uppercase
function defaultCallback(str = "hello") {
  return str.toUpperCase();
}

// Main function accepts user input and a callback
function processString(input, callback = defaultCallback) {
  return callback(input);
}

function processInput() {
  const userInput = document.getElementById("userInput").value;

  // Call main function with input (defaults if empty)
  const result = processString(userInput || undefined);

  document.getElementById("result").textContent = `Processed String: ${result}`;
}
