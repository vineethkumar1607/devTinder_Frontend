
# devTinder Frontend

## A Modern Developer Networking Platform

 Welcome to the `devTinder Frontend` repository! 
 This project powers the client-side experience for devTinder, a platform dedicated to helping developers connect, network, and discover new opportunities based on shared interests, skills, and professional goals. Built with cutting-edge frontend technologies, devTinder aims to provide a smooth, intuitive, and visually appealing user experience.

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Environment Variables](#environment-variables)
    * [Running the Development Server](#running-the-development-server)
* [Project Structure](#project-structure)
* [Routing](#routing)
* [UI Components & Styling](#ui-components--styling)
* [API Endpoints (Frontend Interaction)](#api-endpoints-frontend-interaction)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)

## Features

* **Modern Navbar:** A responsive, semantic, and accessible navigation bar for easy site navigation.
* **Client-Side Routing:** Seamless navigation between different sections of the application without full page reloads, powered by React Router DOM.
* **Developer Feed:** A paginated display of potential connections, intelligently filtering out users with whom the logged-in user already has a connection status (accepted, interested, rejected, ignored).
* **User Authentication:** (Planned/Basic) Secure user login and registration flows.
* **Connection Management:** (Planned) Functionality to send, accept, reject, or ignore connection requests.
* **User Profiles:** (Planned) Dedicated pages for viewing and managing developer profiles.
* **Responsive Design:** Ensures a consistent and optimized experience across various devices (desktop, tablet, mobile).
* **Intuitive UI:** Clean and modern user interface components leveraging DaisyUI for rapid development and aesthetic appeal.

## Technologies Used

This project frontend stack:

* **Frontend Framework:** [React](https://react.dev/) (A JavaScript library for building user interfaces)
* **Build Tool:** [Vite](https://vitejs.dev/) (Next-generation frontend tooling, renowned for its speed)
* **Routing:** [React Router DOM](https://reactrouter.com/en/main) (Declarative routing for React)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (A utility-first CSS framework for rapidly building custom designs)
* **UI Components:** [DaisyUI](https://daisyui.com/) (A Tailwind CSS component library that adds beautiful, ready-to-use components)
* **HTTP Client:** (e.g., Fetch API / Axios - mention if you're using a specific one)
* **Backend:** (Briefly mention your backend, e.g., Node.js with Express and MongoDB)

## Getting Started

Follow these steps to get the `devTinder Frontend` development environment up and running on your local machine.

### Prerequisites

Ensure you have the following software installed on your system:

* **Node.js**: Version 18.x or higher is recommended.
    * Download from [nodejs.org](https://nodejs.org/).
* **npm**: Version 8.x or higher (usually ships with Node.js) or [Yarn](https://yarnpkg.com/).
* **Git**: For cloning the repository.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone 
    ```
    *Replace `your-github-username` with your actual GitHub username.*

2.  **Navigate into the project directory:**
    ```bash
    cd devtinder-frontend
    ```

3.  **Install project dependencies:**
    ```bash
    npm install

    ```

### Environment Variables

The project requires certain environment variables to function correctly, particularly for connecting to the backend API.


