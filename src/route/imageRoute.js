import express from 'express';
import { getAllImage, searchImage } from '../controller/imageController.js';

const router = express.Router();

router.get('/', getAllImage);
router.get('/images', searchImage);

export default router;
