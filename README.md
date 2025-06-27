# 🧑‍💻 Freelance Task Marketplace

A modern and minimal UI freelance task marketplace built with the MERN stack. The platform allows individuals to post freelance tasks and freelancers to find work based on skills, deadlines, and budget.

---

## 🎯 Project Overview

This project aims to connect clients and freelancers in a seamless and intuitive environment.

### 🔑 Key Features

- 🔒 **Authentication**
  - Email/Password login & registration
  - Google OAuth support
  - Protected routes with conditional rendering

- 📋 **Task Management**
  - Add, Browse, Update, Delete tasks
  - View task details (Protected route)
  - Filter by category, deadline, etc.
  - Post bids on tasks (if implemented)

- 🏠 **Pages & Routing**
  - Home: Banner/Slider, Featured Tasks, and 2 extra meaningful sections
  - Browse Tasks
  - My Posted Tasks (Private)
  - Add Task (Private)
  - Task Details (Private)
  - Login/Register
  - Update Task (Private)
  - 404 Not Found

- 🧠 **Dynamic Content**
  - Shows user info when logged in
  - Task lists sorted by deadline (limit to 6 featured tasks on home)
  - Interactive UI with toast and SweetAlert for feedback

- 🌐 **Responsive Design**
  - Fully mobile, tablet, and desktop compatible
  - Modern minimal UI, inspired by platforms like ThemeForest

---

## 🧱 Tech Stack

| Tech             | Usage                      |
|------------------|----------------------------|
| React            | Frontend                   |
| React Router DOM | Routing                    |
| Firebase         | Authentication             |
| Node.js + Express| Backend API                |
| MongoDB          | Database                   |
| Tailwind CSS     | Styling                    |
| SweetAlert / Toast| Alerts & Notifications    |

---

## 🔐 Protected Routes

Pages like `Add Task`, `My Posted Tasks`, `Task Details`, and `Update Task` are only accessible when the user is logged in. Redirects to login page if unauthenticated.

---

## 🧭 Navigation Structure

- Home
- Add Task _(Private)_
- Browse Tasks
- My Posted Tasks _(Private)_
- Login / Signup (conditional)
- User Profile & Logout (conditional)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/iamamolsarker/Task-Market-PH_Project-10-Client.git
cd Task-Market-PH_Project-10-Client
