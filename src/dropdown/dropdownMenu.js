import "./minimalDropdown.css"

export default function dropdownMenu(dropdownData) {
    // Entire minimal-dropdowns div
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("minimal-dropdowns-encapsulating-div");

    // minimal-dropdowns button
    const menuButton = document.createElement("button");
    menuButton.classList.add("minimal-dropdowns-button");
    menuButton.innerText = dropdownData.title;
    menuDiv.appendChild(menuButton);

    // dropdown content div
    const dropdownContentDiv = document.createElement("div");
    dropdownContentDiv.classList.add("minimal-dropdowns-content-div")

    /* eslint-disable no-plusplus */
    for (let index = 0; index < dropdownData.options.length; index++) {
        const dropdownSlot = document.createElement("a");
        dropdownSlot.target = "_blank"
        dropdownSlot.href = dropdownData.references[index];
        dropdownSlot.innerText = dropdownData.options[index];
        dropdownSlot.classList.add("minimal-dropdowns-content-slot");
        dropdownContentDiv.appendChild(dropdownSlot);
    }
    menuDiv.appendChild(dropdownContentDiv)
    return menuDiv
}
