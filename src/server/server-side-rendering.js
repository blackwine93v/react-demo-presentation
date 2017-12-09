import "ignore-styles";

import express from "express";
import { renderToString } from "react-dom/server";
import fs from "fs";
import path from "path";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { StaticRouter } from "react-router";
import reducer from "../reducer";
import { Provider } from "react-redux";

import App from "../App.js";
const app = express();

app.use("/static", express.static("build/static"));

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  // Create a new Redux store instance
  let store = createStore(reducer);
  let context = {};
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    renderFullPage(html, preloadedState, function(fullHTML) {
      res.send(fullHTML);
    });
  }
}

function renderFullPage(appString, preloadedState, callback) {
  fs.readFile(
    path.resolve(__dirname, "../../build/index.html"),
    "utf8",
    (er, html) => {
      if (er) return res.send(er.message);

      html = html.replace(
        `<div id="root"></div>`,
        `<div id="root">${appString}</div>
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          "\\u003c"
        )}
      </script>
        `
      );

      html = html.replace(
        `<title>React App</title>`,
        `<title>Server side rendering</title>`
      );

      callback(html);
    }
  );
}

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
