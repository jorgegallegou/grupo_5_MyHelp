const env = require('dotenv')

module.exports = {
  "development": {
    "username": procces.env.DB_USER,
    "password": procces.env.DB_PASS,
    "database": procces.env.DB_NAME,
    "port": procces.env.DB_PORT,
    "host": procces.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
