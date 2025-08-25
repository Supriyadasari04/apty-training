
function parseJSON() {
  const input = document.getElementById('jsonInput').value;

  try {
    const parsed = JSON.parse(input);
    document.getElementById('output').textContent = "Parsed Object:\n" + JSON.stringify(parsed, null, 2);
  } catch (error) {
    let message = "Invalid JSON format.\n";

    if (!input.trim()) {
      message += "Input is empty.";
    } else if (!input.trim().startsWith("{") && !input.trim().startsWith("[")) {
      message += "JSON should start with '{' for objects or '[' for arrays.";
    } else if (input.includes("'")) {
      message += "Use double quotes (\") instead of single quotes (') for keys and strings.";
    } else if (!input.includes(":")) {
      message += "Missing colon (:) between keys and values.";
    } else {
      message += error.message;
    }

    document.getElementById('output').textContent = message;
  }
}
