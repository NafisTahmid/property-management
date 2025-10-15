import express from "express";
import sequelize from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/user", userRoutes);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synced successfully!");
  })
  .catch((err) => {
    console.error("Error syncing the database:", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
