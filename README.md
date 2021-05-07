# Webpack Boilerplate - Single Page Application

## Features

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

## Commands

### Installation

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

```
npm run lint:list

npm run lint:fix
```

## Folder structure

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
    │   └── nav.hbs
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
