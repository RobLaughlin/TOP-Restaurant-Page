export const createNavButton = function(text, clickEvent) {
    let btn = document.createElement("button");
    btn.classList.add(text + "Btn");
    btn.innerText = text;
    btn.addEventListener("click", clickEvent);
    return btn;
};

export const createNavbar = function (navButtons) {
    let nav = document.createElement("nav");

    navButtons.forEach(btn => {
        nav.appendChild(btn);
    });

    return nav;
};