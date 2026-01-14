import htmlrl from "../../utils/html-renderer.js";

import { AppError } from "../../errors/app-errors.js";


export default class LandingPageController {
    constructor() {}
    
    landingPage = async (req, res) => {
        try {
            res.set("Content-Type", "text/html");
            res.send(await htmlrl.renderAsync("index.html", {}));
        } catch(err) {
            if (err instanceof AppError) {
                res.status(err.status).json({ error: err.message });
            }
            else {
                if (err instanceof AppError) {
                    res.status(err.status).json({ error: err.message });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        }
    }
}
