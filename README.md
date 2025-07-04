# PTCL Order Management System (PTCL OMS)

A modern, modular, and responsive web application for managing PTCL orders, users, and administration, built with React, Tailwind CSS, and lucide-react icons.

---

## 🚀 Features
- **Dashboard**: Overview of orders and users with live stats.
- **Order Management**: Create and manage new/existing customer and corporate orders.
- **User & Vendor Management**: Administer users, vendors, and related data.
- **Quick Actions**: Fast access to common order and admin tasks.
- **Recent Orders Table**: View and track recent order activity.
- **Responsive UI**: Works seamlessly on desktop and mobile.
- **Component-Based Architecture**: Clean, maintainable, and scalable codebase.

---

## 🛠️ Tech Stack
- **React 19** (with functional components & hooks)
- **Tailwind CSS 3** (utility-first styling)
- **lucide-react** (icon library)
- **Create React App** (project scaffolding)

---

## 📁 Folder Structure
```
ptcl_oms/
├── public/                # Static assets and HTML template
├── src/
│   ├── components/        # All React components (modularized)
│   │   ├── PTCLOrderManagement.jsx
│   │   ├── TopNav.jsx
│   │   ├── NoticeBanner.jsx
│   │   ├── UserInfoForm.jsx
│   │   ├── DashboardStats.jsx
│   │   ├── QuickActions.jsx
│   │   ├── RecentOrdersTable.jsx
│   │   ├── Footer.jsx
│   │   ├── FormSection.jsx
│   │   ├── InputField.jsx
│   │   ├── StatsCard.jsx
│   │   └── OrderButton.jsx
│   ├── App.js             # App entry point
│   ├── index.js           # ReactDOM render
│   └── ...                # Styles, tests, etc.
├── tailwind.config.js     # Tailwind CSS config
├── package.json           # Project metadata & scripts
└── README.md              # Project documentation
```

---

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd ptcl_oms
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📝 Usage
- The main app is rendered via `src/App.js`, which loads the `PTCLOrderManagement` component.
- All UI sections are split into modular components under `src/components/` for easy maintenance and scalability.
- Styling is handled via Tailwind CSS (see `tailwind.config.js`).
- Icons are provided by [lucide-react](https://lucide.dev/).

---

## 📦 Available Scripts
- `npm start` — Run the app in development mode
- `npm run build` — Build for production
- `npm test` — Run tests
- `npm run eject` — Eject configuration (not recommended)

---

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes (keep code modular and follow existing patterns)
4. Commit and push (`git commit -am 'Add new feature' && git push`)
5. Open a Pull Request

---

## 📄 License
This project is for educational and internal PTCL use only.

---

## 🙏 Acknowledgements
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)
- [Create React App](https://create-react-app.dev/)
