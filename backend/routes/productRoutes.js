import express from 'express';
import { getProductById, getProducts } from '../controllers/product.js';
const router = express.Router();

router.route('/').get(getProducts);

// @desc    Fetch single products
// @route   GET /api/products
// @access  Public
router.route('/:id').get(getProductById)

export default router;