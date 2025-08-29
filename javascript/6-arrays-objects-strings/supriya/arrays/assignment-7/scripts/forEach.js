function generate() {
  const objectInput = document.getElementById("objectInput").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; 

  try {
    const parsedArray = JSON.parse(objectInput);
    resultsDiv.innerHTML += `<strong>Stringified Input:</strong><br>${JSON.stringify(parsedArray)}<br><br>`;
    parsedArray.forEach(user => {
      resultsDiv.innerHTML += `${user.name} is ${user.age} years old.<br>`;
    });

  } catch (error) {
    resultsDiv.textContent = "Invalid JSON format. Use double quotes around keys and strings.";
  }
}