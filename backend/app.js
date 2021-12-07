var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var followersRouter = require("./routes/followers");
var reservationsRouter = require("./routes/reservations");

var app = express();
var cors = require("cors");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/followers", followersRouter);
app.use("/reservations", reservationsRouter);

module.exports = app;
