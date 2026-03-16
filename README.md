# 🎨 Kresnanta's Portfolio

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?style=flat-square&logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=flat-square&logo=supabase)
![Status](https://img.shields.io/badge/Status-Live-green?style=flat-square)

## 📝 Short Description

A modern, responsive portfolio website showcasing web development skills and projects. Built with **React**, **Vite**, and **Tailwind CSS** to demonstrate expertise in full-stack development, UI/UX design, and modern web technologies. This personal portfolio serves as a professional online presence and platform to display completed projects.

![Hero-preview](public/meta_preview.png)

---

---

## 📁 Project Structure

```
myWebsite/
├── src/                              # Source code aplikasi React
│   ├── component/                    # Komponen React reusable (navbar, hero, about, portfolio, dll)
│   ├── assets/                       # Media files (gambar, SVG, dan aset visual lainnya)
│   ├── lib/                          # Utilities dan library configurations (Supabase client)
│   └── App.jsx, main.jsx, *.css      # Entry point dan styling global
├── public/                           # Aset statis yang dilayani langsung ke browser
├── supabase/                         # Supabase configuration dan edge functions
└── Root configs                      # Vite, Tailwind, ESLint, Docker, dan package configs
```

---

## 🚀 Installation Guide

### Prerequisites
- **Node.js** v18 or higher - [Download here](https://nodejs.org/)
- **npm** v9+ or **yarn** v3+
- **Git** - [Download here](https://git-scm.com/)
- **Docker** (optional) - [Download here](https://www.docker.com/)

### Local Setup (Steps)
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Kresnananta/myWebsite.git
   cd myWebsite
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**<br>
  Create a `.env` file in the root directory:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. **Run Development Server**<br>
   ```bash
   npm run dev
   ```


### Initial DB Setup  
Login to Supabase and run the following query to create the table:
```sql
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100), email VARCHAR(100),
  subject VARCHAR(200), message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  tags VARCHAR(255),
  image_url TEXT,
  live_demo VARCHAR(255),
  source_code VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ✨ Current Features

- Smooth & modern UI with interactive components
- Fully responsive design (mobile, tablet, desktop)
- Dark mode toggle
- Database for storing projects & contact form responses
- Telegram notifications for contact form submissions
- SEO optimized with proper metadata

---

## 📜 Available Scripts

### Frontend Scripts (Vite)
| Command | Description |
|---------|------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle in `dist/` |
| `npm run preview` | Preview the production build locally |

### Supabase Edge Functions
| Command | Description |
|---------|------------|
| `npx supabase functions serve` | Test Edge Functions locally |
| `npx supabase functions deploy telegram-notify` | Deploy function to Supabase Cloud |
| `npx supabase secrets list` | List all secrets stored in Cloud |
| `npx supabase secrets set KEY=VALUE` | Set sensitive env vars (e.g. Telegram Token) |

### Docker & Backend
| Command | Description |
|---------|------------|
| `docker-compose restart backend` | Restart node.js server after changes |
| `docker logs -f web_porto_backend` | Monitor backend logs |
| `docker logs -f web_porto_frontend` | Monitor frontend logs |
"""

---

## 📝 License

This project is a personal portfolio and is available for educational purposes.

---

## 📧 Contact & Connect

For inquiries or collaboration opportunities, feel free to reach out through the contact form on the website.

---

**Last Updated**: March 2026  
**Status**: Production
**Version**: 1.0.0 (Stable Release)
