import express from 'express';
import { getMessages, sendMesaage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/:id', protectRoute, getMessages );
router.post('/send/:id', protectRoute, sendMesaage );

export default router;