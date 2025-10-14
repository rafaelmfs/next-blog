'use client'

import { getClientCookie } from "@/utils/get-cookie";
import { setThemeCookie } from "@/utils/set-theme-cookie"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const theme = getClientCookie('theme')
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme ?? "light")

  const isDark = currentTheme === "dark"

  function toggleTheme() {
    const selected = isDark ? "light" : "dark"
    document.documentElement.classList.replace(currentTheme, selected)

    setCurrentTheme(selected)
    setThemeCookie(selected)
  }

  useEffect(() => {
    const saved = getClientCookie("theme") ?? "light";
    setCurrentTheme(saved);
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10" />
    )
  }

  return (
    <button className="cursor-pointer rounded-full bg-transparent hover:bg-zinc-900/20 dark:hover:bg-zinc-400/20 p-2 transition-colors text-zinc-900 dark:text-zinc-300" onClick={toggleTheme}>
      {
        isDark ? <Moon /> : <Sun />
      }
    </button>
  )
};
