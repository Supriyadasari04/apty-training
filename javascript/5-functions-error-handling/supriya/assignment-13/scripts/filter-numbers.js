const numbers = [5, 10, 15, 20, 25, 30];

document.getElementById("originalArray").textContent = numbers.join(", ");

const filterNumbers = (arr, callback) => {
    return arr.filter(callback);
};

document.getElementById("filterForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const limit = parseInt(document.getElementById("limit").value);

    const result = filterNumbers(numbers, num => num <= limit);

    document.getElementById("filteredArray").textContent = result.join(", ");
});
