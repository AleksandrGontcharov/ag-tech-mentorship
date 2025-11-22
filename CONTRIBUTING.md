# Contributing to AG Tech Mentorship

Thank you for your interest in contributing to the AG Tech Mentorship project! This guide will help you get started.

## Table of Contents

- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Content Guidelines](#content-guidelines)
- [Code Style](#code-style)
- [Submitting Changes](#submitting-changes)

## Repository Structure

This project uses a **two-repository setup**:

1. **Source Repository**: [ag-tech-mentorship](https://github.com/AleksandrGontcharov/ag-tech-mentorship)
   - Contains all source code, markdown files, and configuration
   - This is where you make all changes and submit pull requests
   - Built using Docusaurus 3

2. **Deployment Repository**: [ag-tech-mentorship-website](https://github.com/AleksandrGontcharov/ag-tech-mentorship-website)
   - Contains compiled HTML/CSS/JS for GitHub Pages
   - Automatically updated when deploying from the source repository
   - Do not make direct changes to this repository

## Getting Started

### Prerequisites

- Node.js >= 16.14
- Yarn package manager
- Git

### Initial Setup

1. Fork and clone the source repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/ag-tech-mentorship.git
   cd ag-tech-mentorship
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn start
   ```

   This opens a browser window at `http://localhost:3000` with live reload.

## Development Workflow

### Making Changes

1. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes:
   - Add/edit markdown files in the `docs/` directory
   - Modify React components in the `src/` directory
   - Update configuration in `docusaurus.config.js` or `sidebars.js`

3. Preview your changes locally:
   ```bash
   yarn start
   ```

4. Build to check for errors:
   ```bash
   yarn build
   ```

5. Run type checking:
   ```bash
   yarn typecheck
   ```

### Project Structure

```
ag-tech-mentorship/
├── docs/                          # Documentation content (markdown/MDX)
│   ├── intro.md
│   ├── foundational-program/      # Beginner content
│   ├── programming-languages/     # Language-specific tutorials
│   └── specialized-topics/        # Advanced topics
├── src/                           # React components and custom code
│   ├── components/
│   ├── css/
│   └── pages/
├── static/                        # Static assets (images, files)
├── docusaurus.config.js          # Main configuration
├── sidebars.js                   # Sidebar navigation
└── package.json                  # Dependencies
```

## Content Guidelines

### Adding New Documentation

1. Create a new `.md` or `.mdx` file in the appropriate `docs/` subdirectory
2. Add frontmatter at the top:
   ```markdown
   ---
   sidebar_position: 1
   title: Your Page Title
   ---

   # Your Page Title

   Content goes here...
   ```

3. The sidebar will auto-generate based on the file structure
4. Use `sidebar_position` to control ordering within a folder

### Writing Style

- Use clear, concise language
- Include code examples where appropriate
- Add links to related documentation
- Use headings to organize content hierarchically
- Test all code examples before committing

### Code Examples

Use language-specific code blocks with syntax highlighting:

```markdown
```javascript
// Your code here
const example = "Hello World";
```
```

### Images and Assets

- Place images in `static/img/`
- Reference them in markdown: `![Alt text](/img/your-image.png)`
- Optimize images before committing

## Code Style

### Markdown/MDX

- Use 2 spaces for indentation
- Leave blank lines around headings and code blocks
- Use descriptive link text

### JavaScript/TypeScript

- Follow the existing code style
- Use TypeScript for new components when possible
- Run `yarn typecheck` before committing

### Formatting

The project uses Prettier for code formatting:

```bash
# Check formatting
yarn prettier --check .

# Auto-fix formatting
yarn prettier --write .
```

Configuration is in `.prettierrc`

## Submitting Changes

### Before Submitting

1. Ensure your changes build successfully:
   ```bash
   yarn build
   ```

2. Run type checking:
   ```bash
   yarn typecheck
   ```

3. Test locally:
   ```bash
   yarn start
   ```

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Pull Request Process

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a pull request against the `master` branch of the source repository

3. In your PR description:
   - Describe what changes you made
   - Explain why these changes are needed
   - Include screenshots for UI changes
   - Link any related issues

4. Wait for review and address any feedback

### Commit Message Guidelines

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Keep the first line under 72 characters
- Reference issues and pull requests when relevant

Examples:
```
Add Python basics tutorial
Fix broken link in Git documentation
Update cybersecurity section with 2024 content
```

## Need Help?

- Check existing documentation in the `docs/` folder
- Review the [Docusaurus documentation](https://docusaurus.io/)
- Open an issue for bugs or feature requests
- Ask questions in pull request comments

## License

By contributing, you agree that your contributions will be licensed under the same license as this project.

Thank you for contributing to AG Tech Mentorship!
