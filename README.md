# User Management App

A responsive, modern, and feature-rich web application built with **Next.js**, **TypeScript**, **TanStack Table**, and **TailwindCSS**. This app displays user data in a dynamic table with advanced features like sorting, pagination, and filtering, and emphasizes modularity with reusable components.

---

## **Features**

- **User Table**:
  - Responsive, paginated, and sortable table displaying user data.
  - Global search and dynamic row count selection.
- **Reusable Components**:

  - `TopBar`: A navigation bar for consistent app-wide use.

- **Error Handling**:

  - Graceful error handling with placeholder messages for loading and API issues.

- **Responsive Design**:
  - Fully mobile-friendly using TailwindCSS.

---

## **Tech Stack**

### **Frontend**

- [Next.js](https://nextjs.org/): React-based framework for server-side rendering and static site generation.
- [TypeScript](https://www.typescriptlang.org/): Type-safe JavaScript for robust development.
- [TanStack Table](https://tanstack.com/table/v8): Advanced table library for sorting, pagination, and filtering.
- [TailwindCSS](https://tailwindcss.com/): Utility-first CSS framework for fast styling.

### **Backend**

- **Mocked API**:
  - Placeholder API (`https://jsonplaceholder.typicode.com/users`) for fetching user data.

### **Tools**

- [Axios](https://axios-http.com/): Promise-based HTTP client for API calls.
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/): For writing and running unit tests.
- [Storybook](https://storybook.js.org/): For developing and testing UI components in isolation.

---

## **Installation and Usage**

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Run the development server:

   ```bash
   npm run dev

   ```

4. Open your browser and navigate to:
   ```bash
   http://localhost:3000
   ```

## **Storybook**

### Running Storybook

To view and test components in isolation, run Storybook:
```bash
npm run storybook
```

Storybook will start and can be accessed at:
```bash
http://localhost:6006

```

