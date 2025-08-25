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

    function findCity() {
      const inputName = document.getElementById("userInput").value.trim().toLowerCase();
      const output = document.getElementById("output");

      try {
        const city = users[inputName].address.city;
        output.textContent = `City: ${city}`;
      } catch (error) {
        output.textContent = "User not found or invalid data.";
      }
    }