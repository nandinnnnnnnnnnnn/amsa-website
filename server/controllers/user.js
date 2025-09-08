import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Users } from "../models/user.js"; 
import dotenv from "dotenv";
dotenv.config();

export const signupMember = async (req, res) => {
  try {
    const {
      eduMail,
      password,
      firstName,
      lastName,
      personalEmail,
      phoneNumber,
      birthDate,
      address,
      address2,
      city,
      state,
      zipCode,
      school,
      schoolCity,
      schoolState,
      graduationYear,
      schoolYear,
      major,
      secondMajor,
      facebookLink,
      instagramLink,
      linkedinLink,
    } = req.body;

    const existingUser = await Users.findOne({ where: { eduMail } });
    if (existingUser) return res.status(400).json({ message: "Email already in use" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await Users.create({
      eduMail,
      password: hashedPassword,
      firstName,
      lastName,
      personalEmail,
      phoneNumber,
      birthDate,
      address,
      address2,
      city,
      state,
      zipCode,
      school,
      schoolCity,
      schoolState,
      graduationYear,
      schoolYear,
      major,
      secondMajor,
      facebookLink,
      instagramLink,
      linkedinLink,
    });

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ user: newUser, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  }
};

export const login = async (req, res) => {
  try {
    const { eduMail, password } = req.body;
    const user = await Users.findOne({ where: { eduMail } });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

export const getUserInfo = async (req, res) => {
  try {
    const user = await Users.findByPk(req.user.id); // req.user injected by checkAuth
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user info" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    await Users.update(req.body, { where: { id: req.user.id } });
    const updatedUser = await Users.findByPk(req.user.id);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Failed to update profile" });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    await Users.destroy({ where: { id: req.user.id } });
    res.status(200).json({ message: "Account deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete account" });
  }
};
