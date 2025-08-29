function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique.sort((a, b) => a - b);
}  
function generate(){
    const inputArray=document.getElementById("arr").value;
    const arr = inputArray.split(",").map((item) => item.trim()).map(Number);
    const result = removeDuplicates(arr);
    document.getElementById("results").textContent=result;
}