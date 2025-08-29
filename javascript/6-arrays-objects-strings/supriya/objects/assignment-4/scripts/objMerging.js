function mergeObjects() {
  let obj1 = JSON.parse(document.getElementById("obj1").value || "{}");
  let obj2 = JSON.parse(document.getElementById("obj2").value || "{}");

  let result = {};

  for (let key in obj1) {
    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      result[key] = { ...obj1[key], ...obj2[key] };
    } else {
      result[key] = obj1[key];
    }
  }

  for (let key in obj2) {
    if (!result.hasOwnProperty(key)) {
      result[key] = obj2[key];
    }
  }

  document.getElementById("output").innerHTML = JSON.stringify(result);
}