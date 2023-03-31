const mongoose = require("mongoose");
const { db }  = require("./loadenv");

const mongoURL = `mongodb://${db.MONGO_USER}:${db.MONGO_PASSWORD}@${db.MONGO_IP}:${db.MONGO_PORT}/?authSource=admin`;

const connectDB = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("succesfully connected to DB"))
    .catch((e) => {
      console.log(e);

    });
};


module.exports = connectDB;
