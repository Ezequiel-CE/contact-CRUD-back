const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("listado de contactos");
});

module.exports = router;
