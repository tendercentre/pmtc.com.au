# Hugo Boilerplate

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lukebennett88/hugo-boilerplate)

## Installation

- [ ] Set up GitHub account for client (if they don't have one already)
- [ ] Use the 'Deploy to netlify' button — making sure to rename the newly cloned copy of the repo to something relevant to the new site you are building
- [ ] Add yourself as a collaborator: `https://github.com/<user>/<repo>/settings/collaboration`
- [ ] Clone repo `git clone` and `cd` into it
- [ ] Run `hugo server -D` to spin up a local dev server
- [ ] Update baseurl, title, description, author name & Google Analytics code in `/config.yml`
- [ ] Set up content sections for website (a file inside of `/content` with `menu: "nav"` in the front-matter, or a folder in the same directory with an `_index.md` file — also with `menu: "nav"` in the front-matter)
- [ ] Set up OAuth for NetlifyCMS (instructions here: <https://www.netlify.com/docs/authentication-providers/>)
- [ ] Update repo & collections in: `/static/admin/config.yml`
- [ ] Remove template favicons and replace with custom icons (use this website to generate all the different sizes and formats: <http://realfavicongenerator.net/>)
- [ ] Update README.md to better reflect the project

<!-- # $PROJECT

This is the website for $SITE

It is hosted on Netlify

Made by [Luke Bennett](https://github.com/lukebennett88) -->

This boilerplate provides the following functions;

- [ ] Complies SCSS to CSS
- [ ] Autoprefixes CSS
- [ ] Minifies CSS
- [ ] Netlify CMS
- [ ] Deploy to Netlify button
- [ ] JSON feed

TODO:

- Rewrite Style Sample so it's not a total rip-off of Matt Gemmell's
- Source maps for SCSS (and JS if added)
- PostCSS Preset Env
- Minify HTML
- Service workers (offline, font caching etc)
- HTTP/2
- Concatonate & minify JS (there is no JS)
- eslintrc files for standardised styling of code
- Pass [Front End Checklist](https://frontendchecklist.io)
