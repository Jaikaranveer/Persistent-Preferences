const themeSelect = document.getElementById("theme-select");
const listStyleSelect = document.getElementById("list-style-select");
const dynamicList = document.getElementById("dynamic-list");

// Initial Data
const listItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

// Functions
function populateList(items) {
    dynamicList.innerHTML = "";
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        dynamicList.appendChild(li);
    });
}

function setTheme(theme) {
    document.body.className = `${theme}-theme`;
    localStorage.setItem("theme", theme);
}

function setListStyle(style) {
    dynamicList.className = style;
    localStorage.setItem("listStyle", style);
}

function loadPreferences() {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedListStyle = localStorage.getItem("listStyle") || "circle";

    setTheme(savedTheme);
    setListStyle(savedListStyle);

    themeSelect.value = savedTheme;
    listStyleSelect.value = savedListStyle;
}

// Event Listeners
themeSelect.addEventListener("change", (e) => {
    setTheme(e.target.value);
});

listStyleSelect.addEventListener("change", (e) => {
    setListStyle(e.target.value);
});

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    loadPreferences();
    populateList(listItems);
});