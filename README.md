# devTinder Frontend

![devTinder Banner](https://placehold.co/1200x400?text=devTinder+Developer+Networking+Platform)

**A Modern Developer Networking Platform**

Welcome to the `devTinder Frontend` repository! This project powers the client-side experience for devTinder — a networking platform where developers can connect, collaborate, and grow professionally.

---

## 📑 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Getting Started](#%EF%B8%8F-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#-project-structure)
- [API Endpoints (Frontend Interaction)](#-api-endpoints-frontend-interaction)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### ✅ Implemented

- **Authentication System**
  - Login/Logout with JWT and cookie-based session
  - Protected routes using React Router
  - Form validation using custom `useLoginForm` hook
  - Auth state persisted via Redux

- **Global State Management**
  - Redux Toolkit integration (`userSlice`, `appStore`)
  - Centralized state for user authentication

- **UI Components**
  - Optimized `Navbar` with memoization and `shallowEqual`
  - Reusable `TextInput` and `PasswordInput`
  - Responsive DaisyUI design with dark/light theme support

- **UX Enhancements**
  - Toast notifications with `react-hot-toast`
  - Loading indicators with `Spinner`
  - Mobile-friendly navigation menu

- **API Integration**
  - Secure POST `/auth/login` with Axios
  - `withCredentials: true` support for cookies
  - Centralized API constants in `constants.js`

### 🚧 Planned

- Developer profile cards & feed
- Swipe-based connection interactions
- Messaging & real-time chat
- Profile creation/editing

---

## 🛠 Technologies Used

| Category        | Technology             |
|----------------|------------------------|
| Framework      | React 18               |
| Build Tool     | Vite 4                 |
| Styling        | Tailwind CSS + DaisyUI |
| Routing        | React Router v6        |
| State Manager  | Redux Toolkit          |
| API Handling   | Axios 1.5              |
| Notifications  | react-hot-toast        |
| Backend API    | Node.js + Express      |

---

## ⚙️ Getting Started

### 📌 Prerequisites

- Node.js ≥ 18.x
- npm ≥ 8.x (or Yarn)
- Git

### 🔧 Installation

```bash
git clone https://github.com/your-username/devtinder-frontend.git // have to chnage later

cd devtinder-frontend
npm install





src/
├── assets/                  # Static files (images, icons)
├── components/              # Reusable UI components
│   ├── auth/                # Auth-related components
│   │   ├── LoginForm.jsx
│   │   ├── PasswordInput.jsx
│   │   └── TextInput.jsx
│   ├── formFields/          # Generic form inputs
│   ├── layouts/             # Page/layout wrappers
│   ├── Navbar.jsx           # Optimized navbar
│   └── Spinner.js           # Loading spinner
├── hooks/
│   └── useLoginForm.js      # Custom hook for login handling
├── pages/                   # Route-based components
│   ├── Connections.jsx
│   ├── Home.jsx
│   ├── LoginPage.jsx
│   └── NotFound.jsx
├── routes/                  # React Router config
├── services/
│   └── api.js               # Axios instance setup
├── utils/
│   ├── constants.js         # App-level constants (API base URL, defaults)
│   ├── formValidators.js    # Input validation helpers
│   └── redux/               # Redux store setup
│       ├── appStore.js      # Configured Redux store
│       └── userSlice.js     # User auth reducer
├── App.css                  # Global styles
├── App.jsx                  # Root component
└── index.css                # Tailwind/DaisyUI base styles
