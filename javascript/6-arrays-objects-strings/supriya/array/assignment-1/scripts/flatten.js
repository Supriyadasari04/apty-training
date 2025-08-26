function customFlatten(arr) {
  let result = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(customFlatten(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

function flattenArray() {
  const input = document.getElementById("arrayInput").value;
  const output = document.getElementById("output");

  try {
    const parsed = JSON.parse(input);
    if (!Array.isArray(parsed)) {
      output.textContent = "Invalid input. Please enter a valid nested array using square brackets.";
      return;
    }
    const flattened = customFlatten(parsed);
    output.textContent = `[ ${flattened.join(", ")} ]`;
  } catch {
    output.textContent = "Invalid input. Please enter a valid nested array using square brackets.";
  }
}