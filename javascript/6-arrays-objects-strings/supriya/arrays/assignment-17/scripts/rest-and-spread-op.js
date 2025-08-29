function combineArrays() {
  const array1Input = document.getElementById("array1").value;
  const array2Input = document.getElementById("array2").value;
  const outputDiv = document.getElementById("output");

  try {
    const arr1 = JSON.parse(array1Input);
    const arr2 = JSON.parse(array2Input);

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      throw "Both inputs must be valid arrays.";
    }

    const combined = [...new Set([...arr1, ...arr2])];

    outputDiv.innerHTML = `Combined Array: [${combined.join(", ")}]`;
  } catch (error) {
    outputDiv.innerHTML = "Invalid input. Please enter valid arrays like [1, 2, 3]";
  }
}