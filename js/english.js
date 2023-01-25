export function applyEnglish(currentPage) {
  const homeNav = document.getElementById("home");
  const content = document.getElementById("content");
  homeNav.innerHTML = "Home";
  if (currentPage == "index.html" || currentPage == "") {
    content.innerHTML = `
    <p>
    Welcome to my portfolio displaying work I have done in Front-End development and arial drone photography.
    <br />
    Operating under my own company Hay Freelance I am able to take on any assignment locally or remote.<br />
  </p>
  <p>
    Please contact me if you have any questions or looking for a quote. <br />
    <a href="mailto: contact@andrewhay.no"> contact@andrewhay.no </a>
  </p>`;
  }
}
