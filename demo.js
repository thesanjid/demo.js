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


const users = [
  { name: "Sanjid", age: 25 },
  { name: "Rahim", age: 30 },
  { name: "Karim", age: 20 }
];

// Get names of users above 22
const result = users
  .filter(user => user.age > 22)
  .map(user => user.name);

console.log(result); // ["Sanjid", "Rahim"]
const users = [
  { name: "Sanjid", active: true },
  { name: "Rahim", active: false }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);


const cart = [100, 200, 50];

const total = cart.reduce((sum, item) => sum + item, 0);

console.log(total); // 350
const blogs = [
  { title: "JS", views: 100 },
  { title: "Node", views: 300 },
  { title: "React", views: 200 }
];

// Top viewed blog titles
const topBlogs = blogs
  .filter(blog => blog.views > 150)
  .map(blog => blog.title);

console.log(topBlogs); // ["Node", "React"]


const nums = [5, 2, 8, 1];

nums.sort((a, b) => a - b);

console.log(nums); // [1, 2, 5, 8]



const arr = [1, 2, 3, 4];

// slice (copy)
arr.slice(1, 3); // [2,3]

// splice (modify)
arr.splice(1, 2); // remove [2,3]

const nums = [10, 20, 5];

nums.some(n => n > 15); // true
const arr = [1, 2, 3, 4];

// slice (copy)
arr.slice(1, 3); // [2,3]

// splice (modify)
arr.splice(1, 2); // remove [2,3]

function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8


const cart = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1200 },
  { name: "Cap", price: 200 }
];

const total = cart.reduce((acc, item) => acc + item.price, 0);

console.log(total); // 1900



array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);


const arr = [[1, 2], [3, 4], [5]];

const flat = arr.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // [1,2,3,4,5]




const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 2, banana: 2, orange: 1 }


array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);


console.log(window.location.href); // current URL
window.location.href = "https://google.com"; // redirect


if (navigator. online) {
  console.log("You are online");
} else {
  console.log("You are offline");
}
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/data", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.send();
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Load tasks (AJAX GET)
function loadTasks() {
  fetch(API_URL + "?_limit=5")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("taskList");
      list.innerHTML = "";

      data.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${task.title}
          <button onclick="deleteTask(${task.id})">❌</button>
        `;
        list.appendChild(li);
      });
    });
}

// Add task (AJAX POST)
function addTask() {
  const input = document.getElementById("taskInput");
  const newTask = input.value;

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      title: newTask,
      completed: false
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      alert("Task added!");
      loadTasks(); // reload list
      input.value = "";
    });
}

// Delete task (AJAX DELETE)
function deleteTask(id) {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
    .then(() => {
      alert("Task deleted!");
      loadTasks();
    });
}

// Load tasks when page loads
loadTasks();
