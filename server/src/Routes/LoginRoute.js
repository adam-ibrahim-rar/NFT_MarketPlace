import { Router } from "express";
import LoginHandler from "../Controllers/LoginHandler.js"
const LoginRoute = Router();

LoginRoute.route("/users/login")
.post(LoginHandler)
export default LoginRoute