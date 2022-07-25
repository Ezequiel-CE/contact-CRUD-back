const Contact = require("../models/contact");
const contactValidation = require("../utils/validation");

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll({
      attributes: ["id", "firstName", "lastName", "imageUrl"],
    });
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    res.status(400).json({ success: false, message: "cant get contacts" });
  }
};

const getSingleContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByPk(id);

    if (!contact) {
      return res
        .status(400)
        .json({ success: false, message: "contact dont exist" });
    }
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
    const contact = await Contact.create({
      firstName: value.firstName,
      lastName: value.lastName,
      phoneNumber: value.phoneNumber,
      mail: value.mail,
      adress: value.adress,
      description: value.description,
      imageUrl: value.imageUrl,
    });
    res.status(200).json({ success: true, contact });
  } catch (err) {
    res.status(400).json({ success: false, message: "cant add contact" });
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    await Contact.destroy({ where: { id: id } });
    res
      .status(200)
      .json({ success: true, message: "contact deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: "cant delete contact" });
  }
};

const updateContact = async (req, res) => {
  const { error, value } = contactValidation(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  const { id } = req.params;

  try {
    await Contact.update(
      {
        firstName: value.firstName,
        lastName: value.lastName,
        phoneNumber: value.phone,
        mail: value.mail,
        adress: value.adress,
        description: value.description,
        imageUrl: value.imageUrl,
      },
      { where: { id } }
    );
    res.status(200).json({
      success: true,
      message: `contact with id ${id} was updated`,
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
