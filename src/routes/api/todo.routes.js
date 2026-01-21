import { Router } from "express";


export default function mapTodoRoutes(todoController) {
    const router = Router();
    
    router.post("/", todoController.postTodo);
    router.delete("/:id", todoController.deleteTodo);
    
    return router;
}
