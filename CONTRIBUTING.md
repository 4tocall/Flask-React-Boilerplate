# Contributing to Flask-React Boilerplate

We welcome contributions! Here's how to get started:

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/4tocall/Flask-React-Boilerplate.git
   cd Flask-React-Boilerplate
   ```

2. **Backend Setup**
   ```bash
   cd server
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Frontend Setup**
   ```bash
   cd client
   npm install
   ```

4. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

## Development

**Run both backend and frontend concurrently:**
```bash
npm run dev
```

**Or run separately:**
```bash
# Terminal 1 - Backend
cd server
source venv/bin/activate
python run.py

# Terminal 2 - Frontend
cd client
npm run dev
```

## Making Changes

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "feat: add your feature"`
3. Push to branch: `git push origin feature/your-feature`
4. Open a Pull Request

## Code Style

- **Backend**: Follow PEP 8 standards
- **Frontend**: Use ESLint (`npm run lint`)

## Project Structure

```
Flask-React-Boilerplate/
├── server/               # Flask backend
│   ├── app/             # App initialization & routes
│   ├── venv/            # Python virtual environment
│   ├── run.py           # Entry point
│   └── requirements.txt  # Python dependencies
├── client/              # React frontend
│   ├── src/             # Source files
│   ├── package.json     # Node dependencies
│   └── vite.config.js   # Vite configuration
└── README.md            # Project documentation
```

## Questions?

Open an issue on GitHub or contact the maintainers.

Happy coding! 🚀
