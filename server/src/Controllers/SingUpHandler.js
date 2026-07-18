import User from "../moduels/User.moduel.js";
import bcrypt from "bcrypt";
const SingUpHandler = async (req, res) => {
  try {
    const { username, email, password, confirm_password } = req.body;
    if (password !== confirm_password) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }
    const userByUsername = await User.findOne({ username });
    if (userByUsername) {
      return res.status(409).json({
        message: "username already used",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default SingUpHandler