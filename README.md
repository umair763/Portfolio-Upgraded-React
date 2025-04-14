# Modern Portfolio Website

A modern, responsive portfolio website built with React and tailwind featuring a clean design and smooth animations.

## 🌟 Features

- **Responsive Design**: Seamlessly adapts to all screen sizes
- **Modern UI/UX**: Built with Tailwind CSS and Framer Motion animations
- **Dynamic Content**: Sections for Home, Resume, Work, Awards, and Contact
- **Performance Optimized**: Built with Vite for fast development and production builds

## 💡 Contact Form Integration

- **Email Handling**: No custom backend is used for handling form submissions.
- **Formspree Integration**: The contact form utilizes [Formspree](https://formspree.io/) — a third-party service — to securely and reliably deliver form submissions directly to your email.
- **No Express Server**: There is **no Express or other server-side backend** running for this project. All form communication is handled client-side using Formspree.

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- Framer Motion
- AOS (Animate On Scroll)
- React Router DOM

## 📋 Project Structure

```
├── client/                        # Frontend (React + Vite)
│   ├── public/
│   │   └── assets/
│   │       ├── logo.svg
│   │       ├── profile.jpg
│   │       ├── favicon.ico
│   ├── src/
│   │   ├── app/
│   │   │   ├── context/
│   │   │   │   ├── ThemeContext.jsx       
│   │   │   ├── layout/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Footer.jsx          
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Layout.jsx          
│   │   │   ├── routes/
│   │   │   │   ├── AppRoutes.jsx       
│   │   │   ├── pages/
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── Experience.jsx
│   │   │   │   ├── Blog.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── NotFound.jsx
│   │   │   ├── components/                # Reusable UI components
│   │   │   │   ├── common/
│   │   │   │   │   ├── Button.jsx
│   │   │   │   │   ├── Loader.jsx
│   │   │   │   │   ├── Card.jsx
│   │   │   │   │   ├── Tag.jsx
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   ├── SkillBadge.jsx
│   │   │   │   ├── Timeline.jsx
│   │   │   │   ├── BlogPostPreview.jsx
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   ├── files/
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   ├── index.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── ProtectedRoutes.jsx
│   ├── .gitignore
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── index.html
│   
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📱 Key Features

- **Professional Profile**: Showcase your skills and experience
- **Project Portfolio**: Display your work with detailed descriptions
- **Awards & Achievements**: Highlight your accomplishments
- **Contact Form**: Easy way for potential clients to reach out
- **Responsive Navigation**: Smooth and intuitive user experience

## 🎨 Customization

The project is built to be easily customizable:
- Update content in respective component files
- Modify styling using Tailwind classes
- Add new sections by creating new components
- Customize animations using Framer Motion

## Project Links

You can access the deployed web application here: [Web App Link](https://portfolio-upgraded-react.vercel.app/)
