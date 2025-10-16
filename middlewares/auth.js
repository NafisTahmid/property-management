import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";
dotenv.config({});
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "You're not authenticated!" });
  }
  try {
    const token = authHeader.split(" ")[1];
    const decodedUser = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    req.user = decodedUser;
    req.token = token;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid token!" });
  }
};
export default authMiddleware;
