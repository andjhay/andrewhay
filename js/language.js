import { load, save } from "./storage.js";
const docTitle = document.getElementById("doc-title");
const homeNav = document.getElementById("home");
const frontNav = document.getElementById("front");
const about = document.getElementById("about");
const content = document.getElementById("content");
const mainTitle = document.getElementById("main-title");
const backgroundTitle = document.getElementById("background-title");
const skillsTitle = document.getElementById("skills-title");
const portfolioTitle = document.getElementById("portfolio-title");
const code = document.getElementById("code");
const frameworks = document.getElementById("frameworks");
const planning = document.getElementById("planning");
const applications = document.getElementById("applications");
const browser = document.getElementById("browser");
const management = document.getElementById("management");
const portfolioButton = document.getElementById("go-to-portfolio");
const cvButton = document.getElementById("cv");

export function selectLanguage(path) {
  const norskLang = document.querySelector("#norsk");
  const englishLang = document.querySelector("#english");
  const selectedLanguage = load("language");
  if (selectedLanguage == null || selectedLanguage == "english") {
    save("language", "english");
    englishLang.checked = "true";
    applyEnglish(path);
  } else if (selectedLanguage == "norsk") {
    norskLang.checked = "true";
    applyNorsk(path);
  }

  norskLang.addEventListener("click", (event) => {
    save("language", "norsk");
    applyNorsk(path);
  });

  englishLang.addEventListener("click", (event) => {
    save("language", "english");
    applyEnglish(path);
  });
}

function applyEnglish(currentPage) {
  homeNav.innerHTML = "Home";
  frontNav.innerHTML = "Front-End";
  if (currentPage == "" || currentPage == "index") {
    about.innerHTML = "About Me";
    content.innerHTML = `
    <p>
    My name is Andrew Hay, <br/>
    The purpose of this page is to display my portfolio of Front-End development projects and a overview of my skills as a developer.
    </p>
    
    <p>
    I am employed full-time as a System Developer by <a href="https://omega365.com/" target="_blank" 
    rel="noopener noreferrer">Omega 365</a><span><img class="m-1" src="./img/icons/omega-365-logo.svg" alt="Jest icon" /></span> 
    </p>
    <p>
    I will continue to operate my own sole proprietorship to work on other tasks when i have time as long as they are non-competing. 
    <br/>
    Hay Freelance - Org nr
    <a
    href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=927481189"
    target="_blank"
    rel="noopener noreferrer">
    927 481 189</a>
        </p>
        <p>
    Please contact me via <a href="mailto: contact@andrewhay.no"><b>contact@andrewhay.no</b></a> with any queries.
    </p>`;
    portfolioButton.innerHTML = `To Front-End Portfolio`;
    cvButton.innerHTML = "Download my CV";
  }
  if (currentPage == "portfolio") {
    docTitle.innerHTML = "Andrew Hay - Front-End";
    mainTitle.innerHTML = "Front-End Development";
    backgroundTitle.innerHTML = "My Background";
    skillsTitle.innerHTML = "My Skills";
    portfolioTitle.innerHTML = "Portfolio";
    code.innerHTML = "Code Languages";
    frameworks.innerHTML = "Frameworks (CSS and JS)";
    planning.innerHTML = "Project Planning (Kanban, Gantt)";
    applications.innerHTML = "Applications";
    browser.innerHTML = "Accessibility and SEO";
    content.innerHTML = "Front-End Development higher professional degree from" + " ";
    management.innerHTML = "Project Management Systems";
  }
}

function applyNorsk(currentPage) {
  homeNav.innerHTML = "Hjem";
  frontNav.innerHTML = "Frontend";
  if (currentPage == "" || currentPage == "index") {
    about.innerHTML = "Om Meg";
    content.innerHTML = `
    <p>Mitt navn er Andrew Hay, <br/>
    Formålet med denne siden er å vise frem min portefølje av Front-End utviklings prosjekt og et overblikk av mine ferdigheter som utvikler.
    </p>
    <p>Jeg er ansatt i fulltids stilling som Systemutvikler hos <a href="https://omega365.com/" target="_blank" 
    rel="noopener noreferrer">Omega 365</a><span><img src="./img/icons/omega-365-logo.svg" alt="Omega 365 icon" /></span>  
    </p>
    <p>
    Jeg kommer til å fortsette å jobbe selvstendig på andre oppgaver når jeg har tid så lenge de ikke er konkurrerende.<br/>
    Hay Freelance - Org nr
    <a
      href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=927481189"
      target="_blank"
      rel="noopener noreferrer"
    >
      927 481 189</a
    >
  </p>
  <p>
    Venligst kontakt meg via <a href="mailto: contact@andrewhay.no"><b>contact@andrewhay.no</b></a> med spørsmål.
    </p>`;
    portfolioButton.innerHTML = `Til Frontend Portefølje`;
    cvButton.innerHTML = "Last ned min CV";
  }
  if (currentPage == "portfolio") {
    docTitle.innerHTML = "Andrew Hay - Frontend";
    mainTitle.innerHTML = "Frontend Utvikling";
    backgroundTitle.innerHTML = "Min Bakgrunn";
    skillsTitle.innerHTML = "Mine Ferdigheter";
    portfolioTitle.innerHTML = "Portefølje";
    code.innerHTML = "Kode Språk";
    frameworks.innerHTML = "Rammeverk (CSS og JS)";
    planning.innerHTML = "Prosjekt Planlegging (Kanban, Gantt)";
    applications.innerHTML = "Programvarer";
    browser.innerHTML = "Tilgjengelighet and SEO";
    content.innerHTML = "Frontend Utvikling høyere fagskolegrad fra" + " ";
    management.innerHTML = "Prosjekt Kontroll Systemer";
  }
}
