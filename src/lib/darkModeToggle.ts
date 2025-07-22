export const darkModeToggle = () => {
  const html = document.querySelector("html");
  html?.classList.toggle("dark");
};
