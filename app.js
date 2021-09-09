const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));


// routes
const indexRoute = require("./routes/index");

app.use("/", indexRoute);

app.use("/auth", indexRoute);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("Server is running on " + PORT + " ..."));


