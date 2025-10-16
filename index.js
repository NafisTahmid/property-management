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
sequelize
  .authenticate()
  .then(() => console.log("Connected to Database!"))
  .catch((err) => console.error("Unable to connect:", err));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
