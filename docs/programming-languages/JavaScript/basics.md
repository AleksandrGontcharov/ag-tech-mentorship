---
sidebar_position: 2
---

# JavaScript Basics

Learn JavaScript fundamentals including variables, data types, and operators.

## Variables

Variables store data that can be used throughout your program.

### Declaration Keywords

```javascript
// const - Cannot be reassigned (preferred for most cases)
const name = "Alice";
// name = "Bob";  // Error!

// let - Can be reassigned
let age = 25;
age = 26;  // OK

// var - Old way (avoid in modern JavaScript)
var oldStyle = "deprecated";
```

**Best Practice**: Use `const` by default, `let` when you need to reassign, avoid `var`.

### Naming Rules

- Must start with letter, `$`, or `_`
- Can contain letters, numbers, `$`, `_`
- Case-sensitive (`name` !== `Name`)
- Cannot use reserved keywords

```javascript
// Valid
const userName = "Bob";
const _private = "secret";
const $element = document.getElementById("id");
const age2 = 30;

// Invalid
// const 2name = "error";     // Starts with number
// const user-name = "error"; // Contains hyphen
// const class = "error";     // Reserved keyword
```

### Naming Conventions

```javascript
// camelCase for variables and functions
const firstName = "John";
function getUserData() {}

// PascalCase for classes
class UserProfile {}

// UPPERCASE for constants
const MAX_SIZE = 100;
const API_KEY = "abc123";
```

## Data Types

### Primitive Types

#### Numbers

JavaScript has one number type (no separate integer/float):

```javascript
const integer = 42;
const decimal = 3.14;
const negative = -10;
const scientific = 2.5e6;  // 2,500,000
```

#### Strings

Text enclosed in quotes:

```javascript
const single = 'Hello';
const double = "World";
const template = `Hello, ${name}!`;  // Template literals (ES6+)
```

##### String Methods

```javascript
const text = "JavaScript";

text.length           // 10
text.toUpperCase()    // "JAVASCRIPT"
text.toLowerCase()    // "javascript"
text.charAt(0)        // "J"
text.substring(0, 4)  // "Java"
text.indexOf("Script") // 4
text.replace("Java", "Type")  // "TypeScript"
text.split("")        // ["J", "a", "v", "a", ...]
```

##### Template Literals

```javascript
const name = "Alice";
const age = 25;

// Old way
const message1 = "Hello, " + name + "! You are " + age;

// Modern way
const message2 = `Hello, ${name}! You are ${age}`;

// Multi-line
const multiLine = `
    This is line 1
    This is line 2
`;
```

#### Booleans

```javascript
const isActive = true;
const isVerified = false;
```

#### undefined and null

```javascript
let x;           // undefined (declared but not assigned)
let y = null;    // null (intentionally empty)
```

### Reference Types

#### Arrays

```javascript
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, null];

// Access elements (0-indexed)
console.log(numbers[0]);  // 1
console.log(numbers[4]);  // 5

// Modify elements
numbers[0] = 10;

// Array methods
numbers.push(6);        // Add to end
numbers.pop();          // Remove from end
numbers.unshift(0);     // Add to start
numbers.shift();        // Remove from start
numbers.length;         // 5
```

#### Objects

```javascript
const person = {
    name: "Alice",
    age: 25,
    isStudent: true,
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

// Access properties
console.log(person.name);      // Dot notation
console.log(person["age"]);    // Bracket notation

// Modify properties
person.age = 26;
person.city = "NYC";  // Add new property

// Delete properties
delete person.isStudent;
```

### Type Checking and Conversion

```javascript
// Check type
typeof 42          // "number"
typeof "hello"     // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (historical bug!)
typeof []          // "object"
typeof {}          // "object"

// Check if array
Array.isArray([])  // true

// Convert types
Number("42")       // 42
String(42)         // "42"
Boolean(1)         // true
parseInt("42")     // 42
parseFloat("3.14") // 3.14
```

## Operators

### Arithmetic Operators

```javascript
let x = 10;
let y = 3;

x + y   // 13  Addition
x - y   // 7   Subtraction
x * y   // 30  Multiplication
x / y   // 3.33... Division
x % y   // 1   Modulus (remainder)
x ** y  // 1000 Exponentiation (ES2016)

x++     // Increment (x = x + 1)
x--     // Decrement (x = x - 1)
```

### Comparison Operators

```javascript
5 == "5"   // true  (loose equality, converts types)
5 === "5"  // false (strict equality, no conversion)
5 != "5"   // false
5 !== "5"  // true

10 > 5     // true
10 < 5     // false
10 >= 10   // true
10 <= 5    // false
```

**Best Practice**: Always use `===` and `!==` instead of `==` and `!=`.

### Logical Operators

```javascript
true && false  // false (AND - both must be true)
true || false  // true  (OR - at least one must be true)
!true          // false (NOT - reverses boolean)

// Short-circuit evaluation
const user = null;
const name = user && user.name;  // null (stops if user is falsy)
const displayName = name || "Guest";  // "Guest"
```

### Assignment Operators

```javascript
let x = 10;

x += 5   // x = x + 5   -> 15
x -= 3   // x = x - 3   -> 12
x *= 2   // x = x * 2   -> 24
x /= 4   // x = x / 4   -> 6
x %= 4   // x = x % 4   -> 2
x **= 3  // x = x ** 3  -> 8
```

### Ternary Operator

```javascript
// condition ? valueIfTrue : valueIfFalse
const age = 20;
const status = age >= 18 ? "adult" : "minor";

// Equivalent to:
let status2;
if (age >= 18) {
    status2 = "adult";
} else {
    status2 = "minor";
}
```

## Comments

```javascript
// Single-line comment

/*
   Multi-line
   comment
*/

const x = 5;  // Inline comment
```

## Console Methods

```javascript
// Basic output
console.log("Hello");
console.log("Value:", 42);
console.log("Multiple", "values");

// Warnings and errors
console.warn("This is a warning");
console.error("This is an error");

// Tables (for arrays/objects)
console.table([{name: "Alice", age: 25}, {name: "Bob", age: 30}]);

// Clear console
console.clear();
```

## Type Coercion

JavaScript automatically converts types in some situations:

```javascript
// String coercion
"5" + 3      // "53" (number becomes string)
"5" - 3      // 2   (string becomes number)
"5" * "2"    // 10  (both become numbers)

// Boolean coercion
if ("hello") { }  // true (non-empty string)
if (0) { }        // false
if ("") { }       // false (empty string)
if (null) { }     // false
if (undefined) { } // false

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy
```

## Strict Mode

Enable strict mode for safer code:

```javascript
"use strict";

// This would cause an error in strict mode:
// x = 10;  // Error: x is not defined
```

## Practice Exercises

### Exercise 1: Variable Basics

```javascript
const firstName = "John";
const lastName = "Doe";
const age = 30;

const fullName = `${firstName} ${lastName}`;
const message = `${fullName} is ${age} years old`;

console.log(message);
```

### Exercise 2: Calculate Circle Area

```javascript
const radius = 5;
const PI = 3.14159;
const area = PI * radius ** 2;

console.log(`Area of circle: ${area.toFixed(2)}`);
```

### Exercise 3: Temperature Converter

```javascript
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const tempC = 25;
const tempF = celsiusToFahrenheit(tempC);
console.log(`${tempC}°C = ${tempF}°F`);
```

### Exercise 4: Array Operations

```javascript
const fruits = ["apple", "banana", "orange"];

// Add to array
fruits.push("grape");

// Access last element
const lastFruit = fruits[fruits.length - 1];

// Loop through array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### Exercise 5: Object Properties

```javascript
const book = {
    title: "JavaScript Guide",
    author: "John Doe",
    pages: 250,
    isAvailable: true
};

// Add new property
book.year = 2024;

// Access and display
console.log(`${book.title} by ${book.author}`);
console.log(`Pages: ${book.pages}, Year: ${book.year}`);
```

## Key Takeaways

- Use `const` by default, `let` when reassigning needed
- JavaScript has primitive types (number, string, boolean, null, undefined) and reference types (object, array)
- Use `===` for strict equality comparison
- Template literals (`` `text ${variable}` ``) for string interpolation
- Arrays and objects are fundamental data structures
- Type coercion happens automatically but can cause bugs
- `typeof` checks data types
- Console methods help with debugging

## Next Steps

Continue learning:
- Control flow (if statements, loops, switch)
- Functions and scope
- Array methods (map, filter, reduce)
- DOM manipulation
- Asynchronous JavaScript
