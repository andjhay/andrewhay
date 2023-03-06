export function applyEnglish(currentPage) {
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
  homeNav.innerHTML = "<b>Home</b>";
  if (currentPage == "" || currentPage == "index") {
    content.innerHTML = `
    <p>
    Welcome to my portfolio displaying work I have done in Front-End development and arial drone photography.
    </p>
    <br />
    <p>
    Please send any questions to <a href="mailto: contact@andrewhay.no">contact@andrewhay.no</a>
    </p>`;
  }
  if (currentPage == "front_end") {
    mainTitle.innerHTML = "Front-End Development";
    backgroundTitle.innerHTML = "My Background";
    experienceTitle.innerHTML = "My Experience";
    portfolioTitle.innerHTML = "Portfolio";
    code.innerHTML = "Kode";
    frameworks.innerHTML = "Frameworks";
    planning.innerHTML = "Planning (Kanban, Gantt)";
    applications.innerHTML = "Applications";
    browser.innerHTML = "Browser Integration";
    content.innerHTML = `Front-End Development 2 year online studies at
    <a
      href="https://www.noroff.no/en/studies/vocational-school/front-end-development"
      target="_blank"
      rel="noopener noreferrer"
      >Noroff School of technology and digital media <img src="./img/logo/noroff-logo.png" width="100px"
    /></a>`;
  }
  if (currentPage == "drone") {
    mainTitle.innerHTML = "Drone Flights";
    portfolioTitle.innerHTML = "Portfolio";
    content.innerHTML = `
    <div class="col">
            <ul class="bg-primary-light rounded-4 border-0 shadow m-3 py-3">
              <h5>Info</h5>
              <li>Licensed small Drone Operator in Norway - A1A3</li>
              <li>Current Drone - DJI Mavic 2 Pro</li>
              <li>Agisoft Metashape 3D Mapping and modeling</li>
              <li>Blender 3D Model editing</li>
            </ul>
          </div>
          <div class="col">
            <ul class="bg-primary-light rounded-4 border-0 shadow m-3 py-3">
              <h5>Available for</h5>
              <li>Arial Photography</li>
              <li>3D Mapping and Imagery</li>
            </ul>
          </div>`;

    seeMore.innerHTML = "View more 3D imagery here";
  }
}
