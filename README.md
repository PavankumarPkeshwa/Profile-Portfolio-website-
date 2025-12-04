# Pavan Kumar P - Portfolio Website

A modern, responsive portfolio website built with **React**, **Node.js**, and **Express** showcasing projects and skills as a **GenAI Engineer** and **Full Stack Developer**.

## ✨ Features

- 🎨 **Modern & Attractive Design** - Gradient colors, smooth animations, and glassmorphism effects
- 🤖 **GenAI Focus** - Highlighting AI/ML projects and capabilities
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast & Optimized** - Built with Vite for optimal performance
- 🎯 **Interactive UI** - Smooth scrolling, typing effects, and hover animations
- 📧 **Contact Form** - Functional contact form with email notifications
- 🚀 **Modern Tech Stack** - React, Node.js, Express, and more

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **Framer Motion** - Animation library
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Nodemailer** - Email notifications
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📂 Project Structure

```
Profile-Portfolio-website-/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Node.js backend
│   ├── routes/
│   │   ├── contact.js     # Contact form API
│   │   └── projects.js    # Projects API
│   ├── server.js          # Express server
│   ├── package.json
│   └── .env.example       # Environment variables template
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/PavankumarPkeshwa/Profile-Portfolio-website-.git
cd Profile-Portfolio-website-
```

2. **Install All Dependencies**
```bash
npm install
npm run install-all
```

### Running the Application

**Option 1: Run Both Servers Together (Recommended)**
```bash
npm run dev
```

**Option 2: Run Separately**

Terminal 1 - Backend:
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

Terminal 2 - Frontend:
```bash
cd client
npm run dev
# Frontend runs on http://localhost:3000
```

Visit **http://localhost:3000** to view your portfolio!

### Building for Production

```bash
npm run build
```

The optimized files will be in `client/dist/`

## 🎨 Customization

### Update Personal Information

1. **Contact Details** - `client/src/components/Home.jsx`
2. **About Section** - `client/src/components/About.jsx`
3. **Projects** - `client/src/components/Projects.jsx` and `server/routes/projects.js`
4. **Skills** - `client/src/components/Skills.jsx`

### Change Color Scheme

Edit CSS variables in `client/src/index.css`:

```css
:root {
  --accent-primary: #00d4ff;
  --accent-secondary: #7c3aed;
  --bg-primary: #0a0e27;
}
```

## 📧 Email Configuration (Optional)

To enable contact form email notifications:

1. Create Gmail App Password: [Google Support](https://support.google.com/accounts/answer/185833)
2. Update `server/.env`:
```env
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_password
```

## 🎯 Projects Included

1. **Personal Portfolio** - This website (React + Node.js)
2. **GenAI News Platform** - AI-powered news summarization with agentic AI
3. **AI Chatbot** - Intelligent conversational AI with context awareness
4. **Habit Tracker** - Full-stack MERN application with analytics

## 🌐 Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy the 'dist' folder
```

### Backend (Railway/Render)
- Deploy the `server` directory
- Set environment variables in your hosting dashboard

## 👤 Author

**Pavan Kumar P** - GenAI Engineer & Full Stack Developer
- GitHub: [@PavankumarPkeshwa](https://github.com/PavankumarPkeshwa)
- LinkedIn: [Pavan Kumar P](https://www.linkedin.com/in/pavan-kumar-p-a6512217a/)

---

⭐ **Star this repository if you find it helpful!**

Built with ❤️ using React & Node.js
