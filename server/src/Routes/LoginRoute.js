import { Router } from "express";
import LoginHandler from "../Controllers/LoginHandler.js";
const LoginRoute = Router();

LoginRoute.route("/users/Login").post(LoginHandler);
export default LoginRoute;
