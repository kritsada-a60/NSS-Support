export const getSystemLang = () => {
    const lang = localStorage.getItem('wts-lang'); 
    return lang || 'en'; 
};