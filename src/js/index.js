import "./../css/styles.css";
import "./../css/navbar.css";
import "./../css/menu.css";

import { createMenu, createMenuItem } from "./menu.js";
import { createNavButton, createNavbar } from "./navbar.js";
import { createTitle } from "./home.js";

// Menu
const MENU_ITEMS = [
    createMenuItem(10, "Menu Item 1", "Aliquip sint ea quis amet sint excepteur qui do deserunt id."),
    createMenuItem(20, "Menu Item 2", "Ullamco commodo Lorem exercitation mollit commodo enim."),
    createMenuItem(30, "Menu Item 3", "Laboris velit nostrud pariatur occaecat."),
];
const MENU = createMenu(MENU_ITEMS);

// Home
const HOME_TITLE = createTitle("Restaurant Name");

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
}

let header = document.getElementsByTagName("header")[0];
header.appendChild(NAVBAR);

let content = document.getElementById("content");
content.appendChild(HOME_TITLE);

