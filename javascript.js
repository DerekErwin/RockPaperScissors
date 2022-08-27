console.log("Hello, World!")
    
function favoriteAnimal(animal) {
  console.log(animal + " is my favorite animal!")
}

favoriteAnimal('Goat')

function addTwo(numOne = 5, numTwo = 1) {
  console.warn(numOne + numTwo);
}

function myFunction() {
  let num = 3;
  return num;
}

console.log(myFunction());
// calls the function once

addTwo();
addTwo(4);
addTwo(2, 7);