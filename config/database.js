// import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
// dotenv.config({});

// const sequelize = new Sequelize(
//   process.env.DATABASE_NAME,
//   process.env.DATABASE_USERNAME,
//   process.env.DATABASE_PASSWORD,
//   {
//     host: process.env.HOST,
//     dialect: "postgres",
//     logging: false,
//   }
// );

// export default sequelize;
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({});

// Use environment variable
const connectionString = process.env.DATABASE_URL;

const sequelize = new Sequelize(connectionString, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // Enforce SSL
      rejectUnauthorized: false, // Sometimes needed, depending on provider
    },
  },
  logging: false,
});

export default sequelize;
