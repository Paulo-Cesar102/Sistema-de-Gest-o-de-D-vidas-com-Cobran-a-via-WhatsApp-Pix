    import express from "express";
    import userController from "../controllers/user.controller.js";
    import authMiddleware from "../middleware/auth.middleware.js";

    const router = express.Router();

    router.post("/register", userController.register);
    router.post("/login", userController.login);
    router.get("/profile", authMiddleware, userController.getProfile);

    export default router;