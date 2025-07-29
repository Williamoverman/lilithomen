import express from 'express';
import killerController from '../controllers/killer-controller.js';

const router = express.Router();

router.get('/', killerController.getAllKillers);

export default router;