import { Request, Response } from 'express';
import { ProjectService } from '../../domain/Services/project.service';

const service = new ProjectService();

export class ProjectController {
  async getAll(req: Request, res: Response) {
    res.json(await service.getProjects());
  }

  async create(req: Request, res: Response) {
    res.json(await service.createProject(req.body));
  }

  async getById(req: Request, res: Response) {
    res.json(await service.getProject(Number(req.params.id)));
  }

  async update(req: Request, res: Response) {
    await service.updateProject(Number(req.params.id), req.body);
    res.json({ message: 'updated' });
  }

  async delete(req: Request, res: Response) {
    await service.deleteProject(Number(req.params.id));
    res.json({ message: 'deleted' });
  }
}