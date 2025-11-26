import { DataTypes } from "sequelize";

const Announcement = (sequelize) =>
  sequelize.define("Announcement", {
    title: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.TEXT, allowNull: false },
    publishedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    authorId: { type: DataTypes.INTEGER, allowNull: true }
  });

export default Announcement;
