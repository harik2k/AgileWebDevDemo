var numberOfStudentsEjected = 0;



function sayHi(){  
    alert('Hi2');
  }  

  function ejectStudent(n) {
  //  let rec = factorial(n-1);
    numberOfStudentsEjected += 1;
    displayNumberOfStudentsEjected();
  }

  //displayNumberOfStudentsEjected(); <<this is a problem because you are calling the function before its made, OUTSIDE a function

function displayNumberOfStudentsEjected() {
    alert("Number of students: " + numberOfStudentsEjected);

}