# 🚀 Flask-React Boilerplate

A modern, production-ready boilerplate for building full-stack web applications with **Flask** (Python backend) and **React** (JavaScript frontend).

## ✨ Key Features

- 🔧 **Flask Backend** – Clean, modular architecture with CORS support
- ⚛️ **React 19** – Modern UI with Vite for fast development
- 🚀 **Concurrent Development** – Run backend & frontend together
- 🔄 **Hot Reload** – Instant feedback during development
- 📦 **Pre-configured** – Ready-to-use project structure
- 🎯 **Scalable** – Organized for easy feature expansion

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Installation

1. **Clone & Setup**
   ```bash
   git clone https://github.com/4tocall/Flask-React-Boilerplate.git
   cd Flask-React-Boilerplate
   ```

2. **Backend**
   ```bash
   cd server
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cd ..
   ```

3. **Frontend**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Run**
   ```bash
   npm run dev
   # Backend runs on http://localhost:5000
   # Frontend runs on http://localhost:5173
   ```

## 📁 Project Structure

```
Flask-React-Boilerplate/
├── server/              # Flask backend
│   ├── app/            # Application package
│   │   ├── __init__.py # App initialization
│   │   └── routes.py   # API routes
│   ├── venv/           # Python virtual environment
│   ├── run.py          # Entry point
│   └── requirements.txt # Dependencies
├── client/             # React frontend
│   ├── src/           # Source code
│   ├── package.json   # Dependencies & scripts
│   └── vite.config.js # Vite configuration
├── .env.example       # Environment variables template
└── README.md          # This file
```

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run backend & frontend concurrently |
| `npm run backend` | Run Flask backend only |
| `npm run frontend` | Run React frontend only |
| `npm run build` | Build frontend for production |
| `npm run lint` | Check code style |
| `npm run lint:fix` | Fix code style issues |

## 🤝 Contributing

Want to improve this boilerplate? See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📦 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Backend | Flask | 3.1.1 |
| Frontend | React | 19.1.0 |
| Build | Vite | 7.0.5 |
| Concurrency | Concurrently | 9.2.0 |

### 💡 Notes

- This is a starting point. Extend it based on your needs.
- Use `.env` for sensitive configuration (never commit).
- Check [CONTRIBUTING.md](CONTRIBUTING.md) for setup details.

## 📝 License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) file for details.

## 🌟 Support

If you find this boilerplate helpful:
- ⭐ Star this repository
- 🔗 Share it with others
- 📢 Report issues or suggest improvements

---

**Built with ❤️ for developers who want to ship fast.**

---

## 🆕 v2.0 Improvements

### Configuration & Setup
- ✅ Added `.env.example` for easy environment configuration
- ✅ Cleaner script organization with focused commands
- ✅ Added `lint:fix` script for automatic code formatting
- ✅ Improved npm scripts with better frontend-only option

### Documentation
- ✅ Added comprehensive [CONTRIBUTING.md](CONTRIBUTING.md) with setup instructions
- ✅ Rewrote README with Quick Start guide
- ✅ Added Tech Stack table for clarity
- ✅ Improved Project Structure visualization
- ✅ Added available scripts reference table

### Code Quality
- ✅ Better default configuration examples
- ✅ Clearer environment variable documentation
- ✅ Enhanced linting capabilities

### Previous Updates (v1.0)

**2025-07-18** — Major Modernization
- Backend updated to Flask 3.1.1 with improved environment variable handling.
- Frontend upgraded to React 19 and Vite 7.0.5 for better performance.
- Refactored backend startup script for dynamic config loading.
- Updated package.json scripts for concurrent development.
- Enhanced linting setup with updated ESLint and plugins.

---
