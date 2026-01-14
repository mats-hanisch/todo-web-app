import UserModel from "../models/user.model.js";


export default class UserRepo {
    constructor() {}
    
    create = async (email, passwordHash) => {
        await UserModel.create({ email, passwordHash });
    }
    
    findById = async (id) => {
        return UserModel.findById(id);
    }
    
    findByEmail = async (email) => {
        return UserModel.findOne({ email });
    }
}
