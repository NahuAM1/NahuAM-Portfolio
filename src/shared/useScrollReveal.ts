import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reveals every `[data-reveal]` element as it enters the viewport.
 *
 * Replaces the full-screen loader: instead of holding the page back
 * behind an intro video, content paints immediately and each section
 * fades in on approach.
 *
 * One observer handles the whole page rather than one per element.
 */
export const useScrollReveal = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

    // Honour the OS-level motion preference: show everything at once.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          // Reveal is one-way: stop watching once it has played.
          observer.unobserve(entry.target);
        });
      },
      // Starts slightly before the element reaches the fold, so the
      // animation finishes around the time the user actually reads it.
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // Re-runs per route: each page mounts its own set of targets.
  }, [pathname]);
};
