import { useState, useEffect } from "react";
import "./TopButton.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // window.pageYOffset is a deprecated alias; scrollY is the current API.
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`topButton ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
      aria-label="Volver arriba"
      // Removed from the tab order while hidden, so keyboard users do not
      // land on an invisible control.
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUpwardIcon />
    </button>
  );
};

export default TopButton;
