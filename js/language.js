import { applyEnglish } from "./english.js";
import { applyNorsk } from "./norsk.js";
import { load, save } from "./storage.js";

export function selectLanguage(path) {
  let currentPage = path;
  const norskLang = document.querySelector("#norsk");
  const englishLang = document.querySelector("#english");

  const selectedLanguage = load("language");
  if (selectedLanguage == null || selectedLanguage == "english") {
    save("language", "english");
    englishLang.checked = "true";
    applyEnglish(currentPage);
  } else if (selectedLanguage == "norsk") {
    norskLang.checked = "true";
    applyNorsk(currentPage);
  }

  norskLang.addEventListener("click", (event) => {
    save("language", "norsk");
    applyNorsk(currentPage);
  });

  englishLang.addEventListener("click", (event) => {
    save("language", "english");
    applyEnglish(currentPage);
  });
}
