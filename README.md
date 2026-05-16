Tirupati Mobile Studio is a modern and responsive e-commerce website designed for showcasing and selling mobile phones, accessories, and electronic gadgets online.
The website provides a clean user interface where users can explore products, view details, and enjoy a smooth browsing experience.
https://tirupati-mobile-studio.vercel.app/#android Live Link website
This project is developed using modern frontend technologies to ensure fast performance, responsive design, and an interactive user experience.

Technologies Used
Frontend Technologies
React.js – For building interactive user interfaces using components.
Vite – Fast development build tool for React projects.
JavaScript (JSX) – Used for application logic and dynamic content.
HTML5 – Structure of the website.
CSS3 – Styling and responsive design.
Tailwind CSS – Utility-first CSS framework for modern UI styling.
Features of Website
Responsive mobile-friendly design
Modern user interface
Product showcase section
Fast loading performance
Component-based architecture
Easy navigation
Clean and organized code structure
Project Folder Structure
src/
 ├── assets/
 ├── components/
 ├── App.jsx
 ├── App.css
 ├── index.css
 ├── main.jsx
assets/ → Images and static files
components/ → Reusable React components
App.jsx → Main application component
main.jsx → Entry point of React app
How to Run This Project in VS Code (Step by Step)
Step 1 – Install Required Software
Install Node.js

Download and install:

Node.js Official Website

After installation, restart your PC.

Step 2 – Open Project in VS Code
Open VS Code
Click:
File → Open Folder
Select your project folder:
Mobile Studio
Step 3 – Open Terminal

In VS Code:

Terminal → New Terminal

Shortcut:

Ctrl + `
Step 4 – Install Dependencies

In terminal, run:

npm install

This command installs all required packages from package.json.

Wait until installation completes successfully.

Step 5 – Start Development Server

Run:

npm run dev

After running this command, you will see output like:

Local: http://localhost:5173/
Step 6 – Open Website in Browser

Press:

Ctrl + Click

on the localhost link
OR manually open:

http://localhost:5173

Your website will start running successfully 🎉

How to Stop Server

In terminal press:

Ctrl + C
Build Project for Production

To create optimized production files:

npm run build

Generated files will be stored inside:

dist/


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
