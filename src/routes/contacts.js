const router = require("express").Router();
const contactController = require("../controllers/contacts.controller");

router.get("/", contactController.getContacts);
router.post("/", contactController.saveContact);

module.exports = router;
