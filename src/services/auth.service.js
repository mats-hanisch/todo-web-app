import bcrypt from "bcrypt";

import { MissingCredentialsError, UserAlreadyExistsError, InvalidCredentialsError } from "../errors/auth-errors.js";


export default class AuthService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    
    register = async (email, password) => {
        console.log(email, password);
        if (!email || !password) {
            throw new MissingCredentialsError();
        }
        
        // try to get existing user
        const existingUser = await this.userRepo.findByEmail(email);
        
        if (existingUser) {
            throw new UserAlreadyExistsError();
        }
        
        // hash password
        const PEPPER = process.env.PEPPER_SECRET;
        
        const passwordHash = await bcrypt.hash(password + PEPPER, 12);
        
        // create user
        const user = await this.userRepo.create(email, passwordHash);
        
        return user.id;
    }
    
    login = async (email, password) => {
        console.log(email, password);
        if (!email || !password) {
            throw new MissingCredentialsError();
        }
        
        // try to get user
        const user = await this.userRepo.findByEmail(email);
        
        if (!user) {
            throw new InvalidCredentialsError();
        }
        
        // check password
        const PEPPER = process.env.PEPPER_SECRET;
        
        const passwordValid = await bcrypt.compare(password + PEPPER, user.passwordHash);
        
        if (!passwordValid) {
            throw new InvalidCredentialsError();
        }
        
        return user.id;
    }
}
