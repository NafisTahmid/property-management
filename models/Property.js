import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Property = sequelize.define(
  "Property",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true,
        min: 0,
      },
    },
    status: {
      type: DataTypes.ENUM("available", "sold"),
      allowNull: false,
      validate: {
        isIn: [["available", "sold"]],
      },
    },
  },
  {
    timestamps: true,
    tableName: "properties",
  }
);

export default Property;
