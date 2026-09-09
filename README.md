# 🎮 Video Game Discovery App

A responsive video game discovery application built with **React** and **TypeScript**. The app allows users to browse, search, filter, and sort video games while viewing detailed information about individual titles.

Game data is retrieved from the **RAWG Video Games Database API**.

## ✨ Features

- Browse a large collection of video games
- Search games by title
- Filter games by genre
- Filter games by gaming platform
- Sort games by relevance, popularity, rating, release date, and other criteria
- Infinite scrolling for game results
- View detailed information for individual games
- Responsive layout for different screen sizes
- Light and dark mode support
- Loading skeletons for improved user experience
- Client-side routing between game listings and game detail pages
- API data fetching and caching with React Query
- Centralized application state with Zustand

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Chakra UI
- React Router

### State & Data Management

- TanStack React Query
- Zustand
- Axios

### Other Libraries

- React Icons
- Framer Motion
- React Infinite Scroll Component

### API

- RAWG Video Games Database API

## 📁 Project Structure

```text
src/
├── assets/        # Images and static assets
├── components/    # Reusable UI components
├── data/          # Static application data
├── entities/      # TypeScript domain models/interfaces
├── hooks/         # Custom React hooks and API queries
├── pages/         # Application pages
├── services/      # API communication layer
├── index.css      # Global styles
├── main.tsx       # Application entry point
├── routes.tsx     # React Router configuration
├── store.ts       # Zustand application state
├── theme.ts       # Chakra UI theme configuration
└── vite-env.d.ts
```

## 🧠 Architecture

The application separates UI, data fetching, API communication, and application state into dedicated layers.

```text
Components / Pages
        │
        ▼
   Custom Hooks
        │
        ▼
  React Query
        │
        ▼
   API Client
        │
        ▼
     Axios
        │
        ▼
    RAWG API
```

This structure keeps components focused on presentation while reusable hooks and services handle data fetching and API communication.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/parhamabdolmohammadi/Video-Game-Discovery-App.git
```

```bash
cd Video-Game-Discovery-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.rawg.io/api
VITE_API_KEY=YOUR_RAWG_API_KEY
```

You can obtain an API key from the RAWG Video Games Database API.

> Do not commit your API key to GitHub. Keep `.env` excluded from version control.

### 4. Start the development server

```bash
npm run dev
```

Then open the local URL displayed by Vite in your browser.

## 📦 Production Build

Create a production build with:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 💡 Key Concepts Demonstrated

This project demonstrates practical use of:

- React functional components and hooks
- TypeScript interfaces and generics
- Reusable custom hooks
- REST API integration
- Axios API clients
- Asynchronous data fetching
- React Query caching and pagination
- Infinite queries and infinite scrolling
- Client-side routing
- URL and route parameters
- Global state management with Zustand
- Component composition
- Responsive UI design
- Separation of concerns
- Environment variables for API configuration

## 👨‍💻 Author

**Parham Abdolmohammadi**

GitHub: `parhamabdolmohammadi`

## 📄 License

This project was created for educational and portfolio purposes.
