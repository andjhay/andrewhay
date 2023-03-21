export function applyEnglish(currentPage) {
  const homeNav = document.getElementById("home");
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
  const button = document.getElementById("go-to-portfolio");
  homeNav.innerHTML = "<b>Home</b>";
  if (currentPage == "" || currentPage == "index") {
    about.innerHTML = "About Me"
    content.innerHTML = `
    <p>
    My name is Andrew Hay, <br/>
    I am new to developing and will have completed a 2 year program focused on Front-End come start of the summer 2023. <br/>
    The purpose of this page is to display my portfolio of Front-End development projects and a overview of my skills.
    </p>
    
    <p>
    Currently I am working on my own as self-employed while I am actively applying for fulltime positions as a developer.<br/>
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
    button.innerHTML = `To Front-End Portfolio`;
  }
  if (currentPage == "portfolio") {
    mainTitle.innerHTML = "Front-End Development";
    backgroundTitle.innerHTML = "My Background";
    skillsTitle.innerHTML = "My Skills";
    portfolioTitle.innerHTML = "Portfolio";
    code.innerHTML = "Code Languages";
    frameworks.innerHTML = "Frameworks (CSS and JS)";
    planning.innerHTML = "Project Planning (Kanban, Gantt)";
    applications.innerHTML = "Applications";
    browser.innerHTML = "Accessibility and SEO";
    content.innerHTML = "Front-End Development 2 year online studies at" + " ";
    management.innerHTML = "Project Management Systems";
  }
}
