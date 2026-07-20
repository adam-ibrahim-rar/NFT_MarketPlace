import { Router } from "express";
import ProfileHandler from "../Controllers/ProfileHandler.js";
import Authentication from "../Middlewares/Authentication.js";
const ProfileRoute = Router();

ProfileRoute.route("/profile").get(Authentication,ProfileHandler);
export default ProfileRoute;
