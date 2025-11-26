// server/controllers/auth.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../models/index.js";
import JWT_SECRET from "../utils/jwt.js";

const isAmsaAdminEmail = (email) => email?.toLowerCase().endsWith("@amsa.mn");

function makeToken(user) {
  return jwt.sign(
    { id: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
}

export async function signup(req, res) {
  try {
    const { email, password, firstName, lastName } = req.body;
    const eduEmail = email?.toLowerCase().trim();

    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password" });
    }

    const exists = await db.User.findOne({
      where: { eduEmail },
      attributes: ["id", "eduEmail"]
    });
    if (exists) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const role = isAmsaAdminEmail(eduEmail) ? "admin" : "member";

    const user = await db.User.create({
      eduEmail,
      password: hashedPassword,
      firstName,
      lastName,
      role
    });


    const token = makeToken(user);

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user.id,
        email: user.eduEmail,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName
      },
      token
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Signup failed" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password" });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const user = await db.User.findOne({
      where: { eduEmail: normalizedEmail },
      attributes: ["id", "eduEmail", "password", "role", "firstName", "lastName"]
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // safety: auto-upgrade if AMSA email but role not admin yet
    if (isAmsaAdminEmail(user.eduEmail) && user.role !== "admin") {
      user.role = "admin";
      await user.save();
    }

    const token = makeToken(user);

    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.eduEmail,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName
      },
      token
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Login failed" });
  }
}

export async function me(req, res) {
  try {
    const user = await db.User.findByPk(req.user.id, {
      attributes: ["id", "eduEmail", "role", "firstName", "lastName"]
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ user });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to load user" });
  }
}
