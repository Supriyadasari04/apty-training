// Sample array of numbers
const numbers = [5, 10, 15, 20, 25, 30];

// Display original array
document.getElementById("originalArray").textContent = numbers.join(", ");

// Higher-order function that takes a callback to filter the array
const filterNumbers = (arr, callback) => {
    return arr.filter(callback);
};

// Handle form submission
document.getElementById("filterForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form reload

    const limit = parseInt(document.getElementById("limit").value);

    // Arrow function used as the callback to filter values
    const result = filterNumbers(numbers, num => num <= limit);

    // Display filtered array
    document.getElementById("filteredArray").textContent = result.join(", ");
});
