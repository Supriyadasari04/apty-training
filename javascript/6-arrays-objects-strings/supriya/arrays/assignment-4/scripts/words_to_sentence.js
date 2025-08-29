function wordsToSentence() {
  const input = document.getElementById("wordInput").value;
  const output = document.getElementById("result");
  try {
    const words = JSON.parse(input);
    if (!Array.isArray(words)) {
      output.textContent = "Please enter a valid array of words.";
      return;
    }
    let sentence = words.join(" ").trim();
    if (sentence.length === 0) {
      output.textContent = "Empty sentence.";
      return;
    }
    let capitalized = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    output.textContent = capitalized + ".";
  } catch {
    output.textContent = "Invalid input. Use valid JSON array format like: [\"hello\", \"world\"]";
  }
}