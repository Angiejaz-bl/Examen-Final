import { Request, Response } from 'express';
import { TaskService } from '../../domain/Services/task.service';

const service = new TaskService();

export class TaskController {
  async getAll(req: Request, res: Response) {
    res.json(await service.getTasks());
  }

  async getByProject(req: Request, res: Response) {
    res.json(await service.getByProject(Number(req.params.projectId)));
  }

  async getByStatus(req: Request, res: Response) {
    res.json(await service.getByStatus(req.params.status as string));
  }

  async create(req: Request, res: Response) {
    res.json(await service.createTask(req.body));
  }

  async update(req: Request, res: Response) {
    await service.updateTask(Number(req.params.id), req.body);
    res.json({ message: 'updated' });
  }

  async changeStatus(req: Request, res: Response) {
    await service.changeStatus(Number(req.params.id), req.body.status);
    res.json({ message: 'status updated' });
  }

  async delete(req: Request, res: Response) {
    await service.deleteTask(Number(req.params.id));
    res.json({ message: 'deleted' });
  }
}