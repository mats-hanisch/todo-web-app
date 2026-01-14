import { Router } from "express";


export default function mapAuthRoutes(authController) {
    const router = Router();
    
    router.post("/register", authController.register);
    router.post("/login", authController.login);
    
    return router;
}
