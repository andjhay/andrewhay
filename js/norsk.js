export function applyNorsk(currentPage) {
  const homeNav = document.getElementById("home");
  const content = document.getElementById("content");
  homeNav.innerHTML = "Hjem";
  if (currentPage == "index.html") {
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
}
