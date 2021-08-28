const express = require("express");
const mongoose = require("mongoose");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const TestRouter = require("./routes/test");

mongoose.connect(process.env.MONGODB || "mongodb://localhost:27017/fribe-cli", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Test router
app.use("/", TestRouter);

// Listen
app.listen(process.env.PORT || 8080);
