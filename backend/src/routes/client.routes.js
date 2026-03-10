import { Router } from "express";
import clientController from "../controllers/client.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.post("/clients", authMiddleware, clientController.create);
router.get("/clients", authMiddleware, clientController.list);
router.get("/clients/:id", authMiddleware, clientController.getById);
router.delete("/clients/:id", authMiddleware, clientController.delete);

export default router;