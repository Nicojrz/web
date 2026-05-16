const express = require("express");
const app = express();
const puerto = 8080;

let lastform = null;

app.use(express.static('static'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.post("/api/registro", (request, response) => {
  lastform = request.body;
  console.log(lastform);
  response.redirect("/datos.html");
});

app.get("/api/datos", (request, response) => {
  response.json(lastform);
});

app.listen(puerto, () => {
  console.log(puerto);
});