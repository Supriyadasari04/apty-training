function outerFunction(word1) {
  function middleFunction(word2) {
    function innerFunction(word3) {
      // inner function has access to word1 and word2 too
      return `${word1} ${word2} ${word3}`;
    }
    return innerFunction;
  }
  return middleFunction;
}

function showMessage() {
  const w1 = document.getElementById("word1").value || "Hello";
  const w2 = document.getElementById("word2").value || "from";
  const w3 = document.getElementById("word3").value || "Lexical Scope";

  // call nested functions
  const result = outerFunction(w1)(w2)(w3);

  document.getElementById("output").textContent = result;
}
