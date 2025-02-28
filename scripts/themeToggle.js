const themeColors = ["#d8e2dc", "#ffe5d9", "#f4acb7", "#e9d8a6", "#748cab", "#ffb3c1"];

let htmlBody = document.querySelector("html");
htmlBody.style.backgroundColor = "#f4f7ff";

document.querySelector("#toggle-btn").addEventListener("click", function() {
    htmlBody.style.backgroundColor = themeColors[Math.floor(Math.random() * themeColors.length)];
});