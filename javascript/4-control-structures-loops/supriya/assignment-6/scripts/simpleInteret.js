function calculateInterest() {
      const principal = Number(document.getElementById("principal").value);
      const rate = Number(document.getElementById("rate").value);
      const time = Number(document.getElementById("time").value);

      if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("result").textContent = "Please enter valid positive values.";
        return;
      }

      const interest = (principal * rate * time) / 100;

      document.getElementById("result").textContent = `Simple Interest = ₹${interest.toFixed(2)}`;
    }