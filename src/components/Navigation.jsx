import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/Counter"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        Counter
      </NavLink>

      <NavLink
        to="/TodoList"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        TodoList
      </NavLink>
    </nav>
  );
}

export default Navigation;
