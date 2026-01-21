
export default class TodoService {
    constructor(todoRepo) {
        this.todoRepo = todoRepo;
    }
    
    createNewTodo = async (userId, text) => {
        await this.todoRepo.create(userId, text);
    }
    
    getTodosForUser = async (userId) => {
        const todos = await this.todoRepo.findByUser(userId);
        
        return todos.map(todo => ({
            id: todo._id.toString(),
            text: todo.text
        }));
    }
    
    deleteTodo = async (userId, todoId) => {
        await this.todoRepo.delete(userId, todoId);
    }
}
