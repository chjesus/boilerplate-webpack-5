# [Webpack Boilerplate - Single Page Application]() &middot; 

[![license][license]]()
[![node][node]][node-url]
[![npm][npm]][npm-url]
[![webpack][webpack]][webpack-url]
[![webpack-cli][webpack-cli]][webpack-cli-url]
[![webpack-dev-server][webpack-dev-server]][webpack-dev-server-url]
[![handlebars][handlebars]][handlebars-url]
[![postcss][postcss]][postcss-url]
[![sass][sass]][sass-url]
[![babel][babel]][babel-url]
[![autoprefixer][autoprefixer]][autoprefixer-url]
[![navigo][navigo]][navigo-url]

## Table of Contents &middot;

1. [Getting Started](#getting-started)
2. [Usage](#usage)
   1. [With the CLI](#with-the-cli)
   2. [Cloning the repositorie](#cloning-the-repositorie)
3. [Features](#features)
4. [Folder structure](#folder-structure)
5. [Attribution](#attribution)
6. [License](#lincese)

## Getting Started &middot;

### First install all project dependencies

```
npm install
```
### Compiles and hot-reloads for development

```
npm run start
```
### Compiles and minifies for production

```
npm run build
```
### Lints and fixes files

Get a list of corrections to make
```
npm run lint:list
```
Correct all relevant corrections
```
npm run lint:fix
```

## Usage &middot;

There are two ways to get the project.

### With the CLI

Globally installing the npm module
```
npm i new-spa-bundle -g
```

or

```
npx new-spa-bundle my-app
```

### Cloning the repositorie

```
git clone https://github.com/chjesus/boilerplate-webpack-5.git
```
## Features &middot;

- Hot reloading Handlebars components
- Hot reloading CSS / [SASS](https://sass-lang.com/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Postcss](https://github.com/postcss/postcss)
- [Babel](https://babeljs.io/)
- Include Router Vanilla [NavigoJs v8](https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md)
- [Eslint](https://eslint.org/)
  - Support for Javascript
  - Support for SASS
- [Prettier](https://prettier.io/)
  - Support for Javascript
  - Support for SASS
- [Browserlist](https://github.com/browserslist/browserslist)
- Support for import images
  - svg | png | jpg | jpeg | gif
- Support for import fonts
  - woff | woff2 | eot | ttf | otf
  
## Folder structure &middot;

```
├── .babelrc
├── .browserlistrc
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── webpack.config.js
├── node_modules
├── build
│   ├── static
│   ├── favicon.ico
│   └── index.html
├── config
│   ├── environment.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── assets
    │   ├── fonts
    │   │   └── DIN30640NeuzeitGroteskLTLight.ttf
    │   └── images
    │       └── logo.svg
    ├── components
    ├── controllers
    │   ├── Abstract
    │   │   ├── AbstractView.js
    │   │   └── index.js
    │   └── Home
    │       ├── Home.js
    │       └── index.js
    ├── router
    │   ├── index.js
    │   └── Routes.js
    ├── scss
    │   └── main.scss
    ├── views
    │   ├── about.hbs
    │   └── home.hbs
    └── app.js
```

## Attribution &middot;

This project is heavily inspired by [facebook/react](https://github.com/facebook/react)

## Lincese &middot;

#### [MIT](./LICENSE)

[license]: https://img.shields.io/badge/license-MIT-blue.svg
[npm]: https://img.shields.io/badge/npm-6.14.11-blue
[npm-url]: https://www.npmjs.com/package/new-spa-bundle
[node]: https://img.shields.io/badge/node-%3E%3D12.21.0-brightgreen
[node-url]: https://nodejs.org/es/
[webpack]: https://img.shields.io/badge/wepback-5.68.0-brightgreen
[webpack-url]: https://webpack.js.org/
[webpack-cli]: https://img.shields.io/badge/wepback--cli-4.9.2-brightgreen
[webpack-cli-url]: https://github.com/webpack/webpack-cli
[webpack-dev-server]: https://img.shields.io/badge/webpack--dev--server-4.7.4-brightgreen
[webpack-dev-server-url]: https://github.com/webpack/webpack-dev-server
[handlebars]: https://img.shields.io/badge/handlebars-4.7.7-orange
[handlebars-url]: https://handlebarsjs.com/
[postcss]: https://img.shields.io/badge/postcss-8.4.6-blue
[postcss-url]: https://postcss.org/
[sass]: https://img.shields.io/badge/sass-1.49.8-yellowgreen
[sass-url]: https://sass-lang.com/
[babel]: https://img.shields.io/badge/babel%2Fcore-7.17.2-yellow
[babel-url]: https://babeljs.io/
[autoprefixer]: https://img.shields.io/badge/autoprefixer-10.4.2-yellowgreen
[autoprefixer-url]: https://github.com/postcss/autoprefixer
[navigo]: https://img.shields.io/badge/navigo-5.8.0-yellowgreen
[navigo-url]: https://github.com/krasimir/navigo
