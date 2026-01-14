import { Router } from "express";


export default function mapFrontendTodoRoutes(frontendTodoController) {
    const router = Router();
    
    router.get("/todos", frontendTodoController.todos);
    router.get("/new", frontendTodoController.newTodo);
    
    return router;
}
