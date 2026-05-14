import { Router } from 'express';
import { ProjectController } from '../controllers/project.controller';

const router = Router();
const controller = new ProjectController();

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
