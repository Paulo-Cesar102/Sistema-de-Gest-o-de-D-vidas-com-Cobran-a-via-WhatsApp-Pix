import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", (req, res) => userController.register(req, res));
router.post("/login", (req, res) => userController.login(req, res));

export default router;