import express from 'express';
import { create, get, getAll, remove, update } from '../controller/categories.js'
import { checkPermission } from '../middlewares/checkPermission.js';

const router = express.Router();
router.get("/categories",getAll)
router.get("/categories/:id", get)
router.post("/categories",checkPermission ,create)
router.delete("/categories/:id",checkPermission, remove)
router.patch("/categories/:id",checkPermission, update)

export default router;