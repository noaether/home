# Noae's Website

This is the source code for my personal website, which contains my portfolio, blog posts, and contact information.

Table of Contents
Technologies
Getting Started
Folder Structure
Scripts
Deployment
Contributing
License

## Technologies

This website was built with the following technologies:

- HTML
- CSS
- JavaScript
- Parcel
- Prettier
- Markdown

## Getting Started

To get started with this website, clone the repository and install the dependencies:

```bash
git clone https://github.com/noaether/home.git
cd home
npm install
```

Once the dependencies are installed, you can run the development server with:

```bash
npm run dev
```

The website should now be available at <http://localhost:1234>.

## Folder Structure

The folder structure for this website is as follows:

```gottem
home/
  ├── dist/
  ├── src/
  │   ├── assets/
  │   ├── posts/
  │   ├── scripts/
  │   ├── scripts/
  │   │   ├── autos.js
  │   │   ├── blog.js
  │   │   ├── functions.js
  │   │   ├── includeHTML.js [https://github.com/xmoonlight/includeHTML]
  │   │   ├── index.js
  │   │   └── projects.js
  │   ├── about.html
  │   ├── blog.html
  │   ├── contact.html
  │   ├── index.html
  │   ├── projects.html
  │   └── style.css
  ├── .gitignore
  ├── .parcelrc
  ├── .prettierrc.json
  ├── buttons.jsonc
  ├── LICENSE
  ├── netlify.toml
  ├── package-lock.json
  ├── package.json
  └── README.md
```

The src/ folder contains the source code for the website. The assets/ folder contains images and other media files, and the posts/ folder contains markdown files and HTML for blog posts. The root level of the src/ folder contains HTML files for the different pages of the website, as well as a CSS file for styling.

The dist/ folder is where the compiled and optimized code is generated by Parcel. This folder is ignored by Git.

The other files and folders in the root of the repository are configuration files for various tools used in the project.

## Scripts

This project includes the following scripts: \

`npm run dev`: starts the development server at <http://localhost:1234>. \
`npm run build`: builds the website for production and generates the optimized files in the dist/ folder. \
`npm run prettier`: automatically formats the code according to the Prettier configuration. \
`npm run deploy`: runs the prettier, build, and netlify deploy commands to deploy the website to Netlify.

## Deployment

This website is automatically deployed to Netlify using GitHub Actions. Whenever a new commit is pushed to the main branch, the code is prettified, built, and deployed to Netlify.

## Contributing

If you would like to contribute to this website, please create a pull request with your changes. Make sure to format your code using Prettier and to test your changes before submitting the pull request.

## License

This project is licensed under the BSD-3-Clause license.
