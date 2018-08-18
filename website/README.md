This directory contains the source for [react-library-boilerplate-docs](http://www.rd.bbc.co.uk/zap/react-library-boilerplate-docs/). The website was created using [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript).

This directory can be used to test `your-react-library` locally and, for open-source projects, it can be used to serve documentation.

## Local development

To run this site locally, first make sure you have `yarn` (or `npm`) linked `your-react-library` (see: [README](../README.md)). Then run the `yarn` (or `npm`) "start" command in the project root to watch for changes to `your-react-library`:

```sh
 cd /local/path/to/your-react-library
 yarn start
```

Finally, run the `yarn` (or `npm`) "start" command from this directory to run the local webserver:

```sh
 cd /local/path/to/your-react-library/website
 yarn start
```

## Pre-deployment checks

Before publishing the site live using [Zap](https://github.com/bbc/zap-cli), make sure to have updated the relevant fields in `package.json`, paying particular attention to: `name`, `description` & `homepage`.

## Deployment

To deploy this website to `Zap`, use the `yarn` (or `npm`) "deploy" command from this directory:
 created), you will need to be on the BBC rd_wifi network.

```sh
 cd /local/path/to/react-window/website
 yarn deploy
```
