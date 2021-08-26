const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const ejs = require("ejs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Ejs Config */
app.set("view-engine", ejs);

/* Asstets Folder open (Public) */
app.use(express.static("assets"));

// app.set('trust proxy', 1)
app.use(
  session({
    secret:
      process.env.SESSION_SECRET_KEY ||
      require("crypto").randomBytes(64).toString("hex"),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

const IndexRooutes = require("./routes/index");

mongoose.connect(
  process.env.MONGODB_STRING || "mongodb://localhost:27017/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/", IndexRooutes);

// Listen
app.listen(process.env.PORT || 1881);
