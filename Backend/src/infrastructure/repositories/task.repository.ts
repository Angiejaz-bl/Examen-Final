import { Task } from '../models/task.model';

export class TaskRepository {
  findAll() {
    return Task.findAll();
  }

  findByProject(projectId: number) {
    return Task.findAll({ where: { project_id: projectId } });
  }

  findByStatus(status: string) {
    return Task.findAll({ where: { status } });
  }

  create(data: any) {
    return Task.create(data);
  }

  update(id: number, data: any) {
    return Task.update(data, { where: { id } });
  }

  updateStatus(id: number, status: string) {
    return Task.update({ status }, { where: { id } });
  }

  delete(id: number) {
    return Task.destroy({ where: { id } });
  }
}