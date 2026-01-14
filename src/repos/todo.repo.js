import TodoModel from "../models/todo.model.js";


export default class TodoRepo {
    constructor() {}
    
    create = async (userId, text) => {
        await TodoModel.create({ text: text, user: userId });
    }
    
    findByUser = async (userId) => {
        return await TodoModel.find({ user: userId }).sort({ createdAt: -1 });
    }
    
    delete = async (userId, todoId) => {
        return await TodoModel.findOneAndDelete({ _id: todoId, user: userId });
    }
}
