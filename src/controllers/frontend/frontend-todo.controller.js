import htmlrl from "../../utils/html-renderer.js"

import { AppError } from "../../errors/app-errors.js";


export default class FrontendTodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    
    todos = async (req, res) => {
        try {
            const todos = await this.todoService.getTodosForUser(req.session.userId);
            const topTodo = todos[0];
            
            if (!topTodo) {
                // no todos yet - let user create one
                return res.redirect("/new");
            }
            
            res.set("Content-Type", "text/html");
            res.send(await htmlrl.renderAsync("todos.html", {
                todos: JSON.stringify(todos),
                topTodoText: topTodo.text
            }));
        } catch (err) {
            if (err instanceof AppError) {
                res.status(err.status).json({ error: err.message });
            }
            else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    }
    
    newTodo = async (req, res) => {
        try {
            res.set("Content-Type", "text/html");
            res.send(await htmlrl.renderAsync("new.html", {}));
        }
        catch (err) {
            if (err instanceof AppError) {
                res.status(err.status).json({ error: err.message });
            }
            else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    }
}
