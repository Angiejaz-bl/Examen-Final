import { ProjectRepository } from '../../infrastructure/repositories/project.repository';

const repo = new ProjectRepository();

export class ProjectService {
  getProjects() {
    return repo.findAll();
  }

  getProject(id: number) {
    return repo.findById(id);
  }

  createProject(data: any) {
    return repo.create(data);
  }

  updateProject(id: number, data: any) {
    return repo.update(id, data);
  }

  deleteProject(id: number) {
    return repo.delete(id);
  }
}