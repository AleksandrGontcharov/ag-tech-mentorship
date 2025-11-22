---
sidebar_position: 1
---

# Python Installation

Python is a versatile, beginner-friendly programming language used for web development, data science, automation, and more.

## Windows Installation

### Using the Official Installer

1. Visit the official Python website: https://www.python.org/downloads/
2. Download the latest Python 3.x installer for Windows
3. **Important**: Check the box "Add Python to PATH" during installation
4. Click "Install Now"

### Verify Installation

Open Command Prompt and run:

```bash
python --version
```

You should see output like:
```
Python 3.11.x
```

Also verify pip (Python's package manager):

```bash
pip --version
```

### Alternative: Using Microsoft Store

1. Open Microsoft Store
2. Search for "Python 3.11" (or latest version)
3. Click "Get" to install

## macOS Installation

### Using Homebrew (Recommended)

First, install Homebrew if you haven't already:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install Python:

```bash
brew install python
```

### Verify Installation

```bash
python3 --version
pip3 --version
```

### Alternative: Official Installer

1. Visit https://www.python.org/downloads/
2. Download the macOS installer
3. Run the .pkg file and follow the installation wizard

## Linux Installation

### Ubuntu/Debian

Python 3 is usually pre-installed. Update to the latest version:

```bash
sudo apt update
sudo apt install python3 python3-pip
```

### Fedora

```bash
sudo dnf install python3 python3-pip
```

### Arch Linux

```bash
sudo pacman -S python python-pip
```

### Verify Installation

```bash
python3 --version
pip3 --version
```

## Setting Up a Virtual Environment

Virtual environments keep project dependencies isolated. This is a best practice for Python development.

### Create a Virtual Environment

```bash
# Navigate to your project directory
cd my-project

# Create virtual environment
python -m venv venv
```

### Activate the Virtual Environment

**Windows:**
```bash
venv\Scripts\activate
```

**macOS/Linux:**
```bash
source venv/bin/activate
```

You'll see `(venv)` in your terminal prompt when activated.

### Install Packages

With the virtual environment activated:

```bash
pip install requests  # Example: install the requests library
```

### Deactivate

When done working:

```bash
deactivate
```

## Installing VS Code for Python

VS Code is an excellent editor for Python development.

1. Download VS Code: https://code.visualstudio.com/
2. Install the Python extension:
   - Open VS Code
   - Click Extensions icon (or press `Ctrl+Shift+X`)
   - Search for "Python"
   - Install the official Python extension by Microsoft

## Your First Python Program

Create a file called `hello.py`:

```python
print("Hello, World!")
```

Run it:

```bash
python hello.py
```

Expected output:
```
Hello, World!
```

## Next Steps

Now that Python is installed, you're ready to:
- Learn Python basics (variables, data types, operators)
- Explore control flow (if statements, loops)
- Write functions and work with modules

Continue to the next tutorial to start writing Python code!
