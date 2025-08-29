let person = {
  name: 'John',
  sayName() {
    return this.name;
  }
};

let employee = Object.create(person);
employee.job = 'Chemist';
employee.greet = function() {
  return `Hello, ${this.sayName()} the ${this.job}!`;
};

function showGreeting() {
  document.getElementById("output").textContent = employee.greet();
}