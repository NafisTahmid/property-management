import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({});
// Set up PostgreSQL connection
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
    logging: false,
  }
);

export default sequelize;
