import { TaskRepository } from '../../infrastructure/repositories/task.repository';

const repo = new TaskRepository();

export class TaskService {
  getTasks() {
    return repo.findAll();
  }

  getByProject(projectId: number) {
    return repo.findByProject(projectId);
  }

  getByStatus(status: string) {
    return repo.findByStatus(status);
  }

  createTask(data: any) {
    return repo.create(data);
  }

  updateTask(id: number, data: any) {
    return repo.update(id, data);
  }

  changeStatus(id: number, status: string) {
    return repo.updateStatus(id, status);
  }

  deleteTask(id: number) {
    return repo.delete(id);
  }
}