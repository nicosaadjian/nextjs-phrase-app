"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <Button
      onClick={() =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
      }
      className="transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
}
