function createContactPage() {

    const content = document.querySelector("#content");

    // create the heading
    const heading = document.createElement("div");
    heading.textContent = "Send us a message";
    heading.setAttribute("class", "heading");
    content.appendChild(heading);
}

export {
    createContactPage,
}