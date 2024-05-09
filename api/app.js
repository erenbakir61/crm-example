const createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const multer = require("multer");
const crypto = require("crypto");
const fs = require("fs");

// Users Kısmına Gelecek İstekleri Router'e Yönlendirme
const usersRouter = require("./src/modules/users/users.routes");

const app = express();
// MongoDB URL Belirleme
const mongoURI = "mongodb://127.0.0.1:27017/users";

// View Engine Kurulumu
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/public", express.static("public"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(helmet());

app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send({ message: "404 route not found" });
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Database connection
mongoose.set("strictQuery", false);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Conntected to Database"));
module.exports = app;
