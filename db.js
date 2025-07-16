require("dotenv").config();
const sql = require("mssql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: false,
  },
};

const pool = new sql.ConnectionPool(config);
pool.connect().then(() => {
  console.log("Conectado ao Azure SQL!");
}).catch(err => {
  console.error("Erro de conexão:", err);
});

module.exports = pool;
