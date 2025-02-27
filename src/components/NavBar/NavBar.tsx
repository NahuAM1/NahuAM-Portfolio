import "./NavBar.scss";
import ButtonTemplate from "../../ui-components/ButtonTemplate/ButtonTemplate.tsx";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../shared/media/Logo.png";
import { Link } from "react-router-dom";
import IconButton from "../../ui-components/IconButton/IconButton";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="name-container">
        <Link
          to={"/"}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
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
          <ButtonTemplate
            name="Inicio"
            onClick={() => {
              setMenuOpen(false);
            }}
          />
        </Link>
        <Link to={"/about"} className="link">
          <ButtonTemplate
            name="Acerca de Mi"
            onClick={() => {
              setMenuOpen(false);
            }}
          />
        </Link>
        <Link to={"/contact"} className="link">
          <ButtonTemplate
            name="Contactame"
            onClick={() => {
              setMenuOpen(false);
            }}
          />
        </Link>
      </div>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <IconButton icon={<MenuIcon />} href={null} name="" />
      </div>
    </div>
  );
};

export default NavBar;
