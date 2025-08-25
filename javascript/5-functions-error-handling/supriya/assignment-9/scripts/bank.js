// Bank Account using Closure
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance; // private variable

  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited ₹${amount}.`;
      }
      return "Enter a valid amount to deposit.";
    },

    withdraw: function(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrew ₹${amount}.`;
      } else if (amount > balance) {
        return "Insufficient balance!";
      }
      return "Enter a valid amount to withdraw.";
    },

    checkBalance: function() {
      return `Current Balance: ₹${balance}`;
    }
  };
}

// Create one bank account instance
const myAccount = createBankAccount(1000); // starts with ₹1000

function handleAction() {
  const action = document.getElementById("action").value;
  const amount = Number(document.getElementById("amount").value);
  let result = "";

  switch (action) {
    case "deposit":
      result = myAccount.deposit(amount);
      break;
    case "withdraw":
      result = myAccount.withdraw(amount);
      break;
    case "check":
      result = myAccount.checkBalance();
      break;
    default:
      result = "Invalid action.";
  }

  document.getElementById("output").textContent = result;
}
