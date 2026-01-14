import { Router } from "express";


export default function mapFrontendAuthRoutes(frontendAuthController) {
    const router = Router();
    
    router.get("/signup", frontendAuthController.signup);
    router.get("/signin", frontendAuthController.signin);
    
    return router;
}
