// JavaScript Variables
var name = "Mohamed Asraf R"
A = 45
B = 55
console.log(name)
console.log(A + B)

// Var variable type
{
    var x = 20
    var x = 100
}
console.log(x)

// let variable type
{
    var x = 40
}
let y = 50
console.log(x)
console.log(y)

// Const variable type
{
    var x = 40
}
var x = 30
const z = "Mohamed"
console.log(x)
console.log(z)

// Exercise 1:
var FruitName = "Apple"
var Count = 20
var price = 100
var total = Count * price
console.log("The fruits count is " + Count + " and the price is " + price)
console.log("The Fruit name is " + FruitName)
console.log("The total price is " + total)

// JavaScript Operators:
// Post Increment & Decrement Operators:
var a = 20
var b = 40
var c = a++  // Increament operators
var d = b--  // Decreament operators
console.log(a)
console.log(c)
console.log(b)
console.log(d)

// Pre Increment & Decrement Operators:
var e = 20
var f = 40
var g = ++e // Increament operators
var h = --f  // Decreament operators
console.log(e)
console.log(f)
console.log(g)
console.log(h)

// JavaScript Data Types:
var name = "Mohamed Asraf R" // String
var age = 25 // Number  
var isStudent = true // Boolean
var hobbies = ["Reading", "Traveling", "Cooking"] // Array
var person = { // Object
    name: "Mohamed Asraf R",
    age: 25,
    isStudent: true
}
console.log(name)
console.log(age)
console.log(isStudent)
console.log(hobbies[2])
console.log(person.isStudent)

// JavaScript Functions:
function Addition() {
    var a = 30
    var b = 50
    var sum = a + b
    console.log("The sum of " + a + " and " + b + " is: " + sum)
}
Addition() // Called the function to execute

function Subtraction() {
    var a = 30
    var b = 50
    var difference = a - b
    console.log("The difference between " + a + " and " + b + " is: " + difference)
}
Subtraction()

var factor = "AK"
var fplayer = "Glynn Maxwell"
var fmovie = "The Dark Knight"

function FavoriteThings() {
    console.log("My favorite actor is: " + factor)
    console.log("My favorite player is: " + fplayer)
    console.log("My favorite movie is " + fmovie)
}
FavoriteThings()

// JavaScript Function parameters
function multiplication(x, y) {
    var product = x * y
    console.log("The product of " + x + " and " + y + " is: " + product)
}
multiplication(10, 20) // Called the function with arguments

// Function with return type
function Myname() {
    return "Mohamed Asraf R"
}
var name = Myname() // Stored the return value in a variable
console.log(name)

// If else statment:
var rain = true
if (rain == true) {
    console.log("I need to umberla")
}
else {
    console.log("I dont need umberla")
}

// Print student mark list statement
Student_name = "Mohamed Asraf R"
Class = "10th standart"
Register_no = 858101
Tamil = 80
English = 50
Maths = 35
Science = 75
Social_scinece = 90
Total = Tamil + English + Maths + Science + Social_scinece

console.log("Student Name: " + Student_name);
console.log("Class: " + Class);
console.log("Register No: " + Register_no);

function student_marklist(subject, mark) {
    if (mark >= 35) {
        console.log("Subject:" + subject, "\nMark:" + mark, "\nResult: Pass")
    }
    else {
        console.log("Subject:" + subject, "\nMark:" + mark, "\nResult: Fail")
    }
}
function student_total_marklist(total) {
    if (total > 400) {
        console.log("Total:" + total, "Grade: A")
    }
    else if (total > 300) {
        console.log("Total:" + total, "Grade: B")
    }
    else if (total > 200) {
        console.log("Total:" + total, "Grade: C")
    }
    else {
        console.log("Total:" + total, "Grade: Very Poor")
    }
}

// function call and argument passed
student_marklist("Tamil", Tamil)
student_marklist("English", English)
student_marklist("Maths", Maths)
student_marklist("Science", Science)
student_marklist("Social Science", Social_scinece)
student_total_marklist(Total)

// For loop:
for (var i = 1; i <= 10; i++) {
    console.log("For loop iteration: " + i)
}
for (var j = 1; j <= 10; j++) {
    if (j % 2 === 0) {
        console.log("For loop even iteration: " + j);
    }
}
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("The sum of numbers from 1 to 10 is:", sum);

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " =" + 5 * i)
}

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// Simple Task 
function IdentityAddOrEvenNumbers(number) {
    for (let i = 1; i <= number; i++) {
        console.log("Loop iteration: " + i)
        if (i % 2 === 0) {
            console.log(i + " is an even number")
        }
        else {
            console.log(i + " is an odd number")
        }
    }
}
num = 10
IdentityAddOrEvenNumbers(num)

// DOM-> Document Object Model
// textContent
var changeTextElement = document.getElementById("changeText")
changeTextElement.textContent = "DOM Manipulation"
// event and events handler
function changeContent() {
    var changeTextElement = document.getElementById("unchangetext")
    changeTextElement.textContent = "I am fine"
}

let count = 0
function increment() {
    count++;
    document.getElementById("countValue").textContent = count;
}

// Create a game:
var randomNumber = Math.floor(Math.random() * 10) + 1
var guessInput = document.getElementById("guessInput")
var resultElement = document.getElementById("result")
var scoreRating = document.getElementById("scoreValue")
var score = 0
function checkGuess() {
    var userGuess = parseInt(guessInput.value)
    if (userGuess == randomNumber) {
        resultElement.textContent = "You are right!"
        alert("Congratulations! You guessed the correct number: " + randomNumber)
        score++;
        scoreRating.textContent = score;
    }
    else {
        score--;
        resultElement.textContent = "You are wrong! The correct number was " + randomNumber
        scoreRating.textContent = score;
    }
}

// JavaScript Style MAnipulation:
var changeStyleElement = document.getElementById("styleText")
function changeStyle() {
    changeStyleElement.style.color = "red"
    changeStyleElement.setAttribute("class", "redText")
}

// Task1:
var inputElement = document.getElementById("inputText");
var outputElement = document.getElementById("outputText");

function retrieveText() {
    outputElement.textContent = inputElement.value;
}

// Task2:
function addelement() {
    var helloContainer = document.getElementById("helloContainer")
    var newElement = document.createElement("h1")
    newElement.textContent = "Hello"
    helloContainer.appendChild(newElement)
}

// Task3:
var h1Element = document.getElementById("UpdateName")
function update(event) {
    console.log(event)
    h1Element.textContent = event.target.textContent
}

// Task4:
function remove(event) {
    event.target.remove()
}

// InnerHTML:
var innerHtmlElement = document.getElementById("demoinnerHtml")
innerHtmlElement.innerHTML = "<h1>Welcome to JavaScript</h1><p>This is a new paragraph added using innerHTML.</p>"

// different ways to select elements:
// Select by ID
var elementById = document.getElementById("elementId");
console.log(elementById.textContent);

// Select by Class Name
var elementsByClassName = document.getElementsByClassName("elementClass1");
console.log(elementsByClassName);

// Select by Tag Name
var elementsByTagName = document.getElementsByTagName("h6");
console.log(elementsByTagName);

// Select by Query Selector
var elementByQuerySelector = document.querySelector("#elementClass2");
console.log(elementByQuerySelector.textContent);

// Select by Query Selector All
var elementsByQuerySelectorAll = document.querySelectorAll("p");
console.log(elementsByQuerySelectorAll);

// Adding HTML Element:
var container = document.getElementById("Container1")
var newElement = document.createElement("h1")
newElement.textContent = "Hello, I am added using JavaScript!"
container.appendChild(newElement)
console.log(container)

// Prepend:
var container = document.getElementById("Container2")
var newElement = document.createElement("h2")
newElement.textContent = "Hello, I am prepended using JavaScript!"
container.prepend(newElement)
console.log(container)

// InsertAdjacentHTML:
var container = document.getElementById("Container3")
container.insertAdjacentHTML("afterend", "<h3>Hello, I am added using insertAdjacentHTML!</h3>")
console.log(container)

// Remove Element:
var elementToRemove = document.getElementById("removeElement")
elementToRemove.remove()

// Todo scratch:
var ul = document.getElementById("list-container")
var input = document.getElementById("input")
function add() {
    var listItem = document.createElement("li")
    listItem.innerHTML = input.value + " <button onclick='remove(event)'>Delete</button>"
    ul.appendChild(listItem)
}
function remove(event) {
    event.target.parentElement.remove()
}