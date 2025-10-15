// import { Client } from "pg";

// const client = new Client({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "1234",
//   database: "property-management",
// });

// client
//   .connect()
//   .then(() => {
//     console.log("Connected to the PostgreSQL database");
//   })
//   .catch((err) => {
//     console.error("Error connecting to the database", err);
//   });

// export default client;
import { Sequelize } from "sequelize";

// Set up PostgreSQL connection
const sequelize = new Sequelize("property-management", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default sequelize;
