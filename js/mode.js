import { load, save } from "./storage.js";

export function selectMode() {
  const darkMode = document.querySelector("#dark");
  const lightMode = document.querySelector("#light");
  const selectedMode = load("mode");
  if (selectedMode == null || selectedMode == "light") {
    save("mode", "light");
    lightMode.checked = "true";
  } else if (selectedMode == "dark") {
    darkMode.checked = "true";
    applyMode("dark");
  }

  darkMode.addEventListener("click", (event) => {
    save("mode", "dark");
    applyMode("dark");
  });

  lightMode.addEventListener("click", (event) => {
    save("mode", "light");
    applyMode("light");
  });
}

function applyMode(mode) {
  const html = document.querySelector("html");
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  const footer = document.querySelector("footer");
  const changeDiv = document.querySelectorAll("div[data-id='1']");
  const buttons = document.querySelectorAll("button");
  const noroffLogo = document.getElementById("noroff-logo");
  html.setAttribute("data-bs-theme", `${mode}`);
  if (mode == "dark") {
    if (buttons) {
      buttons.forEach((button) => {
        button.classList.remove("btn-background-black");
        button.classList.add("btn-dark");
      });
    }
    if (noroffLogo) {
      noroffLogo.src = "./img/logo/noroff-logo.png";
    }
    header.classList.remove("bg-background-black");
    header.classList.add("bg-dark");
    body.classList.remove("bg-background");
    footer.classList.remove("bg-primary");
    footer.classList.add("bg-dark");
    changeDiv.forEach((div) => {
      div.classList.remove("bg-light");
      div.classList.add("bg-dark");
    });
  } else {
    if (buttons) {
      buttons.forEach((button) => {
        button.classList.add("btn-background-black");
        button.classList.remove("btn-dark");
      });
    }
    if (noroffLogo) {
      noroffLogo.src = "./img/logo/noroff-logo-dark.png";
    }
    header.classList.add("bg-background-black");
    header.classList.remove("bg-dark");
    body.classList.add("bg-background");
    footer.classList.remove("bg-dark");
    footer.classList.add("bg-primary");
    changeDiv.forEach((div) => {
      div.classList.remove("bg-dark");
      div.classList.add("bg-light");
    });
  }
}
