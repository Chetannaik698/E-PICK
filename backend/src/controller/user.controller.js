import userModel from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const isAlreadyExists = await userModel.findOne({ email });

    if (isAlreadyExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("user_token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to Register User",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user || user.role !== "user") {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("user_token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to Login User",
      error: error.message,
    });
  }
};

export const logoutUser = async (req, res) => {
  res.clearCookie("user_token");
  res.status(200).json({
    message: "User logged out successfully",
  });
};

export const getMe = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await userModel.findOne({ email, role: "admin" });

    if (!admin) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("admin_token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    return res.status(200).json({
      message: "Admin logged in successfully",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const logoutAdmin = async (req, res) => {
  try {
    res.clearCookie("admin_token");

    res.status(200).json({
      message: "Admin logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};
