const portfolioProjects = [
  {
    title: "Vardeneset Idrettsforening",
    design_images: [
      { title: "The original site", src: "img/process/vardenesetfullsize4kscreen.png", width: "100%" },
      { title: "Mobile design concept", src: "img/process/vardenesetmobiledesign.png", width: "50%" },
      { title: "Design concept", src: "img/process/vardenesetexampledesign.png", width: "100%" },
    ],
    site_images: [
      { title: "", src: "img/process/vardenesetfull.png", width: "100%" },
      { title: "", src: "img/process/vardenesetifmobile.jpg", width: "50%" },
    ],
    description:
      "I was hired to redesign with the aim of modernising and simplifying the website. This involved changing hosting provider, coding the site using bootstrap with a wordpress backend and adjusting the google search results to display the site accurately.",
    xd_link: "https://xd.adobe.com/view/bf186c63-3bb4-45b0-a402-ff98fe33d723-ea4b/",
    web_link: "https://vardenesetif.no",
    github_link: "https://github.com/andjhay/VardenesetIF",
  },
  {
    title: "Noroff Project - Auction Site",
    design_images: [
      { title: "Style tile", src: "img/process/auctionstyletile.png", width: "100%" },
      { title: "Project timeline", src: "img/process/auctionprojecttimeframe.png", width: "100%" },
      { title: "Mobile XD prototype", src: "img/process/auctionmobiledesign.png", width: "100%" },
    ],
    site_images: [
      { title: "", src: "img/process/auctionfull.png", width: "100%" },
      { title: "", src: "img/process/auctionmobile.jpg", width: "50%" },
    ],
    description:
      "Second year first semester project for the Noroff Front-End development course. The goal was to create a working auction site meeting set project requirements using Noroff own API to interact with other users.",
    xd_link: "https://xd.adobe.com/view/ba94c99c-d988-43a2-a125-0c0ac3b29aa4-efc7/",
    web_link: "https://andjhay.github.io/Auction-Site-Semester-Project-2/",
    github_link: "https://github.com/andjhay/Auction-Site-Semester-Project-2",
  },
  {
    title: "Noroff Project - Shop (Rainydays)",
    design_images: [
      { title: "Style tile", src: "img/process/rainydaysstyletile.png", width: "100%" },
      { title: "Mobile XD prototype", src: "img/process/rainydaysmobiledesign.png", width: "100%" },
    ],
    site_images: [
      { title: "", src: "img/process/rainydaysfull.png", width: "100%" },
      { title: "", src: "img/process/rainydaysmobile.jpg", width: "50%" },
    ],
    description:
      "This project was completed in stages throughout the first year of the Noroff Front-End development course as part of the coursework and underwent many changes, initially the site being just HTML and CSS to finally having integrated wordpress api calls and javascript.",
    xd_link: "https://xd.adobe.com/view/7e66c1aa-94c2-4223-a535-eb02587192e2-2b35/",
    web_link: "https://crosscourseprojectandjhay.netlify.app/",
    github_link: "https://github.com/Noroff-FEU-Assignments/cross-course-project-andjhay",
  },
  {
    title: "Noroff Project - Community Museum",
    design_images: [
      { title: "Style tile", src: "img/process/museumstyletile.png", width: "100%" },
      { title: "Mobile XD prototype", src: "img/process/museummobiledesign.png", width: "100%" },
      { title: "Full XD prototype", src: "img/process/museumfullsizedesign.png", width: "100%" },
    ],
    site_images: [
      { title: "", src: "img/process/museumfull.png", width: "100%" },
      { title: "", src: "img/process/museummobile.jpg", width: "50%" },
    ],
    description:
      "This site was the exam from the first semester of the first year at Noroff. Most of the copy was provided and the task was to build a site that would be user friendly and appealing to a younger demographic audience.",
    xd_link: "https://xd.adobe.com/view/1ab02a2c-5f74-406e-a423-ed2319c2ee30-4fe3/",
    web_link: "https://semesterprojectoneandrewhaynoroff.netlify.app",
    github_link: "https://github.com/andjhay/semesterprojectone",
  },
  {
    title: "Noroff Project - Learning to use API calls",
    design_images: [],
    site_images: [
      { title: "", src: "img/process/starwarsfullsize.png", width: "100%" },
      { title: "", src: "img/process/starwarsmobile.jpg", width: "50%" },
    ],
    description:
      "This was a one week submission during the second semester of the first year at Noroff to create a website generated by using a publicly available API.",
    xd_link: "",
    web_link: "https://starwarsstarshipsjavascriptapi.netlify.app/",
    github_link: "https://github.com/andjhay/andrew-hay-js1-ca",
  },
  {
    title: "Noroff Project - Blog",
    design_images: [
      { title: "", src: "img/process/blogstyletile.png", width: "100%" },
      { title: "", src: "img/process/blogmobiledesign.png", width: "100%" },
    ],
    site_images: [
      { title: "", src: "img/process/blogfull.png", width: "100%" },
      { title: "", src: "img/process/blogmobile.jpg", width: "50%" },
    ],
    description:
      "The year one exam project for the Noroff Front-End development course. The goal was to create a blog site using wordpress headless API to create the posts.",
    xd_link: "https://xd.adobe.com/view/7dc38053-32dd-4029-9446-312023cfba0f-2890/",
    web_link: "https://projectexamoneandrewhay.netlify.app/",
    github_link: "https://github.com/Noroff-FEU-Assignments/project-exam-1-andjhay",
  },
];

export function loadPortfolio() {
  const portfolioContent = document.getElementById("portfolio-content");

  portfolioProjects.forEach((project, i) => {
    if (project.xd_link == "") {
      portfolioContent.innerHTML += `<div data-id="1" class="bg-light card my-3 shadow p-3">
          <h3 class="py-3 text-decoration-underline">${project.title}</h3>
          <h4 class="pt-3 text-center border-bottom border-2 border-secondary">Final Site</h4>
          <div id="site-images${i}" class="row row-cols-1 row-cols-lg-2 text-center">
          </div>
          <h4 class="pt-3 border-top border-2 border-secondary">About the project:</h4>
          <p>
            ${project.description}
          </p>
          <p>
            <a href="${project.web_link}" target="_blank" rel="noopener noreferrer"
              ><b>Link to the live site at ${project.web_link}</b></a
            >
          </p>
          <p>
            <a href="${project.github_link}" target="_blank" rel="noopener noreferrer"
              ><b>Github Repository</b></a
            >
          </p>
        </div>`;
    } else {
      portfolioContent.innerHTML += `<div data-id="1" class="bg-light card my-3 shadow p-3">
          <h3 class="py-3 text-decoration-underline">${project.title}</h3>
          <h4 class="pt-3 text-center border-bottom border-2 border-secondary">Design Process</h4>
          <div id="design-images${i}" class="row row-cols-1 row-cols-lg-2 text-center">
          </div>
          <h4 class="pt-3 text-center border-bottom border-2 border-secondary">Final Site</h4>
          <div id="site-images${i}" class="row row-cols-1 row-cols-lg-2 text-center">
          </div>
          <h4 class="pt-3 border-top border-2 border-secondary">About the project:</h4>
          <p>
            ${project.description}
          </p>
          <p>
            <a
              href="${project.xd_link}"
              target="_blank"
              rel="noopener noreferrer"
              ><b>Link to Adobe XD to see the rest of the prototype design.</b>
            </a>
          </p>
          <p>
            <a href="${project.web_link}" target="_blank" rel="noopener noreferrer"
              ><b>Link to the live site at ${project.web_link}</b></a
            >
          </p>
          <p>
            <a href="${project.github_link}" target="_blank" rel="noopener noreferrer"
              ><b>Github Repository</b></a
            >
          </p>
        </div>`;
    }
    const designImages = document.getElementById(`design-images${i}`);
    project.design_images.forEach((img) => {
      designImages.innerHTML += `<div class="col py-2 px-4 m-auto">
      <h6>${img.title}</h6>
      <img src="${img.src}" width="${img.width}" alt="" />
    </div>`;
    });
    const siteImages = document.getElementById(`site-images${i}`);
    project.site_images.forEach((img) => {
      siteImages.innerHTML += `<div class="col py-2 px-4 m-auto">
      <h6>${img.title}</h6>
      <img src="${img.src}" width="${img.width}" alt="" />
    </div>`;
    });
  });
}