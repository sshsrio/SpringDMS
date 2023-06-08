const mongoose = require("mongoose");
const variables = require("./variables");

const initDB = async () => {
  try {
    // console.log(variables.mongoDbUrl);
    await mongoose.connect(variables.mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error connecting to DB", err);
  }
};

module.exports = initDB;
