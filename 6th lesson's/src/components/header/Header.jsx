import "./Header.css";
import logo from "../../assets/Appy.png";

function Header() {
  return (
    <header className="header">
      <div className="navigation">
        <img loading="lazy" src={logo} alt="logo" />
        <nav>
          <a href="">Products ↩</a>
          <a href="">Business Solutions ↩</a>
          <a href="">Help Center ↩</a>
          <a href="">Pricing</a>
        </nav>
      </div>
      <div className="buttons">
        <button className="log" type="submit">
          Log In
        </button>
        <button className="get" type="submit">
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;
