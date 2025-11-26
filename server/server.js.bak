import sequelize from './config/database.js';
import express from "express";
import userRoutes from "./routes/user.js";

sequelize.authenticate()
  .then(() => {
    console.log('Database connected!');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
  
 const app = express();
 

