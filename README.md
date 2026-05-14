## 1. What is JavaScript?

JavaScript is the most popular programming language for web development. Here's why it's great for beginners:

- **Easy to learn** - Simple syntax that's quick to understand
- **Interactive websites** - Adds functionality and allows user interaction
- **File extension** - JavaScript files use the `.js` extension

JavaScript runs in web browsers and makes websites interactive and dynamic.

---

## 2. JavaScript Variables

Variables are containers that store data. Think of them as labeled boxes where you keep information.

### Example:
```javascript
var age = 10;
```
- `var` → Keyword to declare a variable
- `age` → Variable name
- `10` → Value stored in the variable

### Console.log()
Use `console.log()` to print data to the console and debug your code:
```javascript
console.log(age); // Output: 10
```

### Three Ways to Declare Variables

#### 1. **Using `var`** (older method)
- Global variable
- Can be redeclared
```javascript
var name = "Ali";
var name = "Ahmed"; // This is allowed
```

#### 2. **Using `let`** (modern method)
- Local variable
- Cannot be redeclared
```javascript
let name = "Ali";
let name = "Ahmed"; // Error - cannot redeclare
```

#### 3. **Using `const`** (constant values)
- Local variable
- Cannot be redeclared or changed
- Used for fixed values
```javascript
const PI = 3.14;
// PI = 3.15; // Error - cannot change
```

---

## 3. JavaScript Keywords

Keywords are reserved words with special meanings in JavaScript. They perform specific tasks and cannot be used as variable names.

Examples: `var`, `let`, `const`, `if`, `else`, `function`, `return`, etc.

---

## 4. Comments

Comments are notes in your code that the browser ignores. Use them to explain code and remember what it does.

### Single Line Comment:
```javascript
// This is a single line comment
```

### Multiple Line Comments:
```javascript
/* This is a multiple line comment
   It can span across many lines
   Very useful for long explanations */
```



---

## 5. JavaScript Operators

Operators are special symbols used to perform calculations, comparisons, and other operations on variables and values.

### Increment and Decrement Operators

**Increment (`++`)** - Increases value by 1

```javascript
let x = 5;
x++;  // Same as x = x + 1
console.log(x); // Output: 6
```

**Decrement (`--`)** - Decreases value by 1

```javascript
let y = 5;
y--;  // Same as y = y - 1
console.log(y); // Output: 4
```

### Pre-increment vs Post-increment

- **Pre-increment (`++x`)** - Increases first, then uses value
- **Post-increment (`x++`)** - Uses value first, then increases

### Common Operators

| Operator | Name | Example |
|----------|------|---------|
| `+` | Addition | `5 + 3` = 8 |
| `-` | Subtraction | `5 - 3` = 2 |
| `*` | Multiplication | `5 * 3` = 15 |
| `/` | Division | `6 / 2` = 3 |
| `%` | Modulo (remainder) | `7 % 3` = 1 |
| `++` | Increment | `x++` |
| `--` | Decrement | `x--` |

---

## 6. JavaScript Data Types

Data types define what kind of data a variable can store. Here are the main types:

| Data Type | Description | Example |
|-----------|-------------|---------|
| **Number** | Numeric values (integers and decimals) | `10`, `3.14` |
| **String** | Text (must be in quotes) | `"Hello"`, `'World'` |
| **Boolean** | True or false values | `true`, `false` |
| **Undefined** | Variable declared but no value assigned | `let x;` |
| **Null** | Empty or no value | `null` |
| **BigInt** | Very large numbers | `123n` |
| **Symbol** | Unique identifiers | `Symbol("id")` |
| **Object** | Multiple values as key-value pairs | `{name: "Ali"}` |
| **Array** | List of values | `[1, 2, 3]` |

### Examples:
```javascript
let number = 42;       // Number
let text = "Hello";    // String
let isActive = true;   // Boolean
let empty;             // Undefined
let nothing = null;    // Null
```

---

## 7. JavaScript Functions

A function is a reusable block of code designed to perform a specific task. Functions help you write cleaner, more organized code.

### Basic Function Syntax:
```javascript
function greet() {
  console.log("Hello!");
}

greet(); // Call the function
```

---

## 8. Function Parameters and Arguments

**Parameters** are placeholders in the function definition.
**Arguments** are the actual values you pass when calling the function.

### Example:
```javascript
// 'name' is the parameter
function greet(name) {
  console.log("Hello, " + name);
}

// "Ali" is the argument
greet("Ali"); // Output: Hello, Ali
```

### Functions with Return Values

Use `return` to send a value back from a function:

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // Output: 8
```

---

## 9. If...Else Statements

Conditional statements execute different code based on conditions. Perfect for making decisions in your program!

### Basic If...Else Syntax:
```javascript
if (condition) {
  // Code runs if condition is true
} else {
  // Code runs if condition is false
}
```

### Example:
```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a teenager");
}
// Output: You are an adult
```

---

## 10. For Loops

Loops run the same code multiple times. A for loop is the most common type.

### For Loop Syntax:
```javascript
for (initialization; condition; increment) {
  // Code to repeat
}
```

### Example:
```javascript
// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1 2 3 4 5
```

### Explanation:
- `let i = 1` → Start from 1
- `i <= 5` → Continue while i is less than or equal to 5
- `i++` → Increase i by 1 after each iteration

---

## 11. DOM Manipulation

### What is the DOM?

**DOM** (Document Object Model) is a structured representation of your HTML document. JavaScript can access and change HTML elements using the DOM.

DOM Manipulation means using JavaScript to:
- Access HTML elements
- Modify content and styles
- Add or remove elements
- React to user actions

---

## 12. DOM Properties and Methods

### textContent
Get or set the text inside an element (without HTML tags):

```javascript
let heading = document.getElementById("title");
heading.textContent = "Welcome to JavaScript";
```

### Events and Event Handlers

Events are things that happen in the browser. Event handlers let you respond to these events.

### Common Events:

| Event | Trigger |
|-------|---------|
| `click` | User clicks an element |
| `change` | User changes input value |
| `mouseover` | Mouse moves over an element |
| `keydown` | User presses a key |
| `load` | Page finishes loading |

### Example:
```javascript
let button = document.getElementById("myButton");
button.onclick = function() {
  console.log("Button clicked!");
};
```

---

## 13. Working with Random Numbers

Create random numbers using the `Math` object:

### Math.random()
Generates a random decimal number between 0 and 1:

```javascript
let random = Math.random();
console.log(random); // Example output: 0.456
```

### Math.floor()
Rounds down to the nearest whole number:

```javascript
let randomWhole = Math.floor(Math.random() * 10);
console.log(randomWhole); // Random number 0-9
```

---

## 14. Style Manipulation

Change CSS styles dynamically using JavaScript:

```javascript
let box = document.getElementById("myBox");
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.padding = "20px";
```

---

## 15. Creating HTML Elements

Use `createElement()` to create new HTML elements dynamically:

```javascript
// Create a new paragraph element
let paragraph = document.createElement("p");
paragraph.textContent = "This is a new paragraph";

// Add it to the page
document.body.appendChild(paragraph);
```

---

## 16. Parent Element

Access the parent of an element:

```javascript
let child = document.getElementById("child");
let parent = child.parentElement;
console.log(parent); // Shows the parent element
```

---

## 17. event.target

The `event.target` property tells you which element triggered the event:

```javascript
document.addEventListener("click", function(event) {
  console.log(event.target); // The element that was clicked
});
```

---

## 18. innerHTML

Get or set the HTML content inside an element (including tags):

```javascript
let box = document.getElementById("myBox");
box.innerHTML = "<h1>New Content</h1>";
```

**Note:** `innerHTML` can execute HTML and scripts. Use `textContent` when inserting user input for safety.

---

## 19. Ways to Select Elements

JavaScript provides several methods to select HTML elements:

```javascript
// Select by ID (returns one element)
document.getElementById("myId");

// Select by class name (returns multiple elements)
document.getElementsByClassName("myClass");

// Select by tag name (returns multiple elements)
document.getElementsByTagName("p");

// Select using CSS selectors (returns first match)
document.querySelector(".myClass");

// Select all using CSS selectors
document.querySelectorAll(".myClass");

// Select by name attribute
document.getElementsByName("myName");
```

### Example:
```javascript
let heading = document.querySelector("h1");
let buttons = document.querySelectorAll("button");
```

---

## 20. addEventListener()

Attach event handlers without using inline HTML events. This is the modern approach:

```javascript
let button = document.getElementById("myButton");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});
```

This is better than using `onclick` in HTML because it keeps code separate from markup.

---

## 21. Anonymous Functions

An anonymous function is a function without a name. Used inside event listeners and other functions:

```javascript
button.addEventListener("click", function() {
  console.log("Button was clicked!");
});
```

You can also use arrow functions (modern syntax):

```javascript
button.addEventListener("click", () => {
  console.log("Button was clicked!");
});
```

---

## 22. Arrays

An array stores multiple values in a single variable. Think of it as a list.

### Creating an Array:
```javascript
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits); // ["Apple", "Orange", "Mango"]
```

### Array Index (starts at 0):
```javascript
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Orange"
console.log(fruits[2]); // "Mango"
```

---

## 23. Objects

An object stores related data and functionality using key-value pairs.

### Creating an Object:
```javascript
let person = {
  name: "Ali",
  age: 22,
  isStudent: true,
  greet: function() {
    console.log("Hello!");
  }
};
```

### Accessing Object Properties:
```javascript
console.log(person.name);  // "Ali"
console.log(person.age);   // 22
person.greet();             // Output: Hello!
```

---

## 24. Adding HTML Elements

### append()
Add an element at the end of a parent:

```javascript
let parent = document.getElementById("container");
let newDiv = document.createElement("div");
newDiv.textContent = "New content";
parent.append(newDiv);
```

### prepend()
Add an element at the beginning of a parent:

```javascript
parent.prepend(newDiv); // Adds at the start
```

### insertAdjacentHTML()
Insert HTML at specific positions:

```javascript
element.insertAdjacentHTML("afterbegin", "<p>New text</p>");
```

**Positions:**
- `"beforebegin"` - Before the element (outside)
- `"afterbegin"` - Inside, at the beginning
- `"beforeend"` - Inside, at the end
- `"afterend"` - After the element (outside)

### remove()
Delete an element from the page:

```javascript
let element = document.getElementById("toDelete");
element.remove();
```

---

## 25. To-Do List Application

A to-do list is a practical JavaScript project that combines:
- DOM manipulation
- Event listeners
- Arrays to store tasks
- Functions to add/delete tasks

### Basic Features:
- Add new tasks
- Display task list
- Delete tasks
- Mark tasks as completed

---

## Key Takeaways for Beginners

1. **Variables** store information
2. **Functions** are reusable code blocks
3. **Loops** repeat code multiple times
4. **Conditionals** make decisions
5. **DOM** lets you interact with HTML
6. **Events** respond to user actions
7. **Arrays** store multiple values
8. **Objects** organize related data

---

## Next Steps

Practice these concepts by:
- Writing small programs
- Building a to-do list app
- Creating interactive forms
- Manipulating HTML with JavaScript
- Handling user events

Keep learning and building projects! 🚀