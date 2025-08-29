function generate() {
  const input = document.getElementById("studentInput").value;
  const results = document.getElementById("results");
  results.innerHTML = "";

  try {
    let arr = JSON.parse(input);

    if (arr.every(student => student.score >= 35)) {
      results.innerHTML = `All Students Passed`;
    }

    if (arr.some(student => student.score < 35)) {
      results.innerHTML = `Some Students Failed`;
    }

  } catch (e) {
    results.textContent = "Invalid input. Please enter a valid JSON array.";
  }
}