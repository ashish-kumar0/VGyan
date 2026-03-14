# V-Gyan Institute 🚀

[![React](https://img.shields.io/badge/React-19-brightgreen)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-blue)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7-orange)](https://reactrouter.com/)

## 📖 Project Overview
**V-Gyan** is a modern, responsive web application for **V-Gyan Institute**, an educational platform offering courses for **Classes 9-12** (Math, Science, English, etc.) and online courses. It features a clean UI with smooth animations, dedicated pages for courses, instructors, results, about, and contact.

**Key Pages/Routes**:
- `/` - HomePage (hero, featured courses)
- `/courses` - CoursesPage (overview)
- `/courses/9`, `/courses/10`, `/courses/11`, `/courses/12` - Class-specific courses
- `/courses/online` - OnlineCourses
- `/instructors` - InstructorsPage
- `/about` - AboutPage
- `/results` - ResultsPage (likely exam/grade results)
- `/contact` - ContactPage

## ✨ Features
- **Responsive Design**: Mobile-first with Tailwind CSS utilities (flex, grid).
- **Smooth Animations**: Powered by Framer Motion.
- **Icons**: Lucide React for modern icons.
- **Routing**: Client-side navigation with React Router DOM.
- **Backend Ready**: Mock Supabase client (easy upgrade to real Supabase for auth/DB).
- **Fast Development**: Vite HMR for instant reloads.

## 🛠️ Tech Stack
| Category | Technology | Version |
|----------|------------|---------|
| Framework | React | 19.2.0 |
| Build Tool | Vite | 7.3.1 |
| Routing | React Router DOM | 7.13.0 |
| Animations | Framer Motion | 12.35.2 |
| Icons | Lucide React | 0.577.0 |
| Backend | Supabase (Mock) | - |
| Linting | ESLint | 9.39.1 |
| CSS | Tailwind (utility classes) + CSS Modules | - |

## 📁 Project Structure
```
V-Gyan/
├── public/              # Static assets (vite.svg)
├── src/
│   ├── assets/          # Images (react.svg)
│   ├── components/      # Reusable: Navbar.jsx/css, Footer.jsx/css
│   ├── lib/             # Supabase client (mock)
│   ├── pages/           # Route components: HomePage, CoursesPage, Class*Courses, etc.
│   ├── App.jsx/css      # Main app + router
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # Entry HTML
├── package.json         # Dependencies & scripts
├── vite.config.js       # Vite config
├── README.md            # This file!
├── TODO.md              # Task progress
└── .gitignore           # Git ignores
```

## 🚀 Quick Start
### Prerequisites
- Node.js **18+**
- npm/yarn/pnpm

### Setup
1. Clone/Fork the repo:
   ```bash
   git clone <your-repo-url>
   cd V-Gyan
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build    # Outputs to dist/
npm run preview  # Local preview of build
```

## 🔧 Development
- **Add a Page**: Create `src/pages/NewPage.jsx/css`, add `<Route path=\"/new\" element={<NewPage />} />` in `App.jsx`.
- **Supabase Integration**:
  1. Get keys from [supabase.com](https://supabase.com).
  2. Replace `src/lib/supabase.js` with real client:
     ```js
     import { createClient } from '@supabase/supabase-js';
     export const supabase = createClient('YOUR_URL', 'YOUR_ANON_KEY');
     ```
  3. `npm i @supabase/supabase-js`.
- **Linting**: `npm run lint`
- **Styles**: Uses Tailwind-like utilities + component CSS.

## ☁️ Deployment
- **Vercel/Netlify**: Connect GitHub repo, auto-deploys on push.
- **Build Command**: `npm run build`
- **Output Dir**: `dist`

## 📋 TODO / Future Enhancements
- Implement real Supabase (users, courses DB, auth, results).
- Add course enrollment/payments (Stripe).
- User dashboard, search/filter courses.
- SEO (React Helmet).
- Testing (Vitest, React Testing Library).
- PWA support.

## 🤝 Contributing
1. Fork & clone.
2. Create branch: `git checkout -b feature/xyz`.
3. Commit: `git commit -m 'feat: add xyz'`.
4. Push & PR to `main`.

## 📄 License
MIT License - see [LICENSE](LICENSE) (or add one).

**Happy Learning with V-Gyan! 🎓**

