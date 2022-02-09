// Packages initializations

const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const cors = require("cors");

const postRoutes = require("./routes/posts");

require("dotenv").config();

const app = express();

// 3rd party middlewares for body parser and cors

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));

// Here limit = 30 mb becoz we have to upload the files

app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

app.use(cors());

// Port

const PORT = process.env.PORT || 5000;

// connecting server to mongodb database cloud atlas

// the above settings are set to true to undergo connections

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));

// Routes

app.use("/posts", postRoutes);
