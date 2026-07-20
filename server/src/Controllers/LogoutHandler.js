
const LogoutHandler = async (req, res) => {
  res.clearCookie("access_token");

  res.status(200).json({
    message: "Logout successful",
  });
};

export default LogoutHandler;
