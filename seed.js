import Property from "./models/Property.js";
import sequelize from "./config/database.js";

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced successfully!");
  })
  .catch((err) => {
    console.error("Error syncing the database:", err);
  });
const seedProperties = async () => {
  for (let i = 1; i < 4; i++) {
    const newProperty = await Property.create({
      name: `Sample name ${i}`,
      city: `Sample city: ${i}`,
      price: 100000 + i,
      status: "available",
    });
  }
  console.log("Property data seeded successfully");
};
seedProperties();
