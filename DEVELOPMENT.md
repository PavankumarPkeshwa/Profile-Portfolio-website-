# Development Guide

## Project Overview

This is a modern, full-stack portfolio website built with React and Node.js, designed specifically for a GenAI Engineer.

## Tech Stack

**Frontend:**
- React 18 with Vite
- React Icons for beautiful icons
- Framer Motion for animations
- Axios for API calls

**Backend:**
- Node.js with Express
- Nodemailer for email functionality
- CORS for cross-origin requests

## Quick Start

### Method 1: Using the Start Script
```bash
./start.sh
```

### Method 2: Using npm scripts
```bash
# From root directory
npm run dev
```

### Method 3: Manual Start
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

## Project Structure

```
Profile-Portfolio-website-/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/       # React Components
│   │   │   ├── Header.jsx    # Navigation header
│   │   │   ├── Home.jsx      # Hero section with typing effect
│   │   │   ├── About.jsx     # About section
│   │   │   ├── Skills.jsx    # Skills & technologies
│   │   │   ├── Projects.jsx  # Projects showcase
│   │   │   ├── Contact.jsx   # Contact form
│   │   │   └── Footer.jsx    # Footer section
│   │   ├── App.jsx           # Main app component
│   │   ├── App.css           # App styles
│   │   ├── index.css         # Global styles & CSS variables
│   │   └── main.jsx          # Entry point
│   ├── index.html            # HTML template
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite configuration
│
├── server/                    # Node.js Backend
│   ├── routes/
│   │   ├── contact.js        # Contact form API
│   │   └── projects.js       # Projects data API
│   ├── server.js             # Express server setup
│   ├── package.json          # Backend dependencies
│   ├── .env                  # Environment variables
│   └── .env.example          # Environment template
│
├── package.json              # Root package with scripts
├── .gitignore               # Git ignore rules
├── README.md                # Main documentation
├── DEVELOPMENT.md           # This file
└── start.sh                 # Quick start script
```

## Available Scripts

### Root Directory
- `npm run install-all` - Install all dependencies (client + server)
- `npm run dev` - Start both frontend and backend
- `npm run client` - Start only frontend
- `npm run server` - Start only backend
- `npm run build` - Build frontend for production

### Client Directory
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Server Directory
- `npm run dev` - Start server with nodemon (auto-reload)
- `npm start` - Start server in production mode

## Customization Guide

### 1. Personal Information

**Update Home Section** (`client/src/components/Home.jsx`)
```javascript
// Change name
<h1 className="name">Your Name Here</h1>

// Update roles in the typing effect
const roles = ['Your Role 1', 'Your Role 2', 'Your Role 3']

// Update social links
const socialLinks = [
  { icon: <FaGithub />, url: 'your-github-url', label: 'GitHub' },
  // ... more links
]
```

**Update About Section** (`client/src/components/About.jsx`)
- Edit the description paragraphs
- Update company name
- Modify statistics

### 2. Skills & Technologies

Edit `client/src/components/Skills.jsx`:
```javascript
const skillCategories = [
  {
    title: 'Your Category',
    color: '#yourcolor',
    skills: [
      { name: 'Skill Name', icon: <Icon />, level: 90 }
    ]
  }
]
```

### 3. Projects

**Frontend** (`client/src/components/Projects.jsx`):
```javascript
const projects = [
  {
    id: 1,
    title: 'Project Title',
    category: 'genai' or 'fullstack',
    description: 'Description',
    technologies: ['Tech1', 'Tech2'],
    github: 'github-url',
    demo: 'demo-url'
  }
]
```

**Backend** (`server/routes/projects.js`):
Update the projects array with your actual project data.

### 4. Color Scheme

Edit CSS variables in `client/src/index.css`:
```css
:root {
  --bg-primary: #0a0e27;           /* Main background */
  --bg-secondary: #151a35;         /* Secondary background */
  --bg-card: #1a1f3a;             /* Card background */
  --accent-primary: #00d4ff;       /* Primary accent color */
  --accent-secondary: #7c3aed;     /* Secondary accent color */
  --text-primary: #ffffff;         /* Primary text color */
  --text-secondary: #b4bcd0;       /* Secondary text color */
}
```

### 5. Email Configuration

To enable contact form emails:

1. **Get Gmail App Password:**
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Create an App Password
   - Copy the 16-character password

2. **Update server/.env:**
```env
PORT=5000
NODE_ENV=development
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_16_char_app_password
```

## Features

### Frontend Features
- ✅ Smooth scrolling navigation
- ✅ Animated typing effect
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark theme with gradient accents
- ✅ Interactive project filters
- ✅ Animated skill bars
- ✅ Form validation
- ✅ Social media links
- ✅ Modern glassmorphism UI

### Backend Features
- ✅ RESTful API
- ✅ Contact form handling
- ✅ Email notifications
- ✅ Projects data API
- ✅ CORS enabled
- ✅ Error handling
- ✅ Environment variables

## API Endpoints

### Contact Form
```
POST /api/contact
Body: { name, email, phone, subject, message }
Response: { success: true, message: "...", data: {...} }
```

### Projects
```
GET /api/projects
Query: ?category=genai&featured=true
Response: { success: true, count: n, projects: [...] }

GET /api/projects/:id
Response: { success: true, project: {...} }
```

### Health Check
```
GET /api/health
Response: { status: "OK", message: "Server is running" }
```

## Development Tips

1. **Hot Module Replacement:** Vite automatically reloads changes
2. **API Proxy:** Frontend proxies `/api` requests to backend
3. **Console Logs:** Check browser console and terminal for logs
4. **Port Conflicts:** Change ports in `server/.env` and `client/vite.config.js`

## Common Issues

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules client/node_modules server/node_modules
npm run install-all
```

### Email Not Sending
- Check if EMAIL_USER and EMAIL_PASS are set in `server/.env`
- Ensure Gmail App Password is correct
- Check server console for email errors

## Deployment

### Frontend (Vercel)
1. Connect GitHub repository
2. Set build command: `cd client && npm run build`
3. Set output directory: `client/dist`
4. Deploy!

### Backend (Railway)
1. Connect GitHub repository
2. Set root directory: `server`
3. Add environment variables
4. Deploy!

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_password
```

## Performance Optimization

- Images: Use WebP format and optimize size
- Code Splitting: Vite handles this automatically
- Lazy Loading: Consider lazy loading components
- Caching: Configure proper cache headers in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT License - feel free to use this for your own portfolio!

---

**Need Help?** Check the README.md or open an issue on GitHub.
