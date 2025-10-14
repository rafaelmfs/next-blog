export function setThemeCookie(theme: "light" | "dark") {
  document.cookie = `theme=${theme}; path=/; max-age=31536000`;
}
