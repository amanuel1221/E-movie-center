# 🎬 E-Movie Center

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge)

A modern **React + Vite** application for browsing movies and TV shows, built with performance, accessibility, and scalability in mind.  

Deployed at: [e-movie-center.vercel.app](https://e-movie-center.vercel.app)  
Repository: [GitHub Repo](https://github.com/amanuel1221/E-movie-center)

---

## *** Features

- ⚡ **React + Vite** setup with Hot Module Replacement (HMR)  
- 🎥 Browse movies, TV shows, and actors  
- 🔍 Search functionality with dynamic routing  
- 📱 Responsive UI with accessibility improvements  
- 🧪 Unit & integration testing using **Vitest** + **Testing Library**  
- 🛠 ESLint configuration for clean, consistent code  
- 🌐 Deployed on **Vercel** with CI/CD  

---

## *** Tech Stacks & Badges

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=react&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## *** Application Pages & Demos ### 🏠 Homepage - Displays trending movies and TV shows. - Highlights featured content with banners. - Responsive layout for desktop and mobile. - Smooth scrolling demo: ![Homepage GIF](./screenshots/homepage.gif) --- ### 👥 People Page - Browse actors, directors, and crew members. - Shows biography, filmography, and profile images. - Interactive cards with hover effects. ![People GIF](./screenshots/people.gif) --- ### 🎬 Movie Page - Detailed movie information (title, release date, rating). - Poster, trailer, and description. - Cast list and related recommendations. ![Movie GIF](./screenshots/movie.gif) --- ### 📺 TV Page - Explore TV shows by season and episodes. - Episode details with thumbnails. - Track ongoing and completed series. ![TV GIF](./screenshots/tv.gif) --- ### 🔍 Search Page - Search movies, TV shows, or people. - Instant results with dynamic routing. - Supports keyword and advanced filters. ![Search GIF](./screenshots/search.gif) --- ### 🤝 Interactions Page - User interactions and engagement features. - Favorites, watchlist, and rating system. - Smooth UI transitions for adding/removing items. ![Interactions GIF](./screenshots/interactions.gif)

## *** Installation & Setup

Clone the repository:

```bash
git clone https://github.com/amanuel1221/E-movie-center.git
cd E-movie-center
Install dependencies:

bash
npm install
Run development server:

bash
npm run dev
Build for production:

bash
npm run build
Preview production build:

bash
npm run preview
Run tests:

bash
npm run test
*** Project Structure
Code
E-movie-center/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components (Movies, TV, Person)
│   ├── hooks/           # Custom React hooks
│   ├── store/           # State management (Zustand/Context)
│   ├── tests/           # Unit & integration tests
│   ├── App.jsx          # Root component
│   └── main.jsx         # Entry point
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
*** Deployment
This project is deployed on Vercel.
Every push to master triggers an automatic deployment.

Production URL: https://e-movie-center.vercel.app

*** Testing
We use Vitest with React Testing Library for unit and integration tests.

Run all tests:

bash
npm run test
Example test file:

jsx
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app title', () => {
  render(<App />);
  expect(screen.getByText(/E-Movie Center/i)).toBeInTheDocument();
});
*** ESLint & Code Quality
ESLint rules configured for React + Vite

Prettier integration for consistent formatting

Accessibility checks with test-id attributes

*** Project Differentiation
Unlike other movie apps, E-Movie Center is built with:

⚡ Axios for API requests

🧪 Vitest for testing

🐻 Zustand for lightweight state management

This makes it more performant, testable, and scalable compared to similar projects.

*** Challenges & Solutions
🧩 Challenge: Testing with Vite and integrating Vitest

✅ Solution: Deep learning through documentation and community examples

🧩 Challenge: Writing clean Zustand store logic

✅ Solution: Googling advanced patterns and applying them step-by-step

These challenges helped refine the project into a production-ready, test-driven application.

*** Future Improvements
🔐 Add authentication (login/signup with JWT or OAuth)

⭐ Implement favorites/watchlist functionality

🌙 Add dark mode toggle

📊 Improve analytics & performance monitoring

🗂 Enhance state management with persistence (localStorage/IndexedDB)

🌍 Multi-language support for global users

*** Contributing
Fork the repo

Create a new branch (feature/new-feature)

Commit changes (git commit -m "Add new feature")

Push to branch (git push origin feature/new-feature)

Open a Pull Request

*** Copyrights & License
© 2026 Amanuel.
This project is licensed under the MIT License — free to use, modify, and distribute with attribution.