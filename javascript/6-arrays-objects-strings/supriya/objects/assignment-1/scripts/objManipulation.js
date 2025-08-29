let object={};
function convertObject(){
    const key=document.getElementById("userKey").value.trim();
    const value=document.getElementById("userValue").value;

     if (key === "") {
    document.getElementById("result").textContent = "Key cannot be empty.";
    return;
  }
   object[key]=value;
   document.getElementById("result").textContent = JSON.stringify(object);
}