# refugees.care

![Build and Release](https://github.com/distributeaid/refugees.care/workflows/Build%20and%20Release/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d1f5dcf2-39b9-42f6-aa4b-79ba4e40f781/deploy-status)](https://app.netlify.com/sites/refugees-care/deploys)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://dashboard.mergify.io/badges/distributeaid/refugees.care&style=flat)](https://mergify.io)
[![Known Vulnerabilities](https://snyk.io/test/github/distributeaid/refugees.care/badge.svg)](https://snyk.io/test/github/distributeaid/refugees.care)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Website for the refugees.care project.

## Start Gatsby

      npm ci
      npx gatsby develop

## How this project works

Gatsby is configured in [`gatsby-node.js`](./gatsby-node.js) to collect the
markdown files in the `content` folder and turn them into pages.

All pages are rendered using the template
[`src/templates/page.tsx`](./src/templates/pages.tsx).
