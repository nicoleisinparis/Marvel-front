import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <nav className="menu-bar">
        <Link to="/comics">
          <button>Comics</button>
        </Link>
        <Link to="/characters">
          <button>Characters</button>
        </Link>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
