// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// nestedFunction has access to internal because it is nested inside of myFunction and as such has access to myFunction variables through closure. However, because closure only passes information down / inward and not outward / up in scope, myFunction would not have access to variables in side of nestedFunction due to lexical scope.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */



function summation(param) {
  let inc = 0;
  for (let i = 1; i <= param; i++) {
    inc = inc + i;
  }
  return inc;
}

console.log(summation(4));