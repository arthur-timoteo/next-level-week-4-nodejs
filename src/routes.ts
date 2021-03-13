import { Router } from 'express';
import { UserController } from './controllers/UserConstroller';

const router = Router();

const userController = new UserController();
router.post("/users", userController.create);

export { router };