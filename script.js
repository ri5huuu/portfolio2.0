let Button = document.querySelector(".darkmode");
let Mode = document.querySelector("body");
let headings = document.querySelectorAll("h2, h3, h4, i, h5, p");
let resume = document.querySelector(".resume button");
let nav = document.querySelector(".navbar");
let back =document.querySelector("html,body");

let value = 0;

Button.addEventListener("click", function () {
    if (value == 0) {
        // Light Mode
        Mode.style.backgroundColor = "white";
        Button.style.color = "teal";
        nav.style.color = "teal";
        resume.style.backgroundColor="#b5b738";
        back.style.backgroundColor="white"
        headings.forEach(h => h.style.color = "teal");
        value = 1;
    } else {
        // Dark Mode
        Mode.style.backgroundColor = "black";
        Button.style.color = "white";
        nav.style.color = "white";
        resume.style.backgroundColor="grey";
        back.style.backgroundColor="black"
        headings.forEach(h => h.style.color = "white");
        value = 0;
    }
});
