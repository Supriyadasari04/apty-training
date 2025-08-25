function calculateGrade(){
    const marks = Number(document.getElementById("marks").value);
    let grade;

      if (isNaN(marks) || marks < 0 || marks > 100) {
        grade = "Please enter valid marks between 0 and 100.";
      } else if (marks >= 90) {
        grade = "Grade A";
      } else if (marks >= 75) {
        grade = "Grade B";
      } else if (marks >= 50) {
        grade = "Grade C";
      } else {
        grade = "Grade F";
      }

      document.getElementById("result").textContent = grade;
    }