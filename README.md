# Masks for Solidarity

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Website for the Masks for Solidarity project.

## Start Gatsby

      npm ci
      npx gatsby develop

## How this project works

Gatsby is configured in [`gatsby-node.js`](./gatsby-node.js) to collect the
markdown files in the `static` folder and turn them into pages.

All pages are rendered using the template
[`src/templates/page.tsx`](./src/templates/pages.tsx).
