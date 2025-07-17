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
  - Global session validation using `AppLayout`
  - Protected & Public route guards with route preservation
  - Form validation using `useLoginForm` hook
  - Inline error display and layout-safe error handling

- **Global State Management**
  - Redux Toolkit (`userSlice`, `appStore`)
  - `isAuthenticated`, `isLoading`, `user` state maintained globally

- **UI Components**
  - Optimized `Navbar` with memoization and `shallowEqual`
  - Reusable `TextInput`, `PasswordInput`
  - `Spinner` component for loading states
  - Toast notifications for success (`react-hot-toast`)

- **Logout Feature**
  - Logout implemented via reusable `useLogout` hook
  - Secure backend logout with cookie removal and Redux reset

- **Routing**
  - React Router v6.23 setup
  - Nested layouts (`AppLayout`, `MainLayout`, `PublicLayout`)
  - `NotFound` page for unknown routes

- **User Experience**
  - Fully responsive design (DaisyUI + Tailwind)
  - Mobile-first navigation support
  - Inline validation, no layout shifts during error states

  - **Profile Management System**
  - Complete edit profile functionality with `createAsyncThunk`
  - Formik-based profile editing form with validation schema
  - New form field components (`TextInput`, `TextArea`, `GenderSelect`, `SkillsInput`)
  - Redux-powered profile state management
  - Success/error toast notifications for profile updates

- **Developer Feed**
  - Implemented Feed page with developer cards
  - Responsive card design with skills display
  - Interactive action buttons (Ignore/Interested)
  - Profile picture handling with fallbacks

### 🚧 Planned

- Developer profile creation/editing
- Developer discovery cards (swipe or match-based)
- Messaging & real-time chat (WebSocket/Socket.io)
- Notification system for invites/messages

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
git clone https://github.com/your-username/devtinder-frontend.git
cd devtinder-frontend
npm install




src/
├── assets/                  # Static files (images, icons)
├── components/              # Reusable UI components
│   ├── auth/                # Auth-related components
│   │   ├── LoginForm.jsx
│   │  
│   │  
│   ├── formFields/         # Generic input components
│   │    ├──PasswordInput.jsx
│   │    ├── TextInput.jsx
│   │    ├── TextArea.jsx
│   │    ├── SkillsInput.jsx
│   │    └── GenderSelect.jsx
│   │           
│   ├── Navbar.jsx           # Memoized Navbar
│   └── Spinner.jsx          # Loading spinner
├── hooks/
│   ├── useLoginForm.js      # Custom login form logic
│   └── useLogout.js         # Reusable logout logic
├── layouts/                 # Layout components (MainLayout, PublicLayout)
│   ├── AppLayout.jsx        # Global auth/session checker
│   ├── MainLayout.jsx       # Protected layout with navbar
│   └── PublicLayout.jsx     # Login/signup-only layout
├── pages/                   # Route-based pages
│   ├── Connections.jsx
│   ├── Home.jsx
│   ├── LoginPage.jsx
│   ├── ErrorPage.jsx
│   ├── NotFound.jsx
│   ├── Profile.jsx
│   ├──            .jsx
├── routes/                  # React Router config
│   ├── ProtectedRoute.jsx
│   ├── PublicRoute.jsx
│   └── router.jsx
│    
├── utils/
│   ├── constants.js         # API base URL and other constants 
│   ├── axiosInstance.js     # Axios instance with cookies enabled
│   ├── formValidators.js    # Input validation logic
│   ├── profileValidation.js # update profile validation schema
│   └── redux/               # Redux config
│       ├── appStore.js
│       ├── feedSlice.js
│       ├── userSlice.js
├── App.jsx                  # Root component
├── App.css                  # Global styles
└── index.css                # Tailwind & DaisyUI base styles
└── Main.jsx.css             # Tailwind & DaisyUI base styles






// for later
## Real-time connection requests (your case)