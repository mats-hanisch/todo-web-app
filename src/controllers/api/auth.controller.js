import { AppError } from "../../errors/app-errors.js";


export default class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    
    register = async (req, res) => {
        try {
            const { email, password } = req.body ?? {};
            
            const userId = await this.authService.register(email, password);
            
            req.session.userId = userId;
            
            return res.sendStatus(204);
        } catch (err) {
            if (err instanceof AppError) {
                res.status(err.status).json({ error: err.message });
            }
            else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    }
    
    login = async (req, res) => {
        try {
            const { email, password } = req.body ?? {};
            
            const userId = await this.authService.login(email, password);
            
            req.session.userId = userId;
            
            return res.sendStatus(204);
        }
        catch (err) {
            if (err instanceof AppError) {
                res.status(err.status).json({ error: err.message });
            }
            else {
                console.error(err);
                res.status(500).json({ error: "Internal server error" });
            }
        }
    }
}
