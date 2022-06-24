function logger() {
  console.log("My name is Trina");
}
//calling, running or invoking the function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(3, 2); //passing arguments (values)to be assigned to the parameters

//called the function with 2 arguments; result of calling the function will be the juice value which needs to be saved (appleJuice variable)
console.log(appleJuice);

//dry code - don't repeat yourself; functions important to avoid repeating yourself because we can use the functions over and over

//function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(1982);
console.log(age1);

//function expression; expressions produce values
//anonymous function saved to a variable
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

//arrow functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1982);
console.log(age3);
