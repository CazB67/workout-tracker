let express = require("express");
let app = express();
const PORT = process.env.PORT || 3000;
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
//const test = require("./seeders/seed.js");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });