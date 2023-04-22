import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <Link to={`/`} className="header__logo logo">
      <span>My</span> Portfolio
    </Link>
  );
}

export default Logo;
