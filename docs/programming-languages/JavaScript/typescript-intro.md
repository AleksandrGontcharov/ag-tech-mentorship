---
sidebar_position: 3
---

# TypeScript Introduction

TypeScript is JavaScript with syntax for types, helping you write more robust code with better tooling.

## What is TypeScript?

TypeScript is a programming language built on JavaScript that adds:
- **Static type checking** - Catch errors before runtime
- **Better IDE support** - Enhanced autocomplete and refactoring
- **Modern JavaScript features** - Use latest features, compile to older JS
- **Optional types** - Use as much or as little typing as you want

### Key Benefits

- Catch bugs during development, not in production
- Better code documentation through types
- Easier refactoring with confidence
- Improved team collaboration with clear contracts
- Enhanced IDE features (IntelliSense, go-to-definition)

## Installation

### Global Installation

```bash
npm install -g typescript
```

Verify installation:

```bash
tsc --version
```

### Project-Specific Installation

```bash
npm init -y
npm install --save-dev typescript
```

## Your First TypeScript File

Create `hello.ts`:

```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const message = greet("TypeScript");
console.log(message);

// This would cause an error:
// greet(123);  // Error: Argument of type 'number' is not assignable to parameter of type 'string'
```

## Compiling TypeScript

TypeScript files (`.ts`) must be compiled to JavaScript:

```bash
tsc hello.ts
```

This creates `hello.js` that you can run:

```bash
node hello.js
```

## Type Annotations

### Basic Types

```typescript
// Primitives
const age: number = 25;
const name: string = "Alice";
const isActive: boolean = true;

// Arrays
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["Alice", "Bob"];

// Any (avoid when possible)
let anything: any = 42;
anything = "now a string";  // OK, but defeats TypeScript's purpose

// Unknown (safer than any)
let userInput: unknown = "hello";
// Must check type before using
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}
```

### Function Types

```typescript
// Parameter and return type annotations
function add(a: number, b: number): number {
    return a + b;
}

// Optional parameters with ?
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
}

// Default parameters
function multiply(a: number, b: number = 1): number {
    return a * b;
}

// Void return type (no return value)
function logMessage(message: string): void {
    console.log(message);
}

// Arrow function types
const subtract = (a: number, b: number): number => a - b;
```

### Object Types

```typescript
// Object with specific properties
const user: { name: string; age: number } = {
    name: "Alice",
    age: 25
};

// Optional properties
const config: { port: number; host?: string } = {
    port: 3000
};

// readonly properties
const point: { readonly x: number; readonly y: number } = {
    x: 10,
    y: 20
};
// point.x = 5;  // Error: Cannot assign to 'x' because it is a read-only property
```

## Interfaces

Define object shapes that can be reused:

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    isActive?: boolean;  // Optional
    readonly createdAt: Date;  // Cannot be changed
}

const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    createdAt: new Date()
};

// Interface for functions
interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
```

## Type Aliases

Alternative way to define types:

```typescript
type ID = number | string;
type User = {
    id: ID;
    name: string;
};

// Union types
type Status = "pending" | "approved" | "rejected";
let orderStatus: Status = "pending";
// orderStatus = "invalid";  // Error

// Intersection types
type Person = { name: string };
type Employee = { employeeId: number };
type Worker = Person & Employee;

const worker: Worker = {
    name: "Bob",
    employeeId: 123
};
```

## Type Inference

TypeScript can often infer types automatically:

```typescript
// Type inferred as number
let age = 25;
// age = "twenty-five";  // Error

// Type inferred as string[]
const fruits = ["apple", "banana"];
// fruits.push(123);  // Error

// Type inferred from function return
function getUser() {
    return { name: "Alice", age: 25 };
}
const user = getUser();  // Type: { name: string; age: number; }
```

## Generics

Write reusable code that works with multiple types:

```typescript
// Generic function
function firstElement<T>(array: T[]): T | undefined {
    return array[0];
}

const num = firstElement([1, 2, 3]);      // number | undefined
const str = firstElement(["a", "b", "c"]); // string | undefined

// Generic interface
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "hello" };

// Multiple type parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const result = merge({ name: "Alice" }, { age: 25 });
// Type: { name: string } & { age: number }
```

## Classes with TypeScript

```typescript
class Person {
    // Properties
    private id: number;
    public name: string;
    protected age: number;

    // Constructor
    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    // Method
    public greet(): string {
        return `Hello, I'm ${this.name}`;
    }

    // Getter
    get formattedId(): string {
        return `ID-${this.id}`;
    }
}

// Shorter syntax with constructor properties
class User {
    constructor(
        public id: number,
        public name: string,
        private password: string
    ) {}
}

// Interface implementation
interface Printable {
    print(): void;
}

class Document implements Printable {
    print(): void {
        console.log("Printing document...");
    }
}
```

## tsconfig.json

Configure TypeScript compilation:

```bash
tsc --init
```

Common options:

```json
{
  "compilerOptions": {
    "target": "ES2020",           // JavaScript version to compile to
    "module": "commonjs",         // Module system
    "strict": true,               // Enable all strict checks
    "esModuleInterop": true,      // CommonJS/ES6 module compatibility
    "skipLibCheck": true,         // Skip checking .d.ts files
    "outDir": "./dist",           // Output directory
    "rootDir": "./src",           // Input directory
    "sourceMap": true,            // Generate source maps for debugging
    "noImplicitAny": true,        // Error on implicit 'any' types
    "strictNullChecks": true      // Strict null checking
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## Development Workflow

### Watch Mode

Automatically recompile on file changes:

```bash
tsc --watch
```

### With Node.js

Using `ts-node` to run TypeScript directly:

```bash
npm install --save-dev ts-node

# Run TypeScript file directly
npx ts-node src/index.ts
```

### Build Script

Add to `package.json`:

```json
{
  "scripts": {
    "build": "tsc",
    "watch": "tsc --watch",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts"
  }
}
```

## Common Patterns

### Type Guards

```typescript
function processValue(value: string | number) {
    if (typeof value === "string") {
        // TypeScript knows value is string here
        return value.toUpperCase();
    } else {
        // TypeScript knows value is number here
        return value.toFixed(2);
    }
}
```

### Utility Types

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

// Partial - All properties optional
type PartialUser = Partial<User>;

// Pick - Select specific properties
type UserPreview = Pick<User, "id" | "name">;

// Omit - Exclude specific properties
type PublicUser = Omit<User, "password">;

// Readonly - All properties readonly
type ImmutableUser = Readonly<User>;

// Record - Create object type with keys and values
type UserRoles = Record<string, string>;
const roles: UserRoles = {
    admin: "Administrator",
    user: "Regular User"
};
```

## Best Practices

### 1. Enable Strict Mode

Always use `"strict": true` in `tsconfig.json`.

### 2. Avoid `any`

```typescript
// Bad
function process(data: any) { }

// Good
function process(data: unknown) {
    if (typeof data === "string") {
        // ...
    }
}
```

### 3. Use Type Inference

```typescript
// Don't over-annotate
const name: string = "Alice";  // Unnecessary

// Let TypeScript infer
const name = "Alice";  // Good
```

### 4. Define Interfaces for Objects

```typescript
// Good - reusable and clear
interface Product {
    id: number;
    name: string;
    price: number;
}

function processProduct(product: Product) { }
```

## Migrating from JavaScript

### 1. Rename Files

Change `.js` to `.ts` (or `.jsx` to `.tsx` for React).

### 2. Add tsconfig.json

```bash
tsc --init
```

### 3. Gradually Add Types

Start with function signatures, then work inward.

### 4. Fix Errors Incrementally

Don't try to fix everything at once.

## Key Takeaways

- TypeScript adds static typing to JavaScript
- Types are optional but highly beneficial
- Compile `.ts` files to `.js` with `tsc`
- Interfaces and type aliases define object shapes
- Generics enable reusable, type-safe code
- Use `strict` mode for maximum type safety
- TypeScript catches errors at compile-time, not runtime
- Great IDE support with autocomplete and refactoring

## Next Steps

To continue learning TypeScript:
- Practice adding types to existing JavaScript code
- Learn advanced types (conditional types, mapped types)
- Explore TypeScript with frameworks (React, Node.js, Express)
- Study real-world TypeScript projects
- Read the official TypeScript documentation
