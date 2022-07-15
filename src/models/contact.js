const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Contact = sequelize.define("Contact", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: { type: DataTypes.TEXT, allowNull: true },
  imageUrl: { type: DataTypes.TEXT, allowNull: true },
});

module.exports = Contact;
