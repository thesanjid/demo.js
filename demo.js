/*
   1. BASICS
   */

let x = 5;
let y = 6;
let z = 10;
console.log(x - y + z); // 9

/* 
   2. FUNCTIONS
    */

function hello() {
  console.log("hello world");
}
hello();

function isUserLoggedIn(isLoggedIn) {
  return isLoggedIn ? "User is logged in": "Please log in first";
}
console.log(isUserLoggedIn(true));

// Fixed: kept only the correct version (checks divisibility by 2)
function isEven(number) {
  return number % 2 === 0 ? "Even": "Odd";
}
console.log(isEven(7)); // Odd

const greet = (name) => `Hello ${name}`;
console.log(greet("Sanjid"));

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(25)); // 77

// Fixed: removed duplicate definition, kept one
function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
console.log(capitalizeFirstLetter("javascript")); // Javascript

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
console.log(formatDate("2026-03-10")); // March 10, 2026

function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

/* 
   3. ARRAY METHODS
  */

// filter + map
const users = [
  { name: "Sanjid", age: 25, active: true },
  { name: "Rahim", age: 30, active: false },
  { name: "Karim", age: 20, active: true },
];

const olderThan22 = users.filter((u) => u.age > 22).map((u) => u.name);
console.log(olderThan22); // ["Sanjid", "Rahim"]

const activeUsers = users.filter((u) => u.active);
console.log(activeUsers);

// reduce
const cart = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1200 },
  { name: "Cap", price: 200 },
];
const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
console.log(cartTotal); // 1900

const simpleTotal = [100, 200, 50].reduce((sum, n) => sum + n, 0);
console.log(simpleTotal); // 350

const blogs = [
  { title: "JS", views: 100 },
  { title: "Node", views: 300 },
  { title: "React", views: 200 },
];
const topBlogTitles = blogs.filter((b) => b.views > 150).map((b) => b.title);
console.log(topBlogTitles); // ["Node", "React"]

// flatten with reduce
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1,2,3,4,5]

// count occurrences with reduce
const fruits = ["apple", "banana", "apple", "orange", "banana"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount); // { apple: 2, banana: 2, orange: 1 }

// sort
const nums = [5, 2, 8, 1];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 5, 8]

// slice vs splice (fixed: removed duplicate block)
const arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2,3] -> does not mutate arr
console.log(arr.splice(1, 2)); // [2,3] -> mutates arr, arr is now [1,4]

// some
console.log([10, 20, 5].some((n) => n > 15)); // true

/* ============================================================
   4. BROWSER / WINDOW APIs
   ============================================================ */

console.log(window.location.href); // current URL
// window.location.href = "https://google.com"; // uncomment to redirect

// Fixed typo: navigator.onLine (was "navigator. online")
if (navigator.onLine) {
  console.log("You are online");
} else {
  console.log("You are offline");
}

/* ============================================================
   5. AJAX / FETCH (client-side task list example)
   ============================================================ */

const API_URL = "https://jsonplaceholder.typicode.com/todos";

function loadTasks() {
  fetch(API_URL + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      const list = document.getElementById("taskList");
      list.innerHTML = "";
      data.forEach((task) => {
        const li = document.createElement("li");
        li.innerHTML = `${task.title} <button onclick="deleteTask(${task.id})">❌</button>`;
        list.appendChild(li);
      });
    });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const newTask = input.value;

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ title: newTask, completed: false }),
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then(() => {
      alert("Task added!");
      loadTasks();
      input.value = "";
    });
}

// Fixed: kept single async/await version (removed duplicate .then() version)
async function deleteTask(taskId) {
  try {
    const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    document.getElementById(taskId).remove();
  } catch (error) {
    console.error(error);
  }
}

// loadTasks(); // uncomment when running in a browser with #taskList in the DOM

/* ============================================================
   6. NODE.JS FILE SYSTEM (fs)
   ============================================================ */

const fs = require("fs");
const fsPromises = require("fs").promises;

// Synchronous read (blocks execution)
function syncReadExample() {
  fs.writeFileSync("data.txt", "Hello World");
  const data = fs.readFileSync("data.txt", "utf8");
  console.log(data);
}

// Callback-based (non-blocking)
function callbackReadExample() {
  console.log("Start");
  fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  console.log("End"); // runs before the file content logs
}

// Promise-based (fixed: consolidated the several duplicate versions into one)
async function fileOperations() {
  try {
    await fsPromises.writeFile("data.txt", "Hello World");
    console.log("Created");

    const data = await fsPromises.readFile("data.txt", "utf8");
    console.log(data);

    await fsPromises.appendFile("data.txt", "\nUpdated Data");
    console.log("Updated");

    await fsPromises.unlink("data.txt");
    console.log("Deleted");
  } catch (error) {
    console.error(error);
  }
}

// Uncomment one to run:
// syncReadExample();
// callbackReadExample();
// fileOperations();

/* ============================================================
   7. EVENT LOOP / setTimeout
   ============================================================ */

console.log("Start");
setTimeout(() => console.log("Inside setTimeout"), 0);
console.log("End");
// Output order: Start, End, Inside setTimeout

function processItems(items) {
  if (items.length === 0) return;
  console.log(items.shift());
  setTimeout(() => processItems(items), 0);
}
// processItems([1, 2, 3, 4, 5]);

/* 
   8. EXPRESS SERVER (run separately with `node server.js`)
*/


const express = require('express');
const app = express();

let tasks = [
  { id: 1, title: 'Learn AJAX' },
  { id: 2, title: 'Learn Node.js' }
];

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.json({ success: true, message: 'Task deleted successfully' });
});

app.listen(5000, () => console.log('Server running on port 5000'));


/* ============================================================
   9. IN-MEMORY CRUD EXAMPLE
   ============================================================ */

let usersDB = [];

function createUser(id, name) {
  usersDB.push({ id, name });
  console.log("User Added:", usersDB);
}

function readUsers() {
  console.log("All Users:", usersDB);
}

function updateUser(id, newName) {
  const user = usersDB.find((u) => u.id === id);
  if (user) {
    user.name = newName;
    console.log("User Updated:", usersDB);
  } else {
    console.log("User not found");
  }
}

function deleteUserById(id) {
  usersDB = usersDB.filter((u) => u.id !== id);
  console.log("User Deleted:", usersDB);
}

createUser(1, "Alice");
createUser(2, "Bob");
readUsers();
deleteUserById(1);
readUsers();
updateUser(2, "Robert");

/* 
   10. STDIN EXERCISES
    */

function isBalanced(str) {
  const stack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };

  for (const ch of str) {
    if ("([{".includes(ch)) {
      stack.push(ch);
    } else if (")]}".includes(ch)) {
      if (stack.length === 0 || stack.pop() !== pairs[ch]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function hasVowel(str) {
  const vowels = "aeiouAEIOU";
  for (const ch of str) {
    if (vowels.includes(ch)) return true;
  }
  return false;
}
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// or with async/await
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
// Array to store users
let users = [];

// CREATE
function createUser(id, name) {
    users.push({ id, name });
    console.log("User Added:", users);
}

// READ
function readUsers() {
    console.log("All Users:", users);
}

// UPDATE
function updateUser(id, newName) {
    const user = users.find(user => user.id === id);

    if (user) {
        user.name = newName;
        console.log("User Updated:", users);
    } else {
        console.log("User not found");
    }
}

// DELETE
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    console.log("User Deleted:", users);
}

// Example Usage
createUser(1, "Alice");
createUser(2, "Bob");

readUsers();

updateUser(2, "Robert");

deleteUser(1);

readUsers();

const express = require('express');
const app = express();
app.use(express.json());

let items = [];
let nextId = 1;

app.post('/items', (req, res) => {
  const item = { id: nextId++, ...req.body };
  items.push(item);
  res.status(201).json(item);
});

app.get('/items', (req, res) => res.json(items));

app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === +req.params.id);
  item ? res.json(item) : res.status(404).end();
});

app.put('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === +req.params.id);
  if (index === -1) return res.status(404).end();
  items[index] = { ...items[index], ...req.body };
  res.json(items[index]);
});

app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === +req.params.id);
  if (index === -1) return res.status(404).end();
  items.splice(index, 1);
  res.status(204).end();
});

app.listen(3000);
class CrudStore {
  constructor() {
    this.items = [];
    this.nextId = 1;
  }

  // CREATE
  create(data) {
    const item = { id: this.nextId++, ...data };
    this.items.push(item);
    return item;
  }

  // READ (all)
  readAll() {
    return this.items;
  }

  // READ (one)
  readOne(id) {
    return this.items.find(item => item.id === id) || null;
  }

  // UPDATE
  update(id, data) {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return null;
    this.items[index] = { ...this.items[index], ...data };
    return this.items[index];
  }

  // DELETE
  delete(id) {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return false;
    this.items.splice(index, 1);
    return true;
  }
}

// Usage
const store = new CrudStore();

const user = store.create({ name: 'Alice', age: 30 });
console.log(store.readAll());
console.log(store.readOne(user.id));
store.update(user.id, { age: 31 });
store.delete(user.id);


