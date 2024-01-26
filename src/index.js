import "./style.css";
import "./reset.css";
import dropdownMenu from "./dropdown/dropdownMenu";

function component() {
  const body = document.querySelector("body")
  const data = {
    title: "Test Menu",
    options: [
      "link 1",
      "link 2",
      "link 3"
    ],
    references: [
      "https://www.google.com",
      "https://www.github.com",
      "https://www.theodinproject.com"
    ]
  }
  const navBar = document.createElement("div");
  navBar.classList.add("navbar")

  /* eslint-disable no-plusplus */
  for (let index = 0; index < 3; index++) {
    const navPiece = document.createElement("a");
    navPiece.classList.add("navPiece");
    navPiece.innerText = "Testing"
    navBar.appendChild(navPiece)
  }

  const drop = dropdownMenu(data)
  navBar.appendChild(drop)
  
  body.appendChild(navBar)
}

component();
