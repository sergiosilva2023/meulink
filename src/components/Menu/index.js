import "./menu.css";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://www.instagram.com">
        <BsInstagram color="#fff" size={30} />
      </a>

      <a className="social" href="https://www.youtube.com">
        <BsYoutube color="#fff" size={30} />
      </a>

      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  );
}
