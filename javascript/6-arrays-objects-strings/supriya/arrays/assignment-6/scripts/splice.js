function generateArray(){
    const input = document.getElementById("array").value;
    let arr = input.split(',').map(item => item.trim());
    document.getElementById("results").innerHTML="";
    document.getElementById("results").innerHTML+=`<br><br>The original array is : <h2>${arr}</h2><br><br>`;

    let arr1=arr.splice(1,1,"purple");

    document.getElementById("results").innerHTML+=`The array after Replacing "blue" with "purple" is : <h2>${arr}</h2><br><br>`;

    let arr2=arr.splice(4,0,"orange");

    document.getElementById("results").innerHTML+=`The array after Adding "orange" after "yellow" is : <h2>${arr}</h2><br><br>`;

    let arr3=arr.splice(2,1);

    document.getElementById("results").innerHTML+=`The array after Removing "green" is : <h2>${arr}</h2><br><br>`;
}