import { Router } from "express";
import LogoutHandler from "../Controllers/LogoutHandler.js";
import Authentication from "../Middlewares/Authentication.js";
const LogoutRoute = Router();


LogoutRoute.route("/Logout").post(Authentication,LogoutHandler);
export default LogoutRoute;
