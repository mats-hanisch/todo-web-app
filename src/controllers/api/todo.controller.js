import { AppError } from "../../errors/app-errors.js";


export default class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    
    postTodo = async (req, res) => {
        try {
            const { text } = req.body ?? {};
            
            await this.todoService.createNewTodo(req.session.userId, text);
            
            return res.sendStatus(204);
        }
        catch (err) {
            console.warn(err);
            if (err instanceof AppError) {
                res.status(err.status).json({ error: err.message });
            }
            else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    }
    
    deleteTodo = async (req, res) => {
        try {
            const todoId = req.params.id;
            
            await this.todoService.deleteTodo(req.session.userId, todoId);
            
            return res.sendStatus(204);
        }
        catch (err) {
            console.log(err);
            if (err instanceof AppError) {
                res.status(err.status).json({ error: err.message });
            }
            else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    }
}
