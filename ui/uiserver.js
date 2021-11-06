/* Node JS UI Server Script */
/* Using Express v4 */
require('dotenv').config({ path: 'process.env' });  // Environment Variables File Location.

const express = require('express');

const path  = require('path');
const proxy = require('http-proxy-middleware');
// Imports the express module to this script..
const app = express(); // Instantates a server application.

const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT || 'http://localhost:3000/graphql';

const env = { UI_API_ENDPOINT };


const enableHMR = (process.env.ENABLE_HMR || 'true') === 'true';
// Boiler plate code use in all projects.
if (enableHMR && (process.env.NODE_ENV !== 'production')) {
  console.log('Adding dev middlware, enabling HMR');
  /* eslint "global-require": "off" */
  /* eslint "import/no-extraneous-dependencies": "off" */
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');

  const config = require('./webpack.config.js');
  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use('/', express.static('public')); // This middleware tells the server when a request comes make sure it searches for a file in the public directory.

const apiProxyTarget = process.env.API_PROXY_TARGET;
if (apiProxyTarget) {
  app.use('/graphql', proxy({ target: apiProxyTarget }));
}


app.get('/env.js', (req, res) => {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(process.env.UI_PORT || 3001, () => console.log(`🚀 UI Server has started on port [${String(process.env.UI_PORT)}]`));
