# File with heading

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

```markdown
# Project Folder Structure

This document outlines the typical folder structure and organization of a Next.js project using the **App Router**. Each folder serves a specific purpose and helps maintain clarity and scalability in the project.

## 1. `app/`
The `app/` folder is the heart of the Next.js **App Router**. It defines the routes, layouts, and pages in your application.

- **`layout.tsx`**: Defines the layout for the application (headers, footers, or sidebars) and can be nested for different sections of the site.
- **`page.tsx`**: Represents the main content for a specific route (e.g., `/` for the homepage).
- **`api/`**: Houses server-side API routes that handle server-side logic, database queries, and other backend functionalities.

**Example:**
```javascript

app/
├── layout.tsx        // Global layout
├── page.tsx          // Homepage
├── dashboard/
│   ├── layout.tsx    // Layout for all dashboard pages
│   └── page.tsx      // Represents /dashboard route
└── api/
    └── auth/
        └── route.ts  // API route for authentication (/api/auth)

```

## 2. `components/`

The `components/` folder holds all reusable UI components. Components that are used in multiple places across the app should be placed here.

- Organize components into subfolders, especially if they include complex logic or scoped styles.

**Example:**

```javascript

components/
├── Navbar.tsx       // Navigation bar component
├── Footer.tsx       // Footer component
└── Button/
    ├── Button.tsx   // Button component
    └── Button.module.css  // Styles scoped to Button component

```

## 3. `context/`

The `context/` folder stores React contexts used for managing global state across the application. It could include user authentication contexts, theme contexts, or other global state management needs.

**Example:**

```javascript

context/
└── AuthContext.tsx  // Manages user authentication logic

```

## 4. `hooks/`

Custom hooks are placed in the `hooks/` folder. Hooks allow you to extract and reuse logic, such as data fetching or form handling.

**Example:**

```javascript

hooks/
└── useAuth.ts       // Custom hook for authentication logic

```

## 5. `lib/`

The `lib/` folder contains utility functions or helper libraries that are shared across different parts of the project. These could include API wrappers, authentication helpers, or any other reusable logic.

**Example:**

```javascript

lib/
└── api.ts           // Functions for making API requests (e.g., fetchUser, updateProfile)

```

## 6. `public/`

The `public/` folder contains static assets like images, fonts, and other media files that are served directly to the client. Files in this folder can be accessed via direct URLs (e.g., `/assets/logo.png`).

**Example:**

```javascript

public/
├── favicon.ico      // Favicon for the site
└── assets/
    ├── logo.png     // Logo for the site
    └── banner.jpg   // Banner image

```

## 7. `styles/`

This folder contains global and component-specific styles for the project. Styles can be organized into global CSS files or CSS modules for individual components.

- **`globals.css`**: Global styles applied across the app.
- **CSS Modules**: Scoped styles specific to components to prevent name collisions.

**Example:**

```javascript

styles/
├── globals.css      // Global CSS styles for typography, layout, etc.
└── components/
    └── Button.module.css  // Scoped styles for Button component

```

## 8. `utils/`

The `utils/` folder stores utility functions used across the project. These functions perform tasks like date formatting, string manipulation, or error handling.

**Example:**

```javascript

utils/
└── formatDate.ts    // Function to format dates in the application

```

## 9. `api/`

In the **App Router**, API routes live under the `app/api/` folder. These handle server-side logic and can interact with databases, perform authentication, or return data to the client.

**Example:**

```javascript

app/
└── api/
    └── auth/
        └── route.ts  // API route for authentication logic

```
