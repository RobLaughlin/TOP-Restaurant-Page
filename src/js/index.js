import "./../css/styles.css";
import "./../css/navbar.css";
import "./../css/menu.css";

import { createMenu, createMenuItem } from "./menu.js";
import { createNavButton, createNavbar } from "./navbar.js";
import { createTitle } from "./home.js";
import { createAboutText } from "./about.js";

// Menu
const MENU_ITEMS = [
    createMenuItem(10, "Menu Item 1", "Aliquip sint ea quis amet sint excepteur qui do deserunt id."),
    createMenuItem(20, "Menu Item 2", "Ullamco commodo Lorem exercitation mollit commodo enim."),
    createMenuItem(30, "Menu Item 3", "Laboris velit nostrud pariatur occaecat."),
];
const MENU = createMenu(MENU_ITEMS);

// Home
const HOME_TITLE = createTitle("Restaurant Name");

// About
const ABOUT_PARAGRAPH = createAboutText(`
    Id commodo exercitation quis sit aliquip. Irure fugiat deserunt proident occaecat ea. Ex ipsum nulla Lorem esse sit culpa nulla elit. Ut ad et ea excepteur nulla quis sit. Eu occaecat magna amet culpa sit velit incididunt et ullamco.

    Nisi sint laborum nulla eiusmod sit cillum. Non dolor est elit deserunt qui consectetur sunt adipisicing esse ea do proident ad. Incididunt amet anim anim aliqua aliqua et eiusmod. Magna Lorem officia do non esse reprehenderit reprehenderit et cillum ea sit. Ipsum dolore eiusmod nostrud culpa deserunt id dolor qui aute fugiat sit ipsum eu.

    Id sint culpa consequat amet aliquip adipisicing labore nisi. Minim do eu sunt anim incididunt reprehenderit anim et aute. Incididunt aute qui ullamco ex pariatur adipisicing nisi culpa dolore et. Esse cillum adipisicing labore reprehenderit. Reprehenderit cillum ipsum aliquip exercitation eiusmod consequat voluptate dolor commodo. Elit Lorem adipisicing in nisi commodo voluptate qui ut quis nostrud commodo consequat.

    Incididunt officia adipisicing dolore amet nulla ex exercitation eu consequat veniam laborum sit aute consequat. Tempor excepteur enim aliquip reprehenderit exercitation deserunt mollit et duis non voluptate tempor anim tempor. Velit sunt aliqua deserunt dolore sint sit aliqua excepteur ex cillum eiusmod dolore adipisicing sit. Adipisicing Lorem minim nisi duis ipsum ut deserunt sint. Consequat ut ea aute ipsum eu qui eu aliquip nisi mollit ad consectetur. Consequat cillum sunt officia magna do magna dolor consectetur minim qui. Excepteur anim Lorem pariatur exercitation excepteur esse.    
`);

// Nav
const NAV_BUTTONS = [
    createNavButton("Home", handleHomeBtnClicked),
    createNavButton("Menu", handleMenuBtnClicked),
    createNavButton("About", handleAboutBtnClicked)
];
const NAVBAR = createNavbar(NAV_BUTTONS);

function wipeContentHtml() {
    const content = document.getElementById("content")
    content.innerHTML = "";
}

function handleHomeBtnClicked() {
    wipeContentHtml();
    let content = document.getElementById("content");
    content.appendChild(HOME_TITLE);
}

function handleMenuBtnClicked() {
    wipeContentHtml();
    let content = document.getElementById("content");
    content.appendChild(MENU);
}

function handleAboutBtnClicked() {
    wipeContentHtml();
    let content = document.getElementById("content");
    content.appendChild(ABOUT_PARAGRAPH);
}

let header = document.getElementsByTagName("header")[0];
header.appendChild(NAVBAR);

let content = document.getElementById("content");
content.appendChild(HOME_TITLE);

