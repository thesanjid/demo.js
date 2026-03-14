/*let a= 1
let b=2 
a=5 

 console.log(a+b);*/

let x=5 
let y=6
let z=10 
console.log(x-y+z)
function hello (){
    console.log("hello world") 

}
hello()

function isUserLoggedIn(isLoggedIn) {
  if (isLoggedIn) {
    return "User is logged in";
  } else {
    return "Please log in first";
  }
}

console.log(isUserLoggedIn(true));




function isEven(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

console.log(isEven(7)); // Odd


function isEven(number) {
  if (number % 3 === 0) {
    return "Even";
  }
  return "Odd";
}

console.log(isEven(7)); // Odd

const greet = (name) => {
  return "Hello " + name;
};

console.log(greet("Sanjid"));
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Example
console.log(celsiusToFahrenheit(25)); // 77°F
function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Example
console.log(capitalizeFirstLetter("javascript")); 
// Javascript


// Example
console.log(formatDate("2026-03-10"));
// Output: March 10, 2026
