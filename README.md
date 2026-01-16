# Task Manager

A modern task management application built for companies to manage clients, assign tasks, and track progress in a clean and structured way.

The app is designed with a **company-first workflow**:
- Companies register and log in
- Companies create and manage their own clients
- Tasks belong to a company and a client
- Only the owning company can view, update, or delete its data

---

## Features

- Company authentication (Credentials-based, NextAuth)
- Client management (create, update, delete)
- Task management (create, update status, edit details, delete)
- Task overview dashboard with live charts
- Client-specific task overview
- Secure API routes (company-scoped access)
- Clean dark UI with styled-components
- Responsive layout (desktop & mobile)

---

## Tech Stack

- **Next.js**
- **NextAuth (Credentials Provider)**
- **MongoDB + Mongoose**
- **SWR**
- **styled-components**
- **ApexCharts**
- **Lucide Icons**

---

## Folder Structure

```
.
├── components
│   ├── ApexCharts
│   │   └── TasksOverviewChart.js
│   │
│   ├── Auth
│   │   ├── StyledAuthPage.js
│   │
│   ├── Clients
│   │   ├── ClientList.js
│   │   ├── CreateClientForm.js
│   │   ├── StyledClientsList.js
|   |   ├── StyledClientsDetails.js
│   │   ├── StyledClientsPages.js
│   │
|   ├── Feedback
|   |   ├── EmptyState.js
|   |   ├── PageError.js
|   |
|   ├── HomePageStyles
|   |   ├── StyledDashboard.js
|   |   ├── StyledHomePage.js
|   |
│   ├── Layout
│   │   ├── DashboardActions.js
│   │   ├── Header.js
│   │   ├── StyledDashboardActions.js
│   │   ├── StyledHeader.js
│   │   ├── StyledPageShell.js
│   │
│   ├── Tasks
│   │   ├── TaskList.js
│   │   ├── TaskCard.js
│   │   ├── CreateTaskForm.js
│   │   ├── StyledTaskColumns.js
|   |
│   ├── Loading
│   │   ├── PageLoading.js
│   │   ├── Spinner.js
│   │
│   ├── TaskDetails
│   │   ├── TaskDetails.js
│   │   ├── StyledTaskDetails.js
│   │
│   ├── Tasks
│   │   ├── CreateTaskForm.js
│   │   ├── StyledCreateTaskForm.js
│   │   ├── StyledTaskCard.js
│   │   ├── StyledTaskColumns.js
│   │   ├── TaskCard.js
│   │   ├── TaskList.js
│
├── db
│   ├── connect.js
│   ├── models
│   │   ├── Company.js
│   │   ├── Client.js
│   │   ├── Task.js
│
├── pages
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth].js
│   │   ├── companies
│   │   |  └── index.js
│   │  
│   │   ├── clients
│   │   |  ├── [id].js
│   │   |  └── index.js
|   |
│   │   ├── tasks
│   │   |  ├── [id].js
|   |   |  └── index.js
│   │
│   ├── clients
│   │   ├── [id].js
│   │   └── index.js
│   │
│   ├── tasks
│   │   ├── [id].js
│   │   └── new-task.js
│   │
│   ├── dashboard.js
│   ├── login.js
│   ├── register.js
│   └── index.js
│
├── styles.js
│
├── .env.local
├── package.json
└── README.md
```

---

## Authentication & Security

- Authentication handled via **NextAuth (Credentials)**
- Passwords are hashed with **bcrypt**
- Each API route is protected with `getServerSession`
- Companies can only:
  - Access their own tasks
  - Access their own clients
  - Modify or delete their own data

---

## Dashboard Overview

- Task overview chart (To Do / In Progress / Done)
- Task columns grouped by status
- Live updates via SWR
- Clean and focused UI for daily company use

---

## Environment Variables

Create a `.env.local` file:

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

---

## Future Improvements

- Confirm dialogs for destructive actions
- Role-based access (admin / employee)
- Due dates and priorities
- Search & filtering
- Notifications

---

## Author

Built as a learning-focused full-stack project with emphasis on:
- clean architecture
- scoped data access
- realistic company workflows

