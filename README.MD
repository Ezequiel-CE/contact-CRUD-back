# CRUD API

Backend for the contact CRUD app.

## Made with

- [NodeJS](https://nodejs.org/)
- [ExpressJS](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)

## Routes

| ROUTES                    | HTTP   | DESCRIPTION         |
| ------------------------- | ------ | ------------------- |
| /api/contacts             | GET    | Get all contact     |
| /api/contacts             | POST   | Add a contact       |
| /api/contacts/:contact_id | GET    | get a sigle contact |
| /api/contacts/:contact_id | PUT    | Update a contact    |
| /api/contacts/:contact_id | DELETE | Delete a contact    |

## Local execution

```
git clone https://github.com/Ezequiel-CE/contact-CRUD-back.git
cd contact-CRUD-back
npm install
create mysql database
add .env file with the database settings
npm start
```
