---
sidebar_position: 1
---

# JavaScript Introduction

JavaScript is the programming language of the web, enabling interactive websites and modern web applications.

## What is JavaScript?

JavaScript (JS) is a high-level, interpreted programming language that:
- Runs in web browsers (client-side)
- Runs on servers with Node.js (server-side)
- Powers interactive web pages
- Builds mobile apps, desktop apps, and more

## Where JavaScript Runs

### In the Browser

Every modern web browser has a JavaScript engine:
- Chrome: V8
- Firefox: SpiderMonkey
- Safari: JavaScriptCore
- Edge: V8

### On the Server (Node.js)

Node.js lets you run JavaScript outside the browser for:
- Web servers and APIs
- Command-line tools
- Build tools and automation
- Desktop applications (with Electron)

## Setting Up

### Browser Console

The quickest way to try JavaScript:

1. Open your browser (Chrome recommended)
2. Press `F12` or right-click and select "Inspect"
3. Click the "Console" tab
4. Type JavaScript code and press Enter

```javascript
console.log("Hello, World!");
```

### Installing Node.js

For running JavaScript files and using npm packages:

1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Install following the installer prompts
4. Verify installation:

```bash
node --version
npm --version
```

### VS Code Setup

1. Download VS Code: https://code.visualstudio.com/
2. Install recommended extensions:
   - ESLint - Code quality
   - Prettier - Code formatting
   - Live Server - Run HTML files with auto-reload

## Your First JavaScript Program

### In the Browser

Create `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1>Hello, JavaScript!</h1>

    <script>
        console.log("Hello from JavaScript!");
        alert("Welcome!");
    </script>
</body>
</html>
```

Open this file in your browser.

### With Node.js

Create `app.js`:

```javascript
console.log("Hello from Node.js!");
```

Run it:

```bash
node app.js
```

## JavaScript vs Other Languages

### JavaScript vs Python

```python
# Python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
```

```javascript
// JavaScript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice");
```

### Key Differences

- JavaScript uses `{}` braces instead of indentation
- JavaScript statements end with `;` (optional but recommended)
- JavaScript uses `let`, `const`, `var` for variables
- JavaScript has `===` for strict equality

## Modern JavaScript (ES6+)

JavaScript has evolved significantly. Modern JavaScript (ES6/ES2015+) includes:

- `let` and `const` for variable declarations
- Arrow functions `() => {}`
- Template literals `` `Hello ${name}` ``
- Destructuring `const {x, y} = obj`
- Classes `class MyClass {}`
- Modules `import/export`
- Promises and `async/await`

## Running JavaScript

### In HTML Files

```html
<script>
    // Inline JavaScript
    console.log("This runs immediately");
</script>

<script src="app.js"></script>  <!-- External file -->
```

### With Node.js

```bash
node filename.js
```

### In the REPL

Node.js has an interactive shell:

```bash
node
> 2 + 2
4
> const name = "Alice"
> console.log(name)
Alice
```

Type `.exit` or press `Ctrl+C` twice to exit.

## Package Management with npm

npm (Node Package Manager) lets you use third-party libraries:

### Initialize a Project

```bash
npm init -y
```

This creates `package.json`.

### Install Packages

```bash
npm install lodash
```

Use in your code:

```javascript
const _ = require('lodash');
```

### Modern Import Syntax

Add `"type": "module"` to `package.json`:

```javascript
import _ from 'lodash';
```

## JavaScript in the Real World

### Frontend Frameworks

- **React** - Build user interfaces
- **Vue** - Progressive framework
- **Angular** - Complete framework
- **Svelte** - Compiled framework

### Backend with Node.js

- **Express** - Web framework
- **Next.js** - React with server-side rendering
- **NestJS** - TypeScript backend framework

### Full-Stack

- **Next.js** - React full-stack
- **SvelteKit** - Svelte full-stack
- **Remix** - React router-based

## Best Practices

### Use Modern Syntax

```javascript
// Good
const name = "Alice";
let age = 25;

// Avoid
var oldStyle = "outdated";
```

### Consistent Formatting

```javascript
// Good - consistent spacing and semicolons
function add(a, b) {
    return a + b;
}

// Avoid - inconsistent
function add(a,b){
return a+b
}
```

### Meaningful Names

```javascript
// Good
const userAge = 25;
function calculateTotal(items) { }

// Avoid
const x = 25;
function calc(i) { }
```

## Next Steps

Now that you're set up, continue to:
- JavaScript basics (variables, data types, operators)
- Control flow (if statements, loops)
- Functions and scope
- Arrays and objects
- DOM manipulation
- Async JavaScript (promises, async/await)

Let's start learning JavaScript fundamentals!
