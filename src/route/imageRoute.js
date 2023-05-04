import express from 'express';
import { searchImage, searchImageCategory } from '../controller/imageController.js';

const router = express.Router();

router.get('/images/category/:category', searchImageCategory);
router.get('/images/search/:query', searchImage);

export default router;
