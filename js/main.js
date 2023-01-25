import { selectLanguage } from "./language.js";

const pathOriginal = location.pathname;
const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1, -5);
console.log(path);
selectLanguage(path);
