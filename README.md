# Example Application for s2i-nodejs-nginx

An example static web application that contains scripts to simplify deployment
on OpenShift as an NGINX container.

This application uses the following libraries/tools, but you can replace them
with your preferred stack:

* React
* Tailwind CSS
* TypeScript
* Webpack
* npm

## Build & Run Locally

First install dependencies:

```bash
# install dependencies
npm install

# run in hot module reloading mode
npm start
```

## Create a Production Bundle

This will generate a bundle of production optimised static assets in a *dist/*
directory in the project folder:

```bash
npm run build
```

## Create a Development Bundle

This will generate a bundle of static assets in a *dist/* directory in the
project folder:

```bash
npm run build:dev
```

## Create an NGINX Container Image

Uses [source-to-image (s2i)](https://github.com/openshift/source-to-image) to
create an NGINX container image that serves the application assets. It relies
on the `npm build` (alias for `npm run build`) command to create a *dist/*
folder that contains all the static assets for the application, i.e HTML, CSS,
JavaScript, and binary files.

You need to
[install s2i](https://github.com/openshift/source-to-image#installation) and
[Docker](https://docs.docker.com/get-docker/) before running the commands
below to generate a container image.

Once s2i is installed, create a build with the following command:

```bash
# use the s2i-nodejs-nginx image with Node.js 14 to build this appplication
# into a deployable NGINX container image named
s2i build -c . quay.io/evanshortiss/s2i-nodejs-nginx:14 s2i-nodejs-nginx-example
```

Alternatively use this shorthand command:

```bash
npm run docker:build
```

## Run the NGINX Container Image

```bash
docker run -p 8080:8080 s2i-nodejs-nginx-example
```

## Credits

* Initial project structure was generated using [createapp.dev](https://createapp.dev/)
* Star Wars icons created by Symbolicons. The icon set can be found [here](https://www.iconfinder.com/search/?q=designer%3Asensibleworld%20star%20wars&from=profile%20preview).
