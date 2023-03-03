// File for automatic replacements of text (e.g. the navbar, the footer, etc.)

document.querySelector('body > header > nav').innerHTML =`<a href="/">Home</a>
                                                          <a href="./about.html">About Me</a>
                                                          <a href="/projects.html">Projects</a>
                                                          <a href="/experience-and-education.html">Experience and Education</a>
                                                          <a href="/blog.html">Blog</a>
                                                          <a href="/contact.html">Contact</a>`;

document.querySelector("body > footer").innerHTML = "<p>Made with a lot of coffee by Noa St-Onge</p>";