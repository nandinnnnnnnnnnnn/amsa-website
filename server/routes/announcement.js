import { Router } from "express";
import { body, validationResult } from "express-validator";
import db from "../models/index.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

const r = Router();

const validate = (rules) => [
  ...rules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

// GET /api/announcement -> list all announcements
r.get("/", async (req, res) => {
  try {
    const announcements = await db.Announcement.findAll({
      include: [
        {
          model: db.User,
          attributes: [
            "id",
            "firstName",
            "lastName",
            "eduEmail"
          ]
        }
      ],
      order: [
        ["publishedAt", "DESC"],
        ["createdAt", "DESC"]
      ]
    });
    res.json({ announcements });
  } catch (e) {
    console.error("GET /api/announcements failed:", e?.parent?.sqlMessage || e.message);
    res.status(500).json({ message: "Failed to load announcements", error: e?.parent?.sqlMessage || e.message });
  }
});

// GET /api/announcement/:id -> single announcement
r.get("/:id", async (req, res) => {
  const a = await db.Announcement.findByPk(req.params.id, {
    include: [
      {
        model: db.User,
        attributes: [
          "id",
          "firstName",
          "lastName",
          "eduEmail"
        ]
      }
    ]
  });
  if (!a) return res.status(404).json({ message: "Not found" });
  res.json({ announcement: a });
});

// POST /api/announcement -> create (admin only)
r.post(
  "/",
  requireAuth,
  requireRole("admin"),
  validate([
    body("title").notEmpty().withMessage("Title is required"),
    body("body").notEmpty().withMessage("Body is required"),
    body("publishedAt").optional().isISO8601().toDate()
  ]),
  async (req, res) => {
    const { title, body: text, publishedAt } = req.body;

    const announcement = await db.Announcement.create({
      title,
      body: text,
      publishedAt: publishedAt || new Date(),
      authorId: req.user.id
    });

    res.status(201).json({ announcement });
  }
);

// PUT /api/announcement/:id -> update (admin only)
r.put(
  "/:id",
  requireAuth,
  requireRole("admin"),
  validate([
    body("title").optional().isString(),
    body("body").optional().isString(),
    body("publishedAt").optional().isISO8601().toDate()
  ]),
  async (req, res) => {
    const a = await db.Announcement.findByPk(req.params.id);
    if (!a) return res.status(404).json({ message: "Not found" });

    await a.update(req.body);
    res.json({ announcement: a });
  }
);

// DELETE /api/announcement/:id -> delete (admin only)
r.delete("/:id", requireAuth, requireRole("admin"), async (req, res) => {
  const a = await db.Announcement.findByPk(req.params.id);
  if (!a) return res.status(404).json({ message: "Not found" });
  await a.destroy();
  res.json({ ok: true });
});

export default r;
