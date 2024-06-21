import "./menu.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://www.instagram.com/sergio.silva.35110">
        <BsInstagram color="#fff" size={30} />
      </a>

      <a className="social" href="https://www.facebook.com/sergio.silva.35110/">
        <BsFacebook color="#fff" size={30} />
      </a>

      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  );
}
