# webpack setup

This will run webpack for your project, providing a local development server and a full dependency graph.

Please add the dist/ folder and it's content to your local or global gitignore, these are build during development end deployment.

## Getting Started

First thing's first, make sure you are running NPM and update all dependencies:

```console
npm install
```

## Build command

Make sure you are connected to your Vagrant box. To build a dist folder to serve your files out of run the following command from the assets folder:

```console
webpack
```

## Local server

Make sure you are connected to your Vagrant box. To simply start the local development server and run the webpack tasks:

```console
npm run dev
```

## Adding dependencies

To add a plug-in, install it through npm:

```console
npm install --save-dev plugin-name
```

and copy a reference to this package in the assets/js/script.js file:

```js
import 'plugin-name';
```

Use the code in your scripts anywhere as the plug-in advices.

## The Result

You can test your local website at the regular development address, it will automatically update the site on changes in your code.
