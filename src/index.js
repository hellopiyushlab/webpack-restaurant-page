import { createHomePage } from "./homepage.js";
import { createContactPage } from "./contact.js";
import { createMenu } from "./menu.js";
import "./style.css";
console.log("Everything is working fine.");

createHomePage();
let page = "home";
const content = document.querySelector("#content");
// now the goal is to handle events and use different module accordingly

const headerButtons = document.querySelectorAll(".header-button");
headerButtons.forEach(headerButton => {
    headerButton.addEventListener("click", (event) => {
        // if we are on same page, do nothing
        if (event.target.id === page) {
            console.log("already one same page");
            return;
        }
        // switching logic
        page = event.target.id;
        if (page === "home") {
            content.replaceChildren();
            createHomePage();
        } else if (page === "contact") {
            content.replaceChildren();
            createContactPage();
        } else if (page === "menu") {
            content.replaceChildren();
            createMenu();
        }
    });
});