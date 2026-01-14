import htmlrl from "../../utils/html-renderer.js";

import { AppError } from "../../errors/app-errors.js";


export default class FrontendAuthController {
    constructor() {}
    
    signup = async (req, res) => {
        try {
            res.set("Content-Type", "text/html");
            res.send(await htmlrl.renderAsync("signup.html", {}));
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
    
    signin = async (req, res) => {
        try {
            res.set("Content-Type", "text/html");
            res.send(await htmlrl.renderAsync("signin.html", {}));
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
