import React, { useState } from "react";
import "./App.css";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <nav className="navbar">
        <button className="menu-icon" onClick={toggleSidebar}>
          ☰
        </button>
        <h1>My Website</h1>
      </nav>
      <div className="container">
        <aside className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </aside>
        <main className="content">
          <p>Welcome to my responsive webpage!</p>
        </main>
      </div>
    </div>
  );
}

export default App;
