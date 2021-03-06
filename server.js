let express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const db = require("./models");
let app = express();
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

