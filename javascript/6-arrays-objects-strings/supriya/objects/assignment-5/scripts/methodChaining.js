class Person {
  constructor() {
    this.name = '';
    this.age = 0;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  setAge(age) {
    this.age = age;
    return this;
  }
  greet() {
    const message = `Hello, I am ${this.name}, ${this.age} years old.`;
    document.getElementById("output").textContent = message;
    return this;
  }
}
function runChaining() {
  new Person().setName('Jenny').setAge(60).greet();
}