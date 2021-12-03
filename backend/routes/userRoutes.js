import express from 'express';
const router = express.Router();
import { authUser, deleteUser, getUserById, getUserProfile, getUsers, registerUser, updateUser, updateUserProfile } from '../controllers/user.js';
import { adminMiddleware, protect } from '../middleware/authMiddleware.js';

router.route('/')
  .post(registerUser)
  .get(protect, adminMiddleware, getUsers)
router.post('/login', authUser);
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route('/:id')
  .delete(protect, adminMiddleware, deleteUser)
  .get(protect, adminMiddleware, getUserById)
  .put(protect, adminMiddleware, updateUser)

export default router;