import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import BlogModel from "./blog.js";
import AnnouncementModel from "./announcement.js";

// Define User model
const User = sequelize.define("User", {
  eduEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
    field: "email" // keep DB column compatible if previously named `email`
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "member"
  }
});

// Other models
const Blog = BlogModel(sequelize);
const Announcement = AnnouncementModel(sequelize);

// Associations
User.hasMany(Blog, { foreignKey: "authorId" });
Blog.belongsTo(User, { foreignKey: "authorId" });

User.hasMany(Announcement, { foreignKey: "authorId" });
Announcement.belongsTo(User, { foreignKey: "authorId" });

export default { sequelize, Sequelize, User, Blog, Announcement };
