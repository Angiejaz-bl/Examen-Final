import express from 'express';
import cors from 'cors';

import projectRoutes from './interfaces/routes/project.routes';
import taskRoutes from './interfaces/routes/task.routes';
import { sequelize } from './infrastructure/database/sequelize';

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado a SQL Server');

    await sequelize.sync();
    console.log('Tablas sincronizadas');
  } catch (error) {
    console.error('Error DB:', error);
  }
};

export default app;