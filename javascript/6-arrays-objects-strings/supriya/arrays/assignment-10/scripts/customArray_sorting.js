function sortObjects() {
  let input = document.getElementById("inputData").value;
  let output = document.getElementById("results");
  output.innerHTML = "";

  try {
    const students = JSON.parse(input);

    students.sort(function(a, b) {
      return b.score - a.score;
    });

    students.forEach(function(student) {
      output.innerHTML += student.name + " - " + student.score + "<br>";
    });
  } catch {
    output.innerHTML = "Invalid JSON input.";
  }
}
 