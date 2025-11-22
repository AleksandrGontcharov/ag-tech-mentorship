---
sidebar_position: 3
---

# Control Flow

Control flow structures let you decide which code to execute based on conditions and repeat code multiple times.

## Conditional Statements

### if Statement

Execute code only when a condition is true:

```python
age = 18

if age >= 18:
    print("You are an adult")
```

**Important**: Python uses indentation (4 spaces) to define code blocks.

### if-else Statement

Execute one block if true, another if false:

```python
temperature = 25

if temperature > 30:
    print("It's hot outside")
else:
    print("The weather is pleasant")
```

### if-elif-else Statement

Check multiple conditions:

```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")
```

### Nested if Statements

```python
age = 25
has_license = True

if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("You need a license to drive")
else:
    print("You're too young to drive")
```

### Combining Conditions

```python
age = 20
student = True

# Using 'and' - both must be true
if age >= 18 and student:
    print("Adult student discount applies")

# Using 'or' - at least one must be true
if age < 18 or age > 65:
    print("Special pricing available")

# Using 'not' - reverse the condition
if not student:
    print("Regular pricing")
```

### Ternary Operator

Compact if-else for simple assignments:

```python
age = 20

# Long form
if age >= 18:
    status = "adult"
else:
    status = "minor"

# Short form (ternary)
status = "adult" if age >= 18 else "minor"
```

## Loops

Loops repeat code multiple times.

### while Loop

Repeat while a condition is true:

```python
# Count from 1 to 5
count = 1
while count <= 5:
    print(count)
    count += 1
```

#### Infinite Loop Warning

```python
# This will run forever!
# while True:
#     print("Forever...")

# Use break to exit
while True:
    user_input = input("Type 'quit' to exit: ")
    if user_input == "quit":
        break
    print(f"You typed: {user_input}")
```

### for Loop

Iterate over a sequence (range, list, string, etc.):

#### Using range()

```python
# Print numbers 0 to 4
for i in range(5):
    print(i)

# Print numbers 1 to 5
for i in range(1, 6):
    print(i)

# Print even numbers from 0 to 10
for i in range(0, 11, 2):
    print(i)
```

**range() parameters**:
- `range(stop)` - from 0 to stop-1
- `range(start, stop)` - from start to stop-1
- `range(start, stop, step)` - from start to stop-1, incrementing by step

#### Iterating Over Strings

```python
# Print each character
for char in "Python":
    print(char)

# Output:
# P
# y
# t
# h
# o
# n
```

### Loop Control Statements

#### break

Exit the loop immediately:

```python
for num in range(1, 11):
    if num == 5:
        break
    print(num)

# Output: 1, 2, 3, 4
```

#### continue

Skip to the next iteration:

```python
for num in range(1, 6):
    if num == 3:
        continue
    print(num)

# Output: 1, 2, 4, 5 (skips 3)
```

#### pass

Do nothing (placeholder):

```python
for num in range(5):
    if num == 3:
        pass  # TODO: implement something here later
    else:
        print(num)
```

### else with Loops

The `else` block runs if the loop completes normally (not broken):

```python
# Search for a number
search_num = 7
numbers = [1, 3, 5, 7, 9]

for num in numbers:
    if num == search_num:
        print(f"Found {search_num}!")
        break
else:
    print(f"{search_num} not found")
```

### Nested Loops

Loops inside loops:

```python
# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i * j}")
    print()  # Blank line between tables
```

## Pattern Matching (match-case)

Python 3.10+ has pattern matching (similar to switch statements):

```python
command = "start"

match command:
    case "start":
        print("Starting the program...")
    case "stop":
        print("Stopping the program...")
    case "pause":
        print("Pausing the program...")
    case _:  # Default case
        print("Unknown command")
```

## Common Patterns

### Input Validation

```python
while True:
    age = input("Enter your age: ")

    if age.isdigit():
        age = int(age)
        if age > 0 and age < 150:
            break
        else:
            print("Age must be between 1 and 150")
    else:
        print("Please enter a valid number")

print(f"Your age is {age}")
```

### Menu System

```python
while True:
    print("\n=== Menu ===")
    print("1. Option 1")
    print("2. Option 2")
    print("3. Exit")

    choice = input("Enter choice: ")

    if choice == "1":
        print("You selected Option 1")
    elif choice == "2":
        print("You selected Option 2")
    elif choice == "3":
        print("Goodbye!")
        break
    else:
        print("Invalid choice")
```

### Finding Maximum Value

```python
numbers = [45, 23, 87, 12, 67]

max_num = numbers[0]
for num in numbers:
    if num > max_num:
        max_num = num

print(f"Maximum: {max_num}")
```

## Practice Exercises

### Exercise 1: Even or Odd

```python
number = int(input("Enter a number: "))

if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")
```

### Exercise 2: Sum of Numbers

```python
# Calculate sum of numbers 1 to 100
total = 0
for num in range(1, 101):
    total += num

print(f"Sum of 1 to 100: {total}")
```

### Exercise 3: Password Validator

```python
password = input("Create a password: ")

# Check password requirements
has_length = len(password) >= 8
has_digit = any(char.isdigit() for char in password)
has_upper = any(char.isupper() for char in password)

if has_length and has_digit and has_upper:
    print("Password is strong!")
else:
    print("Password must be:")
    if not has_length:
        print("- At least 8 characters")
    if not has_digit:
        print("- Contains at least one digit")
    if not has_upper:
        print("- Contains at least one uppercase letter")
```

### Exercise 4: FizzBuzz

Classic programming challenge:

```python
# Print numbers 1 to 100, but:
# - Print "Fizz" for multiples of 3
# - Print "Buzz" for multiples of 5
# - Print "FizzBuzz" for multiples of both

for num in range(1, 101):
    if num % 3 == 0 and num % 5 == 0:
        print("FizzBuzz")
    elif num % 3 == 0:
        print("Fizz")
    elif num % 5 == 0:
        print("Buzz")
    else:
        print(num)
```

### Exercise 5: Guess the Number

```python
import random

secret_number = random.randint(1, 100)
attempts = 0
max_attempts = 10

print("I'm thinking of a number between 1 and 100")

while attempts < max_attempts:
    guess = int(input(f"Attempt {attempts + 1}/{max_attempts} - Your guess: "))
    attempts += 1

    if guess < secret_number:
        print("Too low!")
    elif guess > secret_number:
        print("Too high!")
    else:
        print(f"Correct! You found it in {attempts} attempts!")
        break
else:
    print(f"Game over! The number was {secret_number}")
```

## Key Takeaways

- **if/elif/else** - Make decisions based on conditions
- **while loop** - Repeat while condition is true
- **for loop** - Iterate over sequences
- **break** - Exit loop early
- **continue** - Skip to next iteration
- **pass** - Placeholder that does nothing
- Indentation matters in Python!
- Use comparison and logical operators to build complex conditions

## Next Steps

Now that you understand control flow, continue to:
- Functions and modules
- Data structures (lists, dictionaries, sets, tuples)
- File handling and error handling
