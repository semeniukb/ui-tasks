# UI Tasks

A collection of React UI components built with TypeScript and tested with Jest. This project is for practicing building common UI components from scratch.

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Jest + React Testing Library** - Testing
- **Prettier + ESLint** - Code formatting and linting

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the component gallery.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main page with component links
│   └── tasks/
│       ├── accordion/        # Accordion component demo
│       └── progressbar/      # Progress bar component demo
└── components/
    ├── Accordion/            # Accordion component + tests
    └── PageWrapper/          # Shared layout wrapper
```

## Components

- **Accordion** - Expandable/collapsible content sections
- **Progress Bar** - Visual progress indicator

## Adding New Components

1. Create component in `src/components/ComponentName/`
2. Add test file `ComponentName.test.tsx`
3. Create demo page in `src/app/tasks/component-name/page.tsx`
4. Add entry to the components array in `src/app/page.tsx`
