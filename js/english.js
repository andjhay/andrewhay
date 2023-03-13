export function applyEnglish(currentPage) {
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
  const noroffLogo = document.getElementById("norofflogo");
  homeNav.innerHTML = "<b>Home</b>";
  if (currentPage == "" || currentPage == "index") {
    content.innerHTML = `
    <p>
    Welcome to my portfolio displaying work I have done in Front-End development and arial drone photography.
    </p>
    <p>
    Please send any questions to <a href="mailto: contact@andrewhay.no"><b>contact@andrewhay.no</b></a>
    </p>
    <p>
          Hay Freelance - Org nr
          <a
            href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=927481189"
            target="_blank"
            rel="noopener noreferrer"
          >
            927 481 189</a
          >
        </p>`;
    button.innerHTML = `To Front-End Portfolio`;
  }
  if (currentPage == "front_end") {
    mainTitle.innerHTML = "Front-End Development";
    backgroundTitle.innerHTML = "My Background";
    experienceTitle.innerHTML = "My Experience";
    portfolioTitle.innerHTML = "Portfolio";
    code.innerHTML = "Code";
    frameworks.innerHTML = "Frameworks";
    planning.innerHTML = "Planning (Kanban, Gantt)";
    applications.innerHTML = "Applications";
    browser.innerHTML = "Browser Integration";
    content.innerHTML = "Front-End Development 2 year online studies at";
  }
  if (currentPage == "drone") {
    mainTitle.innerHTML = "Drone Operations";
    portfolioTitle.innerHTML = "Portfolio";
    info.innerHTML = `
    <ul>
      <h5>Info</h5>
      <li>Licensed small Drone Operator in Norway - A1A3</li>
      <li>Current Drone - DJI Mavic 2 Pro</li>
      <li>Agisoft Metashape 3D Mapping and modeling</li>
      <li>Blender 3D Model editing</li>
    </ul>`;

    content.innerHTML = `
    <ul>
      <h5>Available for</h5>
      <li>Arial Photography</li>
      <li>3D Mapping and Imagery</li>
    </ul>`;

    seeMore.innerHTML = "View more 3D imagery here";
  }
}
