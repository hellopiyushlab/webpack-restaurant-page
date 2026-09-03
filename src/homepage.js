// <div id="cafe-name">Kagami café</div>
// <div id="tagline">Sip the warmth of freshly roasted coffee, savor the quiet comfort of your morning, and let the rest of the world slow down.</div>
// <div id="online-button">Order Online</div>

function createHomePage() {

    // select the main content
    const content = document.querySelector("#content");

    // create the heading with cafe name
    const cafeName = document.createElement("div");
    cafeName.textContent = "Kagami café";
    cafeName.setAttribute("class", "heading");
    content.appendChild(cafeName);

    // create the tagline
    const tagline = document.createElement("div");
    tagline.textContent = "Sip the warmth of freshly roasted coffee, savor the quiet comfort of your morning, and let the rest of the world slow down.";
    tagline.setAttribute("id", "tagline");
    content.appendChild(tagline);

    // create the order online button
    const orderOnlineButton = document.createElement("div");
    orderOnlineButton.textContent = "Order Online";
    orderOnlineButton.setAttribute("id", "online-button");
    content.appendChild(orderOnlineButton);
}

export {
    createHomePage,
}