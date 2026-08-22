import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position on route change.
 *
 * React Router keeps the window scroll offset between routes, so
 * navigating from halfway down one page lands halfway down the next.
 * Renders nothing.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" rather than "smooth": a route change should feel like a
    // new page, not a scroll across the old one.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
