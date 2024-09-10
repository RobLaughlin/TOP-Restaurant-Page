import "./../css/styles.css";
import "./../css/navbar.css";
import "./../css/menu.css";

import { createMenu, createMenuItem } from "./menu";

const MENU_ITEMS = [
    createMenuItem(10, "Menu Item 1", "Aliquip sint ea quis amet sint excepteur qui do deserunt id."),
    createMenuItem(20, "Menu Item 2", "Ullamco commodo Lorem exercitation mollit commodo enim."),
    createMenuItem(30, "Menu Item 3", "Laboris velit nostrud pariatur occaecat."),
];

const menu = createMenu(MENU_ITEMS);
let content = document.getElementById("content");
content.appendChild(menu);
