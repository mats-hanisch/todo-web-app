# Todo App

A focused **todo app with flashcard-style UI** where you see **one item at a time**, mark it as done, and manage your personal stack — no scattered lists. Built with **Express.js** and **[htmlrl](https://github.com/mats-hanisch/htmlrl-js)**, and featuring a **secure authentication system**, this app helps you stay organized and focused, just like using flashcards for tasks or notes.

---

## Features

- **One-item-at-a-time view:** Focus on a single task or note without distractions.
- **Mark as done:** Remove items from the stack with just one click.
- **Personal stack:** All your tasks and notes live in one place — no separate lists.
- **Authentication:** Secure login and registration to keep your data private.
- **Add/Edit/Delete items:** Manage your stack as you go.
- **Responsive design:** Works on desktop and mobile.

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose) and Redis (for sessions)
- **Frontend:** HTML, CSS, JavaScript, htmrl (render lib)
- **Authentication:** Sessions (via express-session)

---

## Getting Started

### Prerequisites

- Node.js >= 16
- npm >= 8
- MongoDB instance (local or hosted, e.g., MongoDB Atlas)
- Redis instance (local or hosted)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mats-hanisch/todo-web-app.git
   cd todo-web-app

2. Install dependencies:
   ```bash
   npm install


3. Create a .env file based on the provided .env.template and edit to add your own credentials. All needed variables are listed with examples in .env.template.


4. Start the server:
   ```bash
    node src/server.js

5. Open the browser at the given link (found in the output after starting the app).

### Usage

---

1. **Register or log in** to your account.
2. **Add tasks or notes** to your personal stack.
3. **Tap or click** to see the next item in your stack.
4. **Mark items as done** to keep your stack up-to-date.
5. **Repeat**.

---

## License

This project is licensed under the **MIT License**.
