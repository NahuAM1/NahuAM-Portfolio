import "./Footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "../../ui-components/IconButton/IconButton.tsx";
import Logo from "../../shared/media/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  // Rendered rather than hardcoded so the notice never goes stale.
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={Logo} alt="Nahuel Manero" />
          </Link>
          <p className="footer-tagline">
            Ingeniero en Sistemas de Información. Aplicaciones a medida,
            automatización de procesos y optimización de sistemas.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navegación del pie de página">
          <Link to="/">Inicio</Link>
          <Link to="/about">Acerca de Mí</Link>
          <Link to="/contact">Contacto</Link>
        </nav>

        <div className="footer-social">
          <IconButton
            icon={<LinkedInIcon />}
            href={"https://www.linkedin.com/in/nahuelmanero/"}
            name={"LinkedIn"}
          />
          <IconButton
            icon={<GitHubIcon />}
            href={"https://github.com/NahuAM1"}
            name={"GitHub"}
          />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Nahuel Manero. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
