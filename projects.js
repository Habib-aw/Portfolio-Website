async function fetchProjects() {
  try {
    const response = await fetch("projects.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const projects = await response.json();
    renderProjects(projects);
  } catch (error) {
    console.error("Failed to load projects:", error);
  }
}
function renderProjects(projects) {
  const projectContainer = document.getElementById("projects");
  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    // Replace image markers with actual <img> tags
    const detailsWithImages = project.details.replace(
      /(\w+\.(png|jpg|jpeg|svg))/g,
      (match) => {
        return `<img src="Images/previews/${match}" alt="Project Image"  class="project-image">`;
      }
    );
    const technologiesHTML = project.technologies
      .map((tech) => {
        return `<img src="Images/svgs/${tech.icon}" alt="${tech.name}" title="${tech.name}" class="logo">`;
      })
      .join("");
    projectElement.innerHTML = `<section class="project-section">
          <div class="title-repo">
            <h2 class="project-title">${project.title}</h2>
            
            <a href="${project.repoLink}" class="github-icon" target="_blank" class="repo-section">
              <img src="Images/svgs/github.svg" alt="github" srcset="" />
              <p class="repo-text">Repo</p>
            </a>
            
          </div>
          <hr />
          <h3>Started: ${project.startDate}</h3>
          <div class="details-section">
            <p>${detailsWithImages}</p>
          </div>
          <div class="sumary-section">
            <br/>
            <p>
            ${project.summary}
            </p>
          </div>
          <div>
            <h3>Technologies used</h3>
            <div class="tech-used-icons">
            ${technologiesHTML}
            </div>
          </div>
        </section><br/><br/><br/><br/>`;

    projectContainer.appendChild(projectElement);
  });
}
window.onload = fetchProjects;
