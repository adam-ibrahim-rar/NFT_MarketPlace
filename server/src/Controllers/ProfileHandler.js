const ProfileHandler = async (req, res) => {
  res.status(200).json(req.user);
};

export default ProfileHandler;
