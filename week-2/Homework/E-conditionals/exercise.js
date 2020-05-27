/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";

function DanielStatus (name , danielsRole) {

  if (name === "Daniel" && danielsRole === "mentor") {
      return "Hi, I'm Daniel, I'm a mentor.";
  }

  else if (name === "Daniel" && danielsRole === "student"){
      return "Hi, I'm Daniel, I'm a student.";
  }
}

// const message = DanielStatus ("Daniel", "mentor");
// console.log(message);
// or
console.log(DanielStatus ("Daniel", "mentor"));
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
