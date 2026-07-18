import { Router } from "express";
import SingUpHandler from "../Controllers/SingUpHandler.js";
const SingUpRoute = Router();

SingUpRoute.route("/users/new")
.post(SingUpHandler)
export default SingUpRoute



 