const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./src/database");
const Contact = require("./src/models/contact");

//routes imports

const contactsRoute = require("./src/routes/contacts");

const app = express();

//middleware

app.use(express.json());
app.use(cors());

//routes
app.use("/api/contacts", contactsRoute);

const port = process.env.PORT || 4000;

const init = async () => {
  try {
    await db.authenticate();

    console.log("Connection has been established successfully.");

    await Contact.sync();

    app.listen(port, () => {
      console.log("listen on port " + port);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

init();
