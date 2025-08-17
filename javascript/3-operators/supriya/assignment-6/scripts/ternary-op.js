function checkAge() {
  let firstName = document.getElementById("firstname").value
  let lastName = document.getElementById("lastname").value
  let age = Number(document.getElementById("age").value)
  let fullName = `${firstName} ${lastName}`

  let message = (age >= 18) 
    ? `Hello ${fullName}, welcome to Apty!`
    : `Hello ${fullName}, comeback after ${18 - age} years.`

  document.getElementById("result").textContent = message
}
