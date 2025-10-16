import Property from "../models/Property.js";
import Joi from "joi";

const createPropertySchema = Joi.object({
  name: Joi.string().min(3).required(),
  city: Joi.string().min(3).required(),
  price: Joi.number().min(3).required(),
  status: Joi.string().min(3).required(),
});

export const createPropertyController = async (req, res) => {
  try {
    const { name, city, price, status } = req.body;
    const joiValidation = createPropertySchema.validate(req.body);
    if (joiValidation.error) {
      return res.status(400).json(joiValidation.error.details[0].message);
    }
    const newProperty = await Property.create({
      name: name,
      city: city,
      price: price,
      status: status,
    });
    res.status(201).json({ message: "Property created", success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

export const getPropertiesController = async (req, res) => {
  try {
    const properties = await Property.findAll();
    if (!properties) {
      return res
        .status(404)
        .json({ message: "No properties found", success: false });
    }
    res.status(200).json({ properties, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};
export const getPropertyController = async (req, res) => {
  try {
    const property = await Property.findByPk(req.params.id);
    if (!property) {
      return res
        .status(404)
        .json({ message: "Property not found", success: false });
    }
    res.status(200).json({ property, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

export const updatePropertyController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, city, price, status } = req.body;
    const property = await Property.findByPk(id);
    if (!property) {
      return res
        .status(404)
        .json({ message: "Property not found!", success: false });
    }
    const updatedProperty = await property.update({
      name: name || property.name,
      city: city || property.city,
      price: price || property.price,
      status: status || property.status,
    });
    res
      .status(200)
      .json({ message: "Property updated successfully", success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};
export const deletePropertyController = async (req, res) => {
  try {
    const result = await Property.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (result > 0) {
      res
        .status(200)
        .json({ message: "Property destroyed successfully", success: true });
    } else {
      res.status(404).json({ message: "Property not found!", success: false });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};
