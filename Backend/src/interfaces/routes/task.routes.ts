import { Router } from 'express';
import { TaskController } from '../controllers/task.controller';

const router = Router();
const controller = new TaskController();

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/project/:projectId', controller.getByProject);
router.get('/status/:status', controller.getByStatus);
router.put('/:id', controller.update);
router.patch('/:id/status', controller.changeStatus);
router.delete('/:id', controller.delete);

export default router;