'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    personalEmail: DataTypes.STRING,
    facebook: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    instagram: DataTypes.STRING,
    acceptanceStatus: DataTypes.STRING,
    schoolYear: DataTypes.STRING,
    schoolState: DataTypes.STRING,
    schoolCity: DataTypes.STRING,
    degreeLevel: DataTypes.STRING,
    graduationYear: DataTypes.STRING,
    major: DataTypes.STRING,
    major2: DataTypes.STRING,
    schoolName: DataTypes.STRING,
    hash: DataTypes.STRING,
    hashExpiresAt: DataTypes.DATE,
    emailVerified: DataTypes.TINYINT,
    level: DataTypes.INTEGER,
    bio: DataTypes.TEXT,
    profilePic: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post);
    User.hasMany(models.Role);
    User.hasMany(models.Comment);
    User.hasMany(models.Like);
    User.hasMany(models.UsersBadges);
  };
  return User;
};
