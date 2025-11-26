import dotenv from "dotenv"; 
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import db from "./models/index.js";
import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blogs.js";
import announcementRoutes from "./routes/announcement.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/announcements", announcementRoutes);

// Health check
app.get("/api/health", (_req, res) => res.json({ ok: true }));

const PORT = Number(process.env.PORT || 4000);

(async () => {
  try {
    await db.sequelize.authenticate();
    // In non-production, auto-sync schema to add missing columns (e.g., authorId)
    const syncOptions = process.env.NODE_ENV === "production" ? {} : { alter: true };
    await db.sequelize.sync(syncOptions);
    console.log("DB connected (sync options:", syncOptions, ")");
  } catch (err) {
    console.log("Skipping DB (not connected)");
    console.error(err);
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
