import express from 'express';
import path from 'path';
import compression from 'compression';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './modules/routes';

var app = express();
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) return res.status(500).send(err.message);
    if (redirect) return res.redirect(redirect.pathname + redirect.search);
    if (props) return res.send(renderPage(renderToString(<RouterContext {...props}/>)));
    res.status(404).send('Not Found');
  });
});

function renderPage(appHtml) {
  return `<!doctype html public="storage">
<html>
  <head>
    <meta charset="utf-8"/>
    <title>DIPPAM | Documenting Ireland: Parliament, People and Migration</title>
    <link rel=stylesheet href="/index.css">
  </head>
  <body>
    <div id="app">${appHtml}</div>
    <script src="/bundle.js"></script>
  </body>
</html>`;
}

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});
