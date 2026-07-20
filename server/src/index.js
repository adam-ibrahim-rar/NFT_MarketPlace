import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./moduels/User.moduel.js";
import bcrypt from "bcrypt";
import Connectdb from "./Config/db.js";
import SingUpRoute from "./Routes/SingUpRoute.js";
import LoginRoute from "./Routes/LoginRoute.js";
import LogoutRoute from "./Routes/LogoutRoute.js";
import cookieParser from "cookie-parser";
import UserRote from "./Routes/UserRoute.js";
import ProfileRoute from "./Routes/ProfileRoute.js";
dotenv.config();
const app = express();
const port = process.env.PORT;
Connectdb();

app.use(express.json());
app.use(cookieParser());
app.use("/api", SingUpRoute);
app.use("/api", LoginRoute);
app.use("/api", LogoutRoute);
app.use("/api", UserRote);
app.use("/api", ProfileRoute);
app.listen(port, (error) => {
  console.log(`server is listen on port: ${port}`);
});
