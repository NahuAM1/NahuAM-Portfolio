import "./NavBar.scss";
import ButtonTemplate from "../../ui-components/ButtonTemplate/ButtonTemplate.tsx";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../shared/media/Logo.png";
import logoVideo from "../../shared/media/loader.mp4";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface NavItem {
  to: string;
  label: string;
}

const navItems: NavItem[] = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Acerca de Mí" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Locks background scrolling while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // The logo animation used to be a full-screen loader that blocked first
  // paint. It now lives here: the still image is what loads, and the clip
  // only plays on hover.
  const playLogo = () => {
    const video = logoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {
      // Autoplay policies can refuse; the still image stays visible.
    });
  };

  const stopLogo = () => {
    const video = logoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar-inner" aria-label="Navegación principal">
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          onMouseEnter={playLogo}
          onMouseLeave={stopLogo}
          onFocus={playLogo}
          onBlur={stopLogo}
        >
          <img src={Logo} alt="Ir al inicio del portfolio de Nahuel Manero" />
          {/* preload="none" keeps the clip off the critical path: it is
              only fetched if someone actually hovers the logo. */}
          <video
            ref={logoRef}
            className="navbar-logo-video"
            src={logoVideo}
            muted
            playsInline
            preload="none"
            aria-hidden="true"
          />
        </Link>

        <div className={`navbar-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "navbar-link--active" : ""}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          <Link to="/contact" className="navbar-cta" onClick={closeMenu}>
            <ButtonTemplate name="Contactame" />
          </Link>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
