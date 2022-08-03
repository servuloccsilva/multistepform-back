import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection: Knex = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true,
  },
});

// connection
//   .raw(
//     `
//     CREATE TABLE IF NOT EXISTS MULTISTEPFORM (
//         id INT PRIMARY KEY AUTO_INCREMENT,
//         name VARCHAR(255)  NOT NULL,
//          VARCHAR(255)  NOT NULL,
//         participation INT NOT NULL
//     );
// `
//   )
//   .then(console.log)
//   .catch(console.log);
