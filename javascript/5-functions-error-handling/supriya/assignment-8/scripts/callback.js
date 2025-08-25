function defaultCallback(str = "hello") {
  return str.toUpperCase();
}

function processString(input, callback = defaultCallback) {
  return callback(input);
}

function processInput() {
  const userInput = document.getElementById("userInput").value;

  const result = processString(userInput || undefined);

  document.getElementById("result").textContent = `Processed String: ${result}`;
}
