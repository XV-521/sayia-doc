const themeKey = "color-theme"

function setTheme(theme) {
    localStorage.setItem(themeKey, theme);
    document.documentElement.setAttribute(themeKey, theme);
}

export function handleInitTheme() {
    let theme = localStorage.getItem(themeKey)
    if (theme !== "light" && theme !== "dark") {
        theme = "light"
    }
    setTheme(theme);
}

export function handleSwitchTheme() {
    const theme = document.documentElement.getAttribute(themeKey);
    if (theme === "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
}