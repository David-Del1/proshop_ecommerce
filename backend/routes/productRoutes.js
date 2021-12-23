import express from 'express';
import { deleteProduct, getProductById, getProducts } from '../controllers/product.js';
const router = express.Router();
import { protect, adminMiddleware } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById)
  .delete(protect, adminMiddleware, deleteProduct)

export default router;