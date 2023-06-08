const Koa = require("koa");
const mongoose = require("mongoose");
const bodyParser = require("koa-bodyparser");
const json = require("koa-json");
const variables = require("./config/variables");
const initDB = require("./config/database");
const router = require("./route");

// connect to DB
initDB();

const app = new Koa();

// middlewares
app.use(json());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const server = app.listen(variables.appPort, () =>
  console.log("Listening on port: " + variables.appPort)
);

module.exports = server;
