export function createAboutText(text) {
    let aboutText = document.createElement("p");
    aboutText.classList.add("aboutText");
    aboutText.innerText = text;
    return aboutText;
}