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
