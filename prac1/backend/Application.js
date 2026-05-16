const express = require("express");
const app = express();
const puerto = 8080;

let ultimoPedido = null;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.post("/api/regalo", (request, response) => {
  ultimoPedido = request.body;
  if(ultimoPedido.envioRapido == null)
    ultimoPedido.envioRapido = 'no';
  console.log(ultimoPedido);
  response.redirect("/pedido.html");
});

app.get("/api/pedido", (request, response) => {
  response.json(ultimoPedido);
});

app.listen(puerto, () => {
  console.log(puerto);
});