export const getSystemLang = () => {
  const lang = localStorage.getItem("language");
  return lang || "en";
};
