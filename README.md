# Masks for Solidarity

![Build and Release](https://github.com/distributeaid/masks-for-solidarity/workflows/Build%20and%20Release/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d1f5dcf2-39b9-42f6-aa4b-79ba4e40f781/deploy-status)](https://app.netlify.com/sites/masks-for-solidarity/deploys)
[![Known Vulnerabilities](https://snyk.io/test/github/distributeaid/masks-for-solidarity/badge.svg)](https://snyk.io/test/github/distributeaid/masks-for-solidarity)
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
