import express from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/product.js';
const router = express.Router();
import { protect, adminMiddleware } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts)
  .post(protect, adminMiddleware, createProduct)
router.route('/:id').get(getProductById)
  .delete(protect, adminMiddleware, deleteProduct)
  .put(protect, adminMiddleware, updateProduct)

export default router;