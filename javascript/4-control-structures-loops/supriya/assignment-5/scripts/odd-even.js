function checkOddEven() {
      const num = Number(document.getElementById("number").value);

      if (isNaN(num)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
      }

      if (num % 2 === 0) {
        document.getElementById("result").textContent = `${num} is Even.`;
      } else {
        document.getElementById("result").textContent = `${num} is Odd.`;
      }
    }