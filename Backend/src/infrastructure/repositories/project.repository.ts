import { Project } from '../models/project.model';

export class ProjectRepository {
  findAll() {
    return Project.findAll();
  }

  findById(id: number) {
    return Project.findByPk(id);
  }

  create(data: any) {
    return Project.create(data);
  }

  update(id: number, data: any) {
    return Project.update(data, { where: { id } });
  }

  delete(id: number) {
    return Project.destroy({ where: { id } });
  }
}