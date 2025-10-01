const nameArray = [
    [" S S S S "," U     U "," P P P P "," R R R R "," I "," Y     Y "," A A A A "],
    [" S       "," U     U "," P     P "," R     R "," I ","  Y   Y  "," A     A "],
    [" S S S S "," U     U "," P P P P "," R R R R "," I ","   Y Y   "," A A A A "],
    ["       S "," U     U "," P       "," R R     "," I ","    Y    "," A     A "],
    [" S S S S ","  U U U  "," P       "," R   R   "," I ","    Y    "," A     A "]
];

let finalName = "";
 
for(let row of nameArray){
    for(let letter of row){
        finalName += letter + "   ";
    }
    finalName += "\n";
}
console.log(finalName); 