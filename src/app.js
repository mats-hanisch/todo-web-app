// load env vars
import "dotenv/config";


import path from "path";
import { fileURLToPath } from "url";

import express from 'express';
import morgan from "morgan";

import logger from "./utils/logger.js";

import sessionMiddleware from "./middlewares/session.middleware.js";
import authMiddleware from "./middlewares/auth.middleware.js";
import errorHandlerMiddleware from "./middlewares/error-handler.middleware.js";

import UserRepo from "./repos/user.repo.js";
import TodoRepo from "./repos/todo.repo.js";

import LandingPageController from "./controllers/frontend/landing-page.controller.js";
import mapLandingPageRoutes from "./routes/frontend/landing-page.routes.js";

import AuthService from "./services/auth.service.js";
import FrontendAuthController from "./controllers/frontend/frontend-auth.controller.js";
import AuthController from "./controllers/api/auth.controller.js";
import mapFrontendAuthRoutes from "./routes/frontend/frontend-auth.routes.js";
import mapAuthRoutes from "./routes/api/auth.routes.js";

import TodoService from "./services/todo.service.js";
import FrontendTodoController from "./controllers/frontend/frontend-todo.controller.js";
import TodoController from "./controllers/api/todo.controller.js";
import mapFrontendTodoRoutes from "./routes/frontend/frontend-todo.routes.js";
import mapTodoRoutes from "./routes/api/todo.routes.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();


const userRepo = new UserRepo();
const todoRepo = new TodoRepo();


// use morgan to log requests -> pass on to winston logger
app.use(morgan("combined", { stream: { write: msg => logger.info(msg.trim()) } }))

// use json parsing
app.use(express.json());

// use static files
app.use(express.static(path.join(__dirname, "..", "public")));

// use session middleware
app.use(sessionMiddleware);


// landing page
const landingPageController = new LandingPageController();
const landingPageRoutes = mapLandingPageRoutes(landingPageController);

app.use(landingPageRoutes);

// auth
const authService = new AuthService(userRepo);
const frontendAuthController = new FrontendAuthController();
const authController = new AuthController(authService);
const frontendAuthRoutes = mapFrontendAuthRoutes(frontendAuthController);
const authRoutes = mapAuthRoutes(authController);

app.use(frontendAuthRoutes);
app.use("/api/auth", authRoutes);

// todo
const todoService = new TodoService(todoRepo);
const frontendTodoController = new FrontendTodoController(todoService);
const todoController = new TodoController(todoService);
const frontendTodoRoutes = mapFrontendTodoRoutes(frontendTodoController);
const todoRoutes = mapTodoRoutes(todoController);

app.use(authMiddleware, frontendTodoRoutes);
app.use("/api/todos", authMiddleware, todoRoutes);


// handle invalid routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// use error handling middleware
app.use(errorHandlerMiddleware);


export default app;
