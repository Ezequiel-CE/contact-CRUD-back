const {
  getContactsFromDb,
  addContactToDb,
  getSingleContactFromDb,
} = require("../database");
const contactValidation = require("../utils/validation");

const getContacts = async (req, res) => {
  try {
    const contacts = await getContactsFromDb();
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    res.status(400).json({ success: false, message: "cant get contacts" });
  }
};

const getSingleContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await getSingleContactFromDb(id);
    res.status(200).json({ success: true, contact });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "cant get single contact" });
  }
};

const saveContact = async (req, res) => {
  const { error, value } = contactValidation(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  try {
    const contact = await addContactToDb(value);
    res.status(200).json({ success: true, contact });
  } catch (error) {
    res.status(400).json({ success: false, message: "cant add contact" });
  }
};

module.exports = {
  getContacts,
  saveContact,
  getSingleContact,
};
