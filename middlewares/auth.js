import { User } from "../models/usersModel.js";
import Jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(404).json({
      success: false,
      message: "Login First",
    });

  const decodedData = Jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData._id);
  next();
};
