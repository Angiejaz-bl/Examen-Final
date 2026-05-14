import { Sequelize } from 'sequelize-typescript';
import { Project } from '../models/project.model';
import { Task } from '../models/task.model';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize({
  dialect: 'mssql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  models: [Project, Task],

  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  },

  logging: false
});