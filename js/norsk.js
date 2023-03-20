export function applyNorsk(currentPage) {
  const homeNav = document.getElementById("home");
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
  const button = document.getElementById("go-to-portfolio");
  const management = document.getElementById("management");
  homeNav.innerHTML = "<b>Hjem</b>";
  if (currentPage == "" || currentPage == "index") {
    content.innerHTML = `
    <p>Mitt navn er Andrew Hay, <br/>
    jeg er ny som utvikler og vil ha fullført et 2 års program med hoved fokus på Front-End ved begynnelsen av sommeren 2023. <br/>
    Formålet med denne siden er å vise frem min portefølje av Front-End utviklet prosject og et overblikk av mine ferdigheter som utvikler.
    </p>
    
    <p>For øyeblikket arbeider jeg selvstendig i mellomtiden mens jeg aktivt søker fulltids stilling som utvikler. <br/>
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
    button.innerHTML = `Til Front-End Portefølje`;
  }
  if (currentPage == "portfolio") {
    mainTitle.innerHTML = "Front-End Utvikling";
    backgroundTitle.innerHTML = "Min Bakgrunn";
    skillsTitle.innerHTML = "Mine Ferdigheter";
    portfolioTitle.innerHTML = "Portefølje";
    code.innerHTML = "Kode Språk";
    frameworks.innerHTML = "Rammeverk (CSS og JS)";
    planning.innerHTML = "Prosjekt Planlegging (Kanban, Gantt)";
    applications.innerHTML = "Programvarer";
    browser.innerHTML = "Tilgjengelighet and SEO";
    content.innerHTML = "Front-End Utvikling 2 årig nettstudie ved" + " ";
    management.innerHTML = "Prosjekt Kontroll Systemer";
  }
}
