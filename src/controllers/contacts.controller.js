const {
  getContactsFromDb,
  addContactToDb,
  getSingleContactFromDb,
  deleteContactFromDb,
  updateContactFromDb,
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
  const id = Number(req.params.id);
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

const deleteContact = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const deleteStatus = await deleteContactFromDb(id);
    res.status(200).json({ success: true, deleteStatus });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

const updateContact = async (req, res) => {
  const { error, value } = contactValidation(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }
  const id = Number(req.params.id);

  try {
    const updateContact = await updateContactFromDb(id, value);
    res
      .status(200)
      .json({
        success: true,
        message: `contact with id ${id} was updated`,
        updateContact,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: "cant update contact" });
  }
};

module.exports = {
  getContacts,
  saveContact,
  getSingleContact,
  deleteContact,
  updateContact,
};
