---
sidebar_position: 4
---

# Functions and Modules

Functions let you organize code into reusable blocks. Modules let you organize functions and share code across files.

## Defining Functions

### Basic Function

```python
def greet():
    print("Hello, World!")

# Call the function
greet()  # Output: Hello, World!
```

### Functions with Parameters

```python
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")  # Hello, Alice!
greet_person("Bob")    # Hello, Bob!
```

### Multiple Parameters

```python
def add_numbers(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

add_numbers(5, 3)  # 5 + 3 = 8
```

### Return Values

Functions can return data using `return`:

```python
def add(a, b):
    return a + b

result = add(10, 5)
print(result)  # 15

# Use directly in expressions
total = add(20, 30) * 2  # 100
```

### Multiple Return Values

```python
def get_min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = get_min_max([1, 5, 3, 9, 2])
print(f"Min: {minimum}, Max: {maximum}")
```

## Function Parameters

### Default Parameters

Provide default values if arguments aren't provided:

```python
def greet(name="Guest", greeting="Hello"):
    print(f"{greeting}, {name}!")

greet()                    # Hello, Guest!
greet("Alice")             # Hello, Alice!
greet("Bob", "Hi")         # Hi, Bob!
greet(greeting="Hey")      # Hey, Guest!
```

### Keyword Arguments

Call functions by parameter name:

```python
def describe_pet(animal, name, age):
    print(f"{name} is a {age}-year-old {animal}")

# Positional arguments
describe_pet("dog", "Max", 5)

# Keyword arguments (order doesn't matter)
describe_pet(name="Fluffy", age=3, animal="cat")

# Mixed (positional first, then keyword)
describe_pet("bird", age=1, name="Tweety")
```

### Arbitrary Arguments (*args)

Accept any number of positional arguments:

```python
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))        # 6
print(sum_all(10, 20, 30, 40)) # 100
```

### Arbitrary Keyword Arguments (**kwargs)

Accept any number of keyword arguments:

```python
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")
# Output:
# name: Alice
# age: 25
# city: NYC
```

### Combining Parameter Types

```python
def complex_function(required, *args, default="value", **kwargs):
    print(f"Required: {required}")
    print(f"Args: {args}")
    print(f"Default: {default}")
    print(f"Kwargs: {kwargs}")

complex_function(
    "必須",
    1, 2, 3,
    default="custom",
    extra="data",
    more="info"
)
```

## Scope and Lifetime

### Local Scope

Variables created inside functions are local:

```python
def my_function():
    local_var = "I'm local"
    print(local_var)

my_function()
# print(local_var)  # Error: local_var not defined outside function
```

### Global Scope

Variables outside functions are global:

```python
global_var = "I'm global"

def my_function():
    print(global_var)  # Can read global variables

my_function()
print(global_var)
```

### Modifying Global Variables

Use `global` keyword to modify global variables:

```python
count = 0

def increment():
    global count  # Declare you're using the global variable
    count += 1

increment()
increment()
print(count)  # 2
```

**Best Practice**: Avoid modifying global variables. Use parameters and return values instead.

## Lambda Functions

Anonymous, one-line functions:

```python
# Regular function
def square(x):
    return x ** 2

# Lambda equivalent
square = lambda x: x ** 2

print(square(5))  # 25
```

### Lambda with Multiple Parameters

```python
add = lambda x, y: x + y
print(add(3, 4))  # 7
```

### Lambda in Built-in Functions

```python
numbers = [1, 2, 3, 4, 5]

# Square each number
squared = list(map(lambda x: x ** 2, numbers))
# [1, 4, 9, 16, 25]

# Filter even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
# [2, 4]

# Sort by custom key
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
students.sort(key=lambda student: student[1])  # Sort by grade
```

## Docstrings

Document functions with docstrings:

```python
def calculate_area(length, width):
    """
    Calculate the area of a rectangle.

    Parameters:
    length (float): The length of the rectangle
    width (float): The width of the rectangle

    Returns:
    float: The area of the rectangle
    """
    return length * width

# Access docstring
print(calculate_area.__doc__)
```

## Modules

Modules are Python files containing functions and variables you can reuse.

### Creating a Module

Create a file called `math_utils.py`:

```python
# math_utils.py

def add(a, b):
    """Add two numbers"""
    return a + b

def multiply(a, b):
    """Multiply two numbers"""
    return a * b

PI = 3.14159
```

### Importing Modules

```python
# Import entire module
import math_utils

result = math_utils.add(5, 3)
print(math_utils.PI)
```

### Import Specific Items

```python
# Import specific functions
from math_utils import add, PI

result = add(5, 3)  # No need for module prefix
print(PI)
```

### Import All (Not Recommended)

```python
# Import everything
from math_utils import *

result = add(5, 3)
```

### Import with Alias

```python
# Give module a shorter name
import math_utils as mu

result = mu.add(5, 3)
```

### Built-in Modules

Python has many built-in modules:

```python
# Math operations
import math
print(math.sqrt(16))  # 4.0
print(math.pi)        # 3.141592...

# Random numbers
import random
print(random.randint(1, 10))
print(random.choice(['apple', 'banana', 'cherry']))

# Date and time
import datetime
now = datetime.datetime.now()
print(now)

# Operating system operations
import os
print(os.getcwd())  # Current working directory
```

## Module Structure

Organize larger projects with multiple modules:

```
my_project/
├── main.py
├── utils/
│   ├── __init__.py
│   ├── math_utils.py
│   └── string_utils.py
```

```python
# main.py
from utils import math_utils
from utils import string_utils

result = math_utils.add(5, 3)
```

## Best Practices

### Function Design

```python
# Good: Single responsibility
def calculate_total(prices):
    return sum(prices)

def apply_discount(total, discount_percent):
    return total * (1 - discount_percent / 100)

# Bad: Doing too much
def process_order(prices, discount):
    total = sum(prices)
    discounted = total * (1 - discount / 100)
    tax = discounted * 0.1
    final = discounted + tax
    return final
```

### Naming Conventions

```python
# Functions: lowercase with underscores
def calculate_average():
    pass

# Constants: uppercase
MAX_SIZE = 100
PI = 3.14159

# Modules: lowercase, short names
# import user_auth (not userAuth or UserAuth)
```

## Practice Exercises

### Exercise 1: Temperature Converter

```python
def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius"""
    return (fahrenheit - 32) * 5/9

# Test
print(celsius_to_fahrenheit(0))   # 32.0
print(fahrenheit_to_celsius(32))  # 0.0
```

### Exercise 2: Prime Number Checker

```python
def is_prime(number):
    """Check if a number is prime"""
    if number < 2:
        return False

    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False

    return True

# Test
print(is_prime(7))   # True
print(is_prime(12))  # False
```

### Exercise 3: List Statistics

```python
def get_statistics(numbers):
    """Calculate basic statistics for a list of numbers"""
    return {
        'count': len(numbers),
        'sum': sum(numbers),
        'average': sum(numbers) / len(numbers),
        'minimum': min(numbers),
        'maximum': max(numbers)
    }

# Test
stats = get_statistics([1, 2, 3, 4, 5])
print(stats)
```

### Exercise 4: Password Generator

```python
import random
import string

def generate_password(length=12, include_special=True):
    """Generate a random password"""
    characters = string.ascii_letters + string.digits

    if include_special:
        characters += string.punctuation

    password = ''.join(random.choice(characters) for _ in range(length))
    return password

# Test
print(generate_password())
print(generate_password(8, False))
```

## Key Takeaways

- Functions organize code into reusable blocks with `def`
- Use parameters to pass data into functions
- Use `return` to send data back from functions
- Default parameters provide fallback values
- `*args` and `**kwargs` allow flexible argument lists
- Lambda functions are concise one-line functions
- Modules organize related functions into files
- Import modules with `import` or `from ... import`
- Use docstrings to document functions
- Follow naming conventions: `snake_case` for functions

## Next Steps

Continue your Python journey with:
- Data structures (lists, dictionaries, sets, tuples)
- Object-oriented programming (classes and objects)
- File handling and working with data
- Error handling and exceptions
