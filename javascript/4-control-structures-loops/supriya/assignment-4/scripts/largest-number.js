function calculateLargestNumber() {
      const n1 = Number(document.getElementById("firstNumber").value);
      const n2 = Number(document.getElementById("secondNumber").value);
      const n3 = Number(document.getElementById("thirdNumber").value);

      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById("final").textContent = "Please enter all three numbers.";
        return;
      }
      if (n1 === n2 && n2 === n3) {
        document.getElementById("final").textContent = "All three numbers are equal.";
        return;
      }
      if (n1 === n2 && n1 > n3) {
        document.getElementById("final").textContent = `The largest numbers are ${n1} and ${n2} (equal).`;
        return;
      }
      if (n1 === n3 && n1 > n2) {
        document.getElementById("final").textContent = `The largest numbers are ${n1} and ${n3} (equal).`;
        return;
      }
      if (n2 === n3 && n2 > n1) {
        document.getElementById("final").textContent = `The largest numbers are ${n2} and ${n3} (equal).`;
        return;
      }
      let largest = Math.max(n1, n2, n3);
      document.getElementById("final").textContent = `The largest number is: ${largest}`;
    }