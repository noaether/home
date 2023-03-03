const projects = [
  {
    name: 'Project Name 1',
    language: 'Language1',
    start: 'date',
    end: 'date',
    description: 'Project Description 1',
    source: 'https://example.com1',
  },
  {
    name: 'Project Name 2',
    language: 'Language2',
    start: 'date',
    end: 'date',
    description: 'Project Description 2',
    source: 'https://example.com2',
    action: 'https://example.com2',
  },
];

projects.forEach((p) => {
  // change html to add project
  if (p.action === undefined) p.action = '#" style="visibility: hidden;'; // literally xss'ing myself
  const projectHTML = `
  <div>
    <h3>${p.name} <kbd class="skills">${p.language}</kbd></h3>
    <h6 class="date">${p.start} - ${p.end}</h6>
    <p>
      ${p.description}
    </p>
    <a href="${p.source}"><button>Source</button></a>
    <a href="${p.action}"><button>In action</button></a>
  </div>
  `;
  document.querySelector('#projects').innerHTML += projectHTML;
});
