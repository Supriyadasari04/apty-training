function withdrawAmount(balance, amount) {
  if (typeof balance !== "number" || typeof amount !== "number" || isNaN(balance) || isNaN(amount)) {
    throw { errorCode: 100, errorMessage: "Invalid input. Please enter numbers only." };
  }

  if (amount <= 0) {
    throw { errorCode: 101, errorMessage: "Withdrawal amount must be greater than 0." };
  }

  if (amount > balance) {
    throw { errorCode: 102, errorMessage: "Insufficient balance." };
  }

  return balance - amount;
}

function handleWithdrawal() {
  const balanceInput = document.getElementById("balance").value.trim();
  const withdrawInput = document.getElementById("withdraw").value.trim();
  const resultBox = document.getElementById("result");

  try {
    const balance = parseFloat(balanceInput);
    const amount = parseFloat(withdrawInput);
    const newBalance = withdrawAmount(balance, amount);
    resultBox.textContent = `Withdrawal successful. New Balance: ₹${newBalance}`;
  } catch (error) {
    resultBox.textContent = `Error (${error.errorCode}): ${error.errorMessage}`;
  }
}