<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=250&section=header&text=Real-Time%20Dev%20Collab&fontSize=70&animation=fadeIn" alt="Header Banner" />

  # 🚀 Real-Time Developer Collaboration Platform
  
  <p align="center">
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" /></a>
    <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /></a>
    <a href="https://socket.io/"><img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io" /></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
  </p>

  ### *Collaborate on code and notes instantly—no sign-in required!*
</div>

---

## 🌟 Overview

The **Real-Time Developer Collaboration Platform** is designed for modern developers to hop into a shared workspace seamlessly. Using unique room codes, teams can synchronize live code, brainstorm via notes, and communicate without any onboarding friction. 

Whether you're pair programming, conducting a technical interview, or simply sharing snippets, this platform delivers a **low-latency, high-performance experience**.

## ✨ Features

- **Instant Rooms**: Generate or join unique room codes instantly.
- **No Auth Required**: Jump straight into collaboration.
- **Live Code Sync**: Real-time editor synchronization powered by WebSockets.
- **Modern UI**: Dark-mode first, built with Tailwind CSS and Framer Motion for smooth animations.
- **Responsive Design**: Works seamlessly on desktop and mobile.

---

## 🏗️ Architecture (Mermaid Diagram)

```mermaid
graph TD
    %% User Flow
    User1((User 1)) -->|Joins Room| Frontend
    User2((User 2)) -->|Joins Room| Frontend
    
    subgraph "Frontend (React + Vite)"
        UI[User Interface]
        State[State Management]
        SocketClient[Socket.io Client]
        UI <--> State
        State <--> SocketClient
    end
    
    subgraph "Backend (Node.js + Express)"
        Server[Express Server]
        SocketServer[Socket.io Server]
        DB[(MongoDB)]
        
        Server <--> SocketServer
        Server <--> DB
    end
    
    Frontend <-->|WebSockets / HTTP| Backend
    
    style Frontend fill:#1e1e1e,stroke:#61DAFB,stroke-width:2px,color:#fff
    style Backend fill:#1e1e1e,stroke:#43853D,stroke-width:2px,color:#fff
    style DB fill:#4EA94B,stroke:#333,stroke-width:2px,color:#fff
```

---

## 📅 Roadmap (Week 1 & 2 Focus)

### Week 1 — Web Development Fundamentals
- [x] Basic project scaffolding
- [x] Setting up frontend and backend communication channels
- [x] Initializing Vite, Node.js, and MongoDB

### Week 2 — React & Frontend Basics
- [ ] React.js fundamentals & component architecture
- [ ] Responsive UI via Tailwind CSS & Framer Motion
- [ ] Homepage and Join Room interface implementation
- [ ] React state management for live updates

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/real-time-dev-collab.git
   cd real-time-dev-collab
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## 🎨 UI Preview

*(Add your awesome animated GIFs or screenshots here once the UI is complete!)*
<br>
<div align="center">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" width="50" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" width="50" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vite-Dark.svg" width="50" />
</div>
<br>

---

<div align="center">
  Built with ❤️ by Ayush Tripathi.
</div>
