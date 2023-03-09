export function applyNorsk(currentPage) {
  const homeNav = document.getElementById("home");
  const content = document.getElementById("content");
  const info = document.getElementById("info");
  const mainTitle = document.getElementById("main-title");
  const backgroundTitle = document.getElementById("background-title");
  const experienceTitle = document.getElementById("experience-title");
  const portfolioTitle = document.getElementById("portfolio-title");
  const seeMore = document.getElementById("see-more");
  const code = document.getElementById("code");
  const frameworks = document.getElementById("frameworks");
  const planning = document.getElementById("planning");
  const applications = document.getElementById("applications");
  const browser = document.getElementById("browser");
  const button = document.getElementById("gotoportfolio");
  homeNav.innerHTML = "<b>Hjem</b>";
  if (currentPage == "" || currentPage == "index") {
    content.innerHTML = `
    <p>
    Velkommen til min portefølje med utstilling av arbeid jeg har utført i Front-End utvikling og drone fotografi.
    </p>
    <p>
    Venligst ta kontakt med spørsmål til <a href="mailto: contact@andrewhay.no"><b>contact@andrewhay.no</b></a>
    </p>
    <p>
    Hay Freelance - Org nr
    <a
      href="https://data.brreg.no/enhetsregisteret/oppslag/enheter/927481189"
      target="_blank"
      rel="noopener noreferrer"
    >
      927 481 189</a
    >
  </p>`;
    button.innerHTML = `Til Front-End Portefølje`;
  }
  if (currentPage == "front_end") {
    mainTitle.innerHTML = "Front-End Utvikling";
    backgroundTitle.innerHTML = "Min Bakgrunn";
    experienceTitle.innerHTML = "Min Erfaring";
    portfolioTitle.innerHTML = "Portefølje";
    code.innerHTML = "Kode";
    frameworks.innerHTML = "Rammeverk";
    planning.innerHTML = "Planlegging (Kanban, Gantt)";
    applications.innerHTML = "Programvarer";
    browser.innerHTML = "Nettleserintegrasjon";
    content.innerHTML = "Front-End Utvikling 2 årig nettstudie ved";
  }
  if (currentPage == "drone") {
    mainTitle.innerHTML = "Drone Oppdrag";
    portfolioTitle.innerHTML = "Portefølje";
    info.innerHTML = `
    <ul>
      <h5>Info</h5>
      <li>Lisensiert Liten Droneoperatør i Norge - A1A3</li>
      <li>Nåværende Drone - DJI Mavic 2 Pro</li>
      <li>Agisoft Metashape 3D kartlegging og modelgenerering</li>
      <li>Blender 3D Model redigering</li>
    </ul>`;

    content.innerHTML = `
    <ul>
      <h5>Tilgjengelig til</h5>
      <li>Luft Fotografi</li>
      <li>3D Kartlegging og Bilder </li>
    </ul>`;

    seeMore.innerHTML = "Se flere 3D bilder her";
  }
}
