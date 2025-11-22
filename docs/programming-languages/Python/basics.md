---
sidebar_position: 2
---

# Python Basics

Learn the fundamentals of Python programming including variables, data types, and operators.

## Variables

Variables store data that can be used and manipulated throughout your program.

### Creating Variables

Python doesn't require explicit type declaration:

```python
# Variable assignment
name = "Alice"
age = 25
height = 5.6
is_student = True
```

### Naming Rules

- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Case-sensitive (`name` and `Name` are different)
- Cannot use Python keywords (`if`, `for`, `while`, etc.)

```python
# Valid variable names
user_name = "Bob"
age2 = 30
_private = "secret"

# Invalid variable names
# 2name = "Error"      # Starts with number
# user-name = "Error"  # Contains hyphen
# class = "Error"      # Reserved keyword
```

### Multiple Assignment

```python
# Assign multiple variables at once
x, y, z = 1, 2, 3

# Assign same value to multiple variables
a = b = c = 0
```

## Data Types

Python has several built-in data types for storing different kinds of information.

### Numbers

#### Integers (int)

Whole numbers without decimals:

```python
age = 25
year = 2024
negative = -10
```

#### Floating-Point (float)

Numbers with decimal points:

```python
price = 19.99
temperature = -3.5
pi = 3.14159
```

#### Operations with Numbers

```python
# Basic arithmetic
addition = 5 + 3        # 8
subtraction = 10 - 4    # 6
multiplication = 3 * 4  # 12
division = 15 / 3       # 5.0 (always returns float)
floor_division = 15 // 4  # 3 (rounds down)
modulus = 15 % 4        # 3 (remainder)
exponentiation = 2 ** 3 # 8 (2 to the power of 3)
```

### Strings (str)

Text data enclosed in quotes:

```python
# Single or double quotes work
name = 'Alice'
message = "Hello, World!"

# Multi-line strings use triple quotes
paragraph = """This is a
multi-line
string"""
```

#### String Operations

```python
# Concatenation
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name  # "John Doe"

# String repetition
laugh = "ha" * 3  # "hahaha"

# String length
len("Hello")  # 5

# String indexing (0-based)
word = "Python"
first_letter = word[0]   # "P"
last_letter = word[-1]   # "n"

# String slicing
substring = word[0:3]    # "Pyt"
substring = word[2:]     # "thon"
substring = word[:4]     # "Pyth"
```

#### String Methods

```python
text = "hello world"

# Change case
text.upper()       # "HELLO WORLD"
text.lower()       # "hello world"
text.capitalize()  # "Hello world"
text.title()       # "Hello World"

# Find and replace
text.find("world")      # 6 (index where "world" starts)
text.replace("world", "Python")  # "hello Python"

# Split and join
words = text.split()    # ["hello", "world"]
" ".join(words)         # "hello world"

# Check content
text.startswith("hello")  # True
text.endswith("world")    # True
"123".isdigit()           # True
```

#### String Formatting

```python
# f-strings (Python 3.6+, recommended)
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old")

# .format() method
print("My name is {} and I am {} years old".format(name, age))

# % operator (older style)
print("My name is %s and I am %d years old" % (name, age))
```

### Booleans (bool)

True or False values:

```python
is_active = True
is_verified = False

# Boolean operations
result = True and False  # False
result = True or False   # True
result = not True        # False
```

### Type Checking and Conversion

```python
# Check type
type(42)         # <class 'int'>
type(3.14)       # <class 'float'>
type("hello")    # <class 'str'>
type(True)       # <class 'bool'>

# Convert between types
int("42")        # 42
float("3.14")    # 3.14
str(42)          # "42"
bool(1)          # True
bool(0)          # False
```

## Operators

### Arithmetic Operators

```python
x = 10
y = 3

x + y   # 13  Addition
x - y   # 7   Subtraction
x * y   # 30  Multiplication
x / y   # 3.33... Division
x // y  # 3   Floor division
x % y   # 1   Modulus
x ** y  # 1000 Exponentiation
```

### Comparison Operators

Return boolean values:

```python
x = 10
y = 5

x == y  # False  Equal to
x != y  # True   Not equal to
x > y   # True   Greater than
x < y   # False  Less than
x >= y  # True   Greater than or equal to
x <= y  # False  Less than or equal to
```

### Logical Operators

Combine boolean expressions:

```python
x = 5

# and: Both conditions must be True
(x > 0) and (x < 10)  # True

# or: At least one condition must be True
(x < 0) or (x > 3)    # True

# not: Reverse the result
not (x > 0)           # False
```

### Assignment Operators

```python
x = 10

x += 5   # x = x + 5   -> 15
x -= 3   # x = x - 3   -> 12
x *= 2   # x = x * 2   -> 24
x /= 4   # x = x / 4   -> 6.0
x //= 2  # x = x // 2  -> 3.0
x %= 2   # x = x % 2   -> 1.0
x **= 3  # x = x ** 3  -> 1.0
```

## Comments

Document your code with comments:

```python
# This is a single-line comment

"""
This is a
multi-line comment
(technically a multi-line string)
"""

x = 5  # Inline comment
```

## Input and Output

### Output with print()

```python
# Basic printing
print("Hello, World!")

# Multiple values
print("Name:", "Alice", "Age:", 25)

# Custom separator
print("apple", "banana", "cherry", sep=", ")

# Custom end character
print("Loading", end="...")
print("Done!")  # Outputs: Loading...Done!
```

### Input from User

```python
# Get string input
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Convert input to number
age = int(input("Enter your age: "))
price = float(input("Enter price: "))
```

## Practice Exercises

Try these exercises to test your understanding:

### Exercise 1: Calculate Rectangle Area

```python
# Get length and width from user
length = float(input("Enter length: "))
width = float(input("Enter width: "))

# Calculate area
area = length * width

# Display result
print(f"The area is {area} square units")
```

### Exercise 2: Temperature Converter

```python
# Convert Celsius to Fahrenheit
celsius = float(input("Enter temperature in Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")
```

### Exercise 3: String Manipulation

```python
# Get user's full name
full_name = input("Enter your full name: ")

# Display various formats
print(f"Uppercase: {full_name.upper()}")
print(f"Lowercase: {full_name.lower()}")
print(f"Title Case: {full_name.title()}")
print(f"Number of characters: {len(full_name)}")
```

## Key Takeaways

- Variables store data and don't need type declarations
- Python has main data types: int, float, str, bool
- Strings can be manipulated with methods and formatting
- Operators perform arithmetic, comparisons, and logical operations
- `print()` displays output, `input()` gets user input
- Use `type()` to check data types and convert with `int()`, `float()`, `str()`

## Next Steps

Now that you understand Python basics, continue to:
- Control flow (if statements, loops)
- Functions and modules
- Data structures (lists, dictionaries, tuples)
