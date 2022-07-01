const express = require("express");

const bodyParser = require("body-parser");

const expressHbs = require("express-handlebars");
const app = express();

app.engine("handlebars", expressHbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));

const counterRoutes = require("./routes/counter");
const stopwatchRoutes = require("./routes/stopwatch");
const mainRoutes = require("./routes/main");
app.use(bodyParser.text({ type: "text/plain" }));

app.use(counterRoutes);

app.use(stopwatchRoutes);

app.use(mainRoutes);

app.listen(1000);
