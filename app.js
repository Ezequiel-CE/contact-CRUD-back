const express = require("express");
const cors = require("cors");
require("dotenv").config();

//routes imports

const contactsRoute = require("./src/routes/contacts");

const app = express();

//middleware

app.use(express.json());
app.use(cors());

//routes
app.use("/api/contacts", contactsRoute);

app.listen(4000, () => {
  console.log("listen on port 4000");
});
