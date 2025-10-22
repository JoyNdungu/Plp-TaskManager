# Week 3: React.js, JSX, and Tailwind CSS – Task Manager App

## Overview
This is a responsive React application built using **JSX** and **Tailwind CSS**.  
It demonstrates:

- Component architecture with reusable components (Button, Card, Navbar, Footer, Layout)
- State management using React hooks (`useState`, `useEffect`, `useContext`)
- Custom hooks (`useLocalStorage`) for persistent data
- API integration with infinite scroll and error handling
- Light/Dark theme switching
- Responsive design for mobile, tablet, and desktop

---

## Features

### Task Manager
- Add new tasks
- Mark tasks as completed / undone
- Delete tasks
- Filter tasks (All, Active, Completed)
- Persist tasks in **localStorage**

### API List Page
- Fetch posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Infinite scroll to load more posts
- Loading and error states

### UI / Styling
- Fully responsive with **Tailwind CSS**
- Light/Dark theme toggle
- Reusable UI components

---

## Project Structure

src/
├── components/
│ ├── Button.jsx
│ ├── Card.jsx
│ ├── Footer.jsx
│ ├── Layout.jsx
│ └── Navbar.jsx
├── context/
│ └── ThemeContext.jsx
├── hooks/
│ └── useLocalStorage.jsx
├── pages/
│ ├── Home.jsx
│ ├── TaskManager.jsx
│ └── ApiListPage.jsx
├── App.jsx
├── main.jsx
└── index.css


## Installation

1. Clone the repository:

```bash
git clone <YOUR_REPO_URL>
cd TaskManager
```
Install dependencies:

```bash
npm install
```
Start the development server:
```bash
npm run dev
```
The app should now be running at http://localhost:5173 (or the port Vite shows).


Deployed URL: [https://plp-task-manager-taupe.vercel.app/]

Screenshots
Home Page
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/970f7afa-c476-4dff-97d4-12e3f6b148d0" />

Task Manager Page
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2afe7f95-238a-4920-8b8b-9df33b374f23" />

API List Page (Infinite Scroll)
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0270c19d-c5e3-46bb-ae34-db1728e1e78d" />

Technologies Used
React.js
JSX
Tailwind CSS
React Router
LocalStorage
JSONPlaceholder API

