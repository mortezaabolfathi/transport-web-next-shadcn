import { useState, useEffect } from "react";

const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState("desktop");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateBreakpoint = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setBreakpoint("mobile");
      } else if (width >= 768 && width < 1024) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  return {
    breakpoint,
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
  };
};

export default useResponsive;