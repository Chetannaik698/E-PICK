import jwt from "jsonwebtoken";
import userModel from "../models/User.model.js";

export const protect = async (req, res, next) => {
  const token = req.cookies.user_token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id).select("-password");

    if (!user || user.role !== "user") {
      return res.status(401).json({ message: "Not authorized" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized" });
  }
};

export const adminOnly = async (req, res, next) => {
  const token = req.cookies.admin_token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Admins only" });
    }

    const admin = await userModel.findById(decoded.id).select("-password");

    if (!admin) {
      return res.status(401).json({ message: "Not authorized" });
    }

    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized" });
  }
};
