import { useState, useEffect } from "react";
import IconButton from "../IconButton/IconButton";
import "./TopButton.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`topButton-container ${isVisible ? "visible" : "hidden"}`}>
      <IconButton
        icon={<ArrowUpwardIcon />}
        name=""
        href={null}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default TopButton;
