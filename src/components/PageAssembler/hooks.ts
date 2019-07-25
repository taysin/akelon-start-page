import { useState, useEffect } from "react";

type BreakPoint = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";

const getBreakpoint = (): BreakPoint => {
  const width = window.document.documentElement.clientWidth;

  if (width > 1920) return "xl";
  if (width > 1280) return "lg";
  if (width > 960) return "md";
  if (width > 600) return "sm";
  if (width > 400) return "xs";

  return "xxs";
};

export const useBreakpoints = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());
  const handleWindowResize = () => {
    const newBreakpoint = getBreakpoint();

    if (breakpoint !== newBreakpoint) {
      setBreakpoint(newBreakpoint);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, true);
    return () => {
      window.removeEventListener("resize", handleWindowResize, true);
    };
  });

  return breakpoint;
};
