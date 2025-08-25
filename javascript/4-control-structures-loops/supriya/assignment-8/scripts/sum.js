function generateSum() {
    const result = Number(document.getElementById("sum").value);
    let s = 0;
    let i = 1;

    while (i <= result) {
        s += i;
        i++;
    }

    document.getElementById("final").textContent = `Sum of 1 to ${result} = ${s}`;
}
