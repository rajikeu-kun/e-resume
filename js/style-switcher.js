/* ==================================== Toggle Style Switcher ==================================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// Hide Style - Switcher On Scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ==================================== Theme Colours ==================================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    localStorage.setItem("selectedColor", color);

    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
/* ==================================== Theme Light and Dark Mode ==================================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {

    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark"))
    {
        localStorage.setItem("themeMode", "dark");
    }
    else
    {
        localStorage.setItem("themeMode", "light");
    }

})
window.addEventListener("load", () => {

    /* Load Saved Theme Mode */

    const savedTheme = localStorage.getItem("themeMode");

    if(savedTheme === "dark")
    {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
    }

    /* Load Saved Colour */

    const savedColor = localStorage.getItem("selectedColor");

    if(savedColor)
    {
        setActiveStyle(savedColor);
    }

    document.documentElement.style.opacity = "1";

})