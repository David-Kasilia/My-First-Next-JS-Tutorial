const { Pool } = require("pg");

let connection;

if (!connection) {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  connection = pool;
}

module.exports = connection;
