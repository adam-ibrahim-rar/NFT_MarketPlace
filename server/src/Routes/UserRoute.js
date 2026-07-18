import { Router } from "express";
import UserHandler from "../Controllers/UserHandler.js";
const UserRote = Router();

UserRote.route("/users")
.get(UserHandler.GetAllUsers)
export default UserRote



 