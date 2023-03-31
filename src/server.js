const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/connectDB");
const cors = require("cors");
const { server } = require("./config/loadenv");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();
// Routes
app.use("/api", require("./routes/user.routes"));

app.listen(server.port || 3000, () => {
  console.log("Server running on port 9999");
});
