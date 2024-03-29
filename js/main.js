import { selectLanguage } from "./language.js";
import { selectMode } from "./mode.js";
import { loadPortfolio } from "./portfolio.js";

const pathOriginal = location.pathname;
const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1, -5);

if (path == "portfolio") {
  loadPortfolio();
}

selectLanguage(path);

selectMode();
