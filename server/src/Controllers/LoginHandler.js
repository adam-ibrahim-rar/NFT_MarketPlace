import User from "../moduels/User.moduel.js";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
const LoginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Wrong password",
      });
    }
    const access_token = jwt.sign(
      { email, username: user.username },
      process.env.JWT_SECKRET_KEY,
    );
    res.cookie("access_token", access_token, { httpOnly: true});
    res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default LoginHandler;
