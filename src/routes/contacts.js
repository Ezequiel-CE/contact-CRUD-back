const router = require("express").Router();
const contactController = require("../controllers/contacts.controller");

router.get("/", contactController.getContacts);
router.post("/", contactController.saveContact);
router.get("/:id", contactController.getSingleContact);
router.delete("/:id", contactController.deleteContact);
router.put("/:id", contactController.updateContact);

module.exports = router;
