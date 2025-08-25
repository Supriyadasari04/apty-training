function factorial() {
    const result = Number(document.getElementById("fact").value);
    let f = 1;
    let i = 1;
    let steps = "";

    if (isNaN(result) || result < 0) {
        document.getElementById("final").textContent = "Please enter a non-negative number.";
        return;
    }
    do {
        f *= i;
        steps += (i === 1) ? `${i}` : ` X ${i}`;
        i++;
    } while (i <= result);
    document.getElementById("final").innerHTML = `Calculation: ${steps} = ${f}<br><br>Final Result: ${result}! = ${f}`;
}