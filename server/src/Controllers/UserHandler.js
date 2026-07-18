import User from "../moduels/User.moduel.js";

class UserHandler {
  static async GetAllUsers(req, res) {
    try {
      const users = await User.find({}, "email username TotalSales -_id");

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default UserHandler;
