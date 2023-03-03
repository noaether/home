import './autos';
import './functions';

if (document.title == 'Noa St-Onge | Home') {
  const blogPosts = document.getElementById('blog-posts');

  fetch('blog.html')
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const details = doc.querySelectorAll('details');

      details.forEach((detail) => {
        const title = detail.getAttribute('id');
        const summary = detail.querySelector('summary').innerHTML;

        blogPosts.innerHTML += `<li><a href="blog#${title}">${summary}</a></li>`;
      });
    });
}

if (document.title == 'Noa St-Onge | Blog') {
  import('./blog.js');
}

if (document.title == 'Noa St-Onge | Projects') {
  import('./projects.js');
}
