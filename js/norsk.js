export function applyNorsk(currentPage) {
  const homeNav = document.getElementById("home");
  const content = document.getElementById("content");
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
  homeNav.innerHTML = "Hjem";
  if (currentPage == "") {
    content.innerHTML = `
    <p>
    Velkommen til min portefølje med utstilling av arbeid jeg har utført i Front-End utvikling og luft drone fotografi.
    <br />
    Arbeidende i mitt eget enkeltpersonforetak Hay Freelance har jeg muligheten til å ta på meg arbeid både lokalt og fjernt.<br />
  </p>
  <p>
    Venligst ta kontakt om du har spørsmål. <br />
    <a href="mailto: contact@andrewhay.no"> contact@andrewhay.no </a>
  </p>`;
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
    content.innerHTML = `Front-End Utvikling 2 årig nettstudie ved
    <a
      href="https://www.noroff.no/en/studies/vocational-school/front-end-development"
      target="_blank"
      rel="noopener noreferrer"
      >Noroff School of technology and digital media <img src="./img/logo/noroff-logo.png" width="100px"
    /></a>`;
  }
  if (currentPage == "drone") {
    mainTitle.innerHTML = "Drone Flyging";
    portfolioTitle.innerHTML = "Portefølje";
    content.innerHTML = `
    <div class="col">
    <ul class="bg-vlight rounded-4 border-0 shadow m-3 py-3">
      <h5>Info</h5>
      <li>Lisensiert Liten Droneoperatør i Norge - A1A3</li>
      <li>Nåværende Drone Model - DJI Mavic 2 Pro</li>
      <li>Agisoft Metashape 3D kartlegging og modellgenerering</li>
      <li>Blender 3D Model redigering</li>
    </ul>
  </div>
  <div class="col">
    <ul class="bg-vlight rounded-4 border-0 shadow m-3 py-3">
      <h5>Tilgjengelig til</h5>
      <li>Luft Fotografi</li>
      <li>3D Kartlegging og Bilder </li>
    </ul>
  </div>
  `;
    seeMore.innerHTML = "Se flere 3D bilder her";
  }
}
