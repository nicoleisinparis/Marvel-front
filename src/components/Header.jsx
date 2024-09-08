import "./Header.css";
import { Link } from "react-router-dom";
import marvelLogo from "../assets/marvel-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="inner-header">
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "200px",
            height: "18px",
            color: "grey",
            backgroundColor: "black",
            border: "1px solid rgb(143, 4, 4)",
          }}
        />
        <Link to="./home">
          <img
            src={marvelLogo}
            alt="Marvel Logo"
            style={{ width: "220px", height: "150px" }}
          />
        </Link>
        <div className="right-element">
          <div className="right-content">
            <img
              src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
              alt="Marvel logo"
              style={{ width: "22px", height: "25px" }}
            />
            <p>Marvel Unlimited</p>
          </div>
          <Link to="./Subscribe">
            <span>Subscribe</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
