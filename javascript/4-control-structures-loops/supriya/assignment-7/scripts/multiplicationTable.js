function generateMulTable() {
    const result = Number(document.getElementById("num").value);
    let table = "";

    for (let i = 0; i <= 10; i++) {
        let t = result * i;
        table += `${result} × ${i} = ${t}<br>`;
    }

    document.getElementById("final").innerHTML = table; 
}
