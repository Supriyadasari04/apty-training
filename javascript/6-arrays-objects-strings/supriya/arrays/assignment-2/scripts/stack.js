let stack = [];
function pushToStack() {
  const value = document.getElementById("stackInput").value;
  stack.push(value);
  document.getElementById("output").innerHTML = `Pushed: ${value}<br><br>Current Stack:<br>${stack.slice().reverse().join("<br>")}`;
}
function popFromStack() {
  if (stack.length === 0) {
    document.getElementById("output").innerHTML = "Stack is empty. Nothing to pop.";
  } else {
    const popped = stack.pop();
    document.getElementById("output").innerHTML = `Popped: ${popped}<br><br>Current Stack:<br>${stack.slice().reverse().join("<br>")}`;
  }
}
function peekStack() {
  if (stack.length === 0) {
    document.getElementById("output").innerHTML = "Stack is empty. No top element.";
  } else {
    document.getElementById("output").innerHTML = `Top Element: ${stack[stack.length - 1]}<br><br>Current Stack:<br>${stack.slice().reverse().join("<br>")}`;
  }
}
function checkEmpty() {
  if (stack.length === 0) {
    document.getElementById("output").innerHTML = "Stack is empty.";
  } else {
    document.getElementById("output").innerHTML = `Stack is not empty.<br><br>Current Stack:<br>${stack.slice().reverse().join("<br>")}`;
  }
}