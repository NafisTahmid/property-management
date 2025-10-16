import User from "../models/User.js";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import Joi from "joi";
import authMiddleware from "../middlewares/auth.js";

dotenv.config({});

const createUserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const joiValidation = createUserSchema.validate(req.body);
    if (joiValidation.error) {
      return res.status(400).json(joiValidation.error.details[0].message);
    }
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      return res
        .status(401)
        .json({ message: "User already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = generateToken({ _id: newUser._id, username: username });
    return res.status(201).json({ token, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong!!!", success: false });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email: email } });

    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "Account not found!", success: false });
    } else {
      const comparedPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!comparedPassword) {
        return res
          .status(403)
          .json({ message: "Incorrect password", success: false });
      } else {
        const token = generateToken({
          _id: existingUser._id,
          username: existingUser.username,
        });
        return res.status(200).json({ token, success: true });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

export const getAllUsersController = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();

    // Send the users data in the response
    return res.status(200).json({ users, success: true });
  } catch (error) {
    // Handle any errors that occur during the query
    console.error(error);
    return res
      .status(500)
      .json({ message: "Something went wrong!", success: false });
  }
};
const generateToken = (data) => {
  return jsonwebtoken.sign(data, process.env.JWT_SECRET, { expiresIn: "2d" });
};
