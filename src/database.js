const mysql = require("mysql2");

//adding connection to database

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

const getContactsFromDb = async () => {
  const results = await pool.query("SELECT * FROM contact");
  const contacts = results[0];
  return contacts;
};

const getSingleContactFromDb = async (id) => {
  const results = await pool.query("SELECT * FROM contact WHERE id = ?", [id]);
  const contact = results[0];
  return contact;
};

const addContactToDb = async (data) => {
  const { name, lastName, phone, mail, adress, description } = data;

  const results = await pool.query(
    "INSERT INTO contact (name,last_name,phone_number,mail,adress,description) VALUES(?,?,?,?,?,?)",
    [name, lastName, phone, mail, adress, description]
  );
  const id = results[0].insertId;
  return getSingleContactFromDb(id);
};

const deleteContactFromDb = async (id) => {
  const result = await pool.query("DELETE FROM contact  WHERE id = ?", [id]);
  const info = result[0];

  return info.affectedRows === 0
    ? {
        delete: false,
        message: `contact whith id ${id} was already deleted`,
      }
    : {
        delete: true,
        message: `contact whith id ${id} was deleted`,
      };
};

const updateContactFromDb = async (id, newData) => {
  const { name, lastName, phone, mail, adress, description } = newData;
  await pool.query(
    "UPDATE contact SET name = ?,last_name = ?,phone_number = ?,mail = ?,adress = ?,description = ? WHERE id = ?",
    [name, lastName, phone, mail, adress, description, id]
  );

  return getSingleContactFromDb(id);
};

module.exports = {
  getContactsFromDb,
  addContactToDb,
  getSingleContactFromDb,
  deleteContactFromDb,
  updateContactFromDb,
};
