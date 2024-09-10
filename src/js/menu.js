import sanitizeHtml from "sanitize-html";

export function createMenuItem(price, item, desc) {
    const html = function () {
        const formattedPrice = '$' + (Math.round(price * 100) / 100).toFixed(2).toString();
        return sanitizeHtml(`
            <tr>
                <td>${formattedPrice}</td>
                <td>${item}</td>
                <td>${desc}</td>
            </tr>
        `);
    }

    return {price, item, desc, html};
};

export function createMenu(menuItems=[]) {
    let menu = document.createElement("table")
    menu.classList.add("menu");

    let thead = menu.appendChild(document.createElement("thead"));
    let theaders = thead.appendChild(document.createElement("tr"));
    const theadItems = ["Price", "Item", "Description"];
    theadItems.forEach(item => {
        let th = document.createElement("th");
        th.innerText = item;
        theaders.appendChild(th);
    });

    let tbody = menu.appendChild(document.createElement("tbody"));
    menuItems.forEach(item => {
        tbody.innerHTML += item.html();
    });

    return menu;
}