import Logo from "./Logo.jsx";
import Navbar from "./Navbar.jsx";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
