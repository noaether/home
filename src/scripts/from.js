// Convert files from their format to inner html
import '../exts/objects.js'; // Import the objects file


projects.projects.forEach((project) => {
  document.querySelector('#projects').innerHTML += `<div class="project">
                                                    <h2>${project.name}</h2>
                                                    <p>${project.description}</p>
                                                    <a href="${project.url}">View Project</a>
                                                  </div>`;
});
