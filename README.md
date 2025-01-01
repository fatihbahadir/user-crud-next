# User CRUD with Next.js

A user management application built using Next.js. This app allows users to perform CRUD (Create, Read, Update, Delete) operations on user profiles, with form validation and state management.

## Features
- Create, Read, Update, and Delete users with a simple and intuitive interface.
- Form validation using Formik and Yup to ensure correct user input.
- Styled UI using TailwindCSS.
- Global state management with React-Redux and handling side effects using Redux-Saga.
- Notifications with React-Toastify.

## Installation

1. Clone the repository:
    git clone https://github.com/fatihbahadir/user-crud-next.git

2. Navigate to the project directory:
    cd user-crud-next

3. Install the dependencies using npm:
    npm install

## Development

Run the development server with:
    npm run dev
Visit http://localhost:3000 in your browser to see the app in action.

## Environment Configuration

Create a `.env` file in the root of the project and add the following configuration for the backend API base URL:
```
NEXT_PUBLIC_BASE_URL=http://localhost:8888
```
This environment variable will be used in the application to interact with the backend API. Make sure to replace the URL with the appropriate base URL if needed.

## Technologies Used
- Next.js: Framework for building React applications with server-side rendering.
- Formik: For handling form inputs and validation.
- Yup: Schema builder for form validation.
- Axios: HTTP client for making API requests.
- React-Redux: State management library for managing global app state.
- Redux-Saga: Middleware for handling side effects in Redux.
- TailwindCSS: Utility-first CSS framework for rapid UI development.
- React-Toastify: For easy toast notifications.
