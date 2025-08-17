function showDataTypes() {
  let str = "Hello World";       
  let num = 42;                  
  let bool = true;                
  let undef;                        
  let nothing = null;             
  let sym = Symbol("id");           
  let obj = { name: "Supriya" };    
  alert("String: Value = " + str + ", Type = " + typeof str);
  alert("Number: Value = " + num + ", Type = " + typeof num);
  alert("Boolean: Value = " + bool + ", Type = " + typeof bool);
  alert("Undefined: Value = " + undef + ", Type = " + typeof undef);
  alert("Null: Value = " + nothing + ", Type = " + typeof nothing);
  alert("Symbol: Value = " + sym.toString() + ", Type = " + typeof sym);
  alert("Object: Value = " + JSON.stringify(obj) + ", Type = " + typeof obj);
}
