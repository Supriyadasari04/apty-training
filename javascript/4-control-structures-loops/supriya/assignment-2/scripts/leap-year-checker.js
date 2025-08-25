function leapyearChecker(){
    const result = Number(document.getElementById("year").value);
    let leapyear;

    if (isNaN(result) || result <=0 ){
        leapyear = "Please enter a correct year";
    } else if (result % 4 == 0){
        leapyear = `It is a leap year! : ${year.value}`;
    } else{
        leapyear = `It is a NOT leap year! : ${year.value}`;
    }
    document.getElementById("final").textContent = leapyear;
}