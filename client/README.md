# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

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
