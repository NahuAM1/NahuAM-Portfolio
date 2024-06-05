import "./NavBar.scss";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../shared/media/Logo.png";
import { Link } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="name-container">
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div
        className={
          menuOpen
            ? "navbar-items-container-open"
            : "navbar-items-container-closed"
        }
      >
        <Link to={"/"} className="link">
          <ButtonTemplate name="Inicio" />
        </Link>
        <Link to={"/about"} className="link">
          <ButtonTemplate name="Acerca de Mi" />
        </Link>
        <Link to={"/contact"} className="link">
          <ButtonTemplate name="Contactame" />
        </Link>
      </div>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <IconButton icon={<MenuIcon />} href="" name="" />
      </div>
    </div>
  );
};

export default NavBar;
