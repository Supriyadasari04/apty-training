function generateArray(){
    const input = document.getElementById("array").value;
    let arr = input.split(',').map(item => item.trim());
    document.getElementById("results").innerHTML="";
    let arr1=arr.slice(0,3);

    let arr2=arr.slice(-2);

    document.getElementById("results").innerHTML+=`<br><br>The original array is <h2>${arr}</h2><br><br>`;


    document.getElementById("results").innerHTML+=`The first three elements copy is <h2>${arr1}</h2><br><br>`;


    document.getElementById("results").innerHTML+=`The last two elements copy is <h2>${arr2}</h2><br><br>`;
}