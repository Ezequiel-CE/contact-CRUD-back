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
  const results = await pool.query(
    "INSERT INTO contact (name,last_name,phone_number,mail,adress,description) VALUES(?,?,?,?,?,?)",
    [
      data.name,
      data.lastName,
      data.phone,
      data.mail,
      data.adress,
      data.description,
    ]
  );
  const id = results[0].insertId;
  return getSingleContactFromDb(id);
};

module.exports = {
  getContactsFromDb,
  addContactToDb,
  getSingleContactFromDb,
};
