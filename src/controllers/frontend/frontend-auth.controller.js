import htmlrl from "../../utils/html-renderer.js";

import { AppError } from "../../errors/app-errors.js";


export default class FrontendAuthController {
    constructor() {}
    
    signup = async (req, res) => {
        try {
            res.set("Content-Type", "text/html");
            res.send(await htmlrl.renderAsync("auth.html", {
                title: "Sign Up",
                action: "Create Account",
                formFooterUrl: "/signin",
                formFooterText: "Already have an account? Sign in"
            }));
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
            res.send(await htmlrl.renderAsync("auth.html", {
                title: "Sign In",
                action: "Sign in",
                formFooterUrl: "/signup",
                formFooterText: "No account yet? Sign up for free"
            }));
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
