# AG Tech Mentorship Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Repository Structure

This project uses a **two-repository setup**:

1. **This Repository** ([ag-tech-mentorship](https://github.com/AleksandrGontcharov/ag-tech-mentorship))
   - Source code, documentation content, and configuration
   - Where all development and contributions happen
   - Make your changes here

2. **Deployment Repository** ([ag-tech-mentorship-website](https://github.com/AleksandrGontcharov/ag-tech-mentorship-website))
   - Compiled static files for GitHub Pages
   - Automatically updated via deployment commands
   - Do not edit directly

**Live Site**: https://aleksandrgontcharov.github.io/ag-tech-mentorship-website/

## Prerequisites

- Node.js >= 16.14
- Yarn package manager

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Type Checking

```bash
yarn typecheck
```

Runs TypeScript type checking without emitting files.

## Deployment

The deployment process builds the site and pushes it to the [ag-tech-mentorship-website](https://github.com/AleksandrGontcharov/ag-tech-mentorship-website) repository.

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

This builds the website and pushes the static files to the deployment repository, which GitHub Pages serves automatically.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our development workflow and how to submit changes.

## Project Structure

```
ag-tech-mentorship/
├── docs/                          # Documentation content (Markdown/MDX files)
│   ├── intro.md
│   ├── foundational-program/      # Beginner tutorials
│   ├── programming-languages/     # Language-specific content
│   └── specialized-topics/        # Advanced topics
├── src/                           # React components and custom code
│   ├── components/
│   ├── css/
│   └── pages/
├── static/                        # Static assets (images, files)
├── docusaurus.config.js          # Site configuration
├── sidebars.js                   # Sidebar navigation
└── package.json                  # Dependencies and scripts
```

## Tech Stack

- **Framework**: Docusaurus 3.9.2
- **UI Library**: React 18.3.1
- **Language**: TypeScript 5.9.3
- **Styling**: CSS Modules
- **Icons**: FontAwesome 6.7.2
- **Diagrams**: Mermaid
- **Forms**: React Hook Form 7.66.1

## License

This project is open source and available for educational purposes.
