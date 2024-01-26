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
  const help = dropdownMenu(data)
  body.appendChild(help)
}

component();
