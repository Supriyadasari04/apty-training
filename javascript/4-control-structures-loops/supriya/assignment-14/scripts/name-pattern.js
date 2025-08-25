 const nameArray = [
    ["P P P P P","   A   ","N       N","D D D D D","U       U"],
    ["P       P"," A   A ","N N     N","D       D","U       U"],
    ["P P P P P","A A A A","N   N   N","D       D","U       U"],
    ["P        ","A     A","N     N N","D       D","U       U"],
    ["P        ","A     A","N       N","D D D D D","U U U U U"]
];
let finalName = "";
 
for(let row of nameArray){
    for(let letter of row){
        finalName += letter + "   ";
    }
    finalName += "\n";
}
console.log(finalName); 