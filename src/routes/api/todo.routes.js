import { Router } from "express";


export default function mapTodoRoutes(todoController) {
    const router = Router();
    
    router.post("/todo", todoController.postTodo);
    router.delete("/todo", todoController.deleteTodo);
    
    return router;
}
