# devTinder Frontend  

![devTinder Banner](https://placehold.co/1200x400?text=devTinder+Developer+Networking+Platform)  

**A Modern Developer Networking Platform**  

Welcome to the `devTinder Frontend` repository! This project powers the client-side experience for devTinder, a platform dedicated to helping developers connect, network, and discover new opportunities based on shared interests, skills, and professional goals.

## 📑 Table of Contents  
- [Features](#-features)  
- [Technologies Used](#-technologies-used)  
- [Getting Started](#%EF%B8%8F-getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Environment Variables](#environment-variables)  
  - [Running the Server](#running-the-development-server)  
- [Project Structure](#-project-structure)  
- [API Endpoints](#-api-endpoints-frontend-interaction)  
- [Deployment](#-deployment)  
- [Contributing](#-contributing)  
- [License](#-license)  

## ✨ Features  

### ✅ Implemented  
- **Authentication System**  
  - Login/Logout with JWT token management  
  - Protected routes using React Router  
  - Form validation with `useLoginForm` hook  

- **Core UI Components**  
  - Reusable `TextInput` and `PasswordInput`  
  - Responsive DaisyUI navbar  
  - Loading states and error toasts  

- **API Integration**  
  - Axios with interceptors  
  - POST `/login` endpoint  
  - Authorization headers  

### 🚧 Planned  
- Developer matching feed  
- Connection management (Like/Pass)  
- User profile pages  

## 🛠 Technologies Used  

| Category          | Technology       |
|-------------------|------------------|
| Framework         | React 18         |
| Build Tool        | Vite 4           | 
| Routing           | React Router 6   |
| Styling           | Tailwind CSS + DaisyUI |
| HTTP Client       | Axios 1.5        |
| Backend           | Node.js/Express  |

## ⚙️ Getting Started  

### Prerequisites  
- Node.js ≥18.x  
- npm ≥8.x or Yarn  
- Git  

### Installation  
```bash
git clone https://github.com/your-username/devtinder-frontend.git
cd devtinder-frontend
npm install


src/
├── assets/ # Static assets (images, icons)
├── components/ # Reusable UI components
│ ├── auth/ # Authentication components
│ │ ├── LoginForm.jsx # Login form with validation
│ │ ├── PasswordInput.jsx # Secure password field
│ │ └── TextInput.jsx # Controlled text input
│ ├── formFields/ # Form input components
│ ├── layouts/ # Layout wrappers
│ ├── Navbar.jsx # Main navigation
│ └── Spinner.js # Loading indicator
├── hooks/ # Custom hooks
│ └── useLoginForm.js # Form handling logic
├── pages/ # Route components
│ ├── Connections.jsx # Connection management
│ ├── Home.jsx # Landing page
│ ├── LoginPage.jsx # Login screen
│ └── NotFound.jsx # 404 page
├── routes/ # Route configurations
├── services/ # API services
│ └── api.js # Axios instance
├── utils/ # Utility functions
│ └── formValidators.js # Validation logic
├── App.css # Global styles
├── App.jsx # Root component
└── index.css # Base styles