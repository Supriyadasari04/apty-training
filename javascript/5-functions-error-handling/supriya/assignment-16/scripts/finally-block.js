const users = {
  lucky: {
    address: {
      city: "Hyderabad"
    }
  },
  rahul: {
    address: {
      city: "Delhi"
    }
  }
};

const default_city = "Pune";

function findCity() {
  const inputName = document.getElementById("userInput").value.trim().toLowerCase();
  const output = document.getElementById("output");
  const defaultOutput = document.getElementById("defaultCity");

  try {
    const city = users[inputName].address.city;
    output.textContent = `City: ${city}`;
    defaultOutput.textContent = ""; 
  } catch (error) {
    output.textContent = "User not found or invalid data.";
  } finally {
    defaultOutput.textContent = `Default city: ${default_city}`;
  }
}