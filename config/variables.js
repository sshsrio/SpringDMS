require("dotenv").config();

const appPort = process.env.APP_PORT;
const mongoDbUrl = process.env.MONGODB_CONN_STRING;

const variables = {
  appPort,
  mongoDbUrl,
};

module.exports = variables;
