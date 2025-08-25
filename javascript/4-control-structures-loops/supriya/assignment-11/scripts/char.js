function charFrequency() {
    const str = document.getElementById("text").value;
    if (!str) {
      document.getElementById("final").textContent = "Please enter a string.";
      return;
    }
    const freq = {};
    for (let i in str) {
      const char = str[i];
      freq[char] = (freq[char] || 0) + 1;
    }
    let output = "Character Frequencies : \n";
    for (let key in freq) {
      output += `'${key}' → ${freq[key]} \n`;
    }
    document.getElementById("final").textContent = output;
}