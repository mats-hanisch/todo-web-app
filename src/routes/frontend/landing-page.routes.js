import { Router } from "express";


export default function mapLandingPageRoutes(landingPageController) {
    const router = Router();
    
    router.get("/", landingPageController.landingPage);
    
    return router;
}
