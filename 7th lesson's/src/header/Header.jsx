import "./Header.css";
import { nav } from "../Mock";

function Header() {
  return (
    <header className="header">
      <h2>
        break<span className="io">io</span>
      </h2>
      <div className="navigation">
        <nav>
          {nav.map((link, index) => {
            return(
              <a href="#" key={index}>{link}</a>
            )
          })}
        </nav>
        <button type="button">Start Now</button>
      </div>
    </header>
  );
}

export default Header;
