import express from "express";
import sequelize from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/", propertyRoutes);
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("Database synced successfully!");
//   })
//   .catch((err) => {
//     console.error("Error syncing the database:", err);
//   });
const boot = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to Database!");

    // Dev-only: create/update tables in Neon
    await sequelize.sync({ alter: true });
    console.log("Schema synced");

    app.listen(port, () => console.log(`Server is running on port: ${port}`));
  } catch (err) {
    console.error("Boot failure:", err);
    process.exit(1);
  }
};
boot();
