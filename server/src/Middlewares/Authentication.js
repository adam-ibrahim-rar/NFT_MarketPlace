import jwt from "jsonwebtoken";
const Authentication = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  } else {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECKRET_KEY);
      if (payload) {
        req.user = payload;
        
        next();
      }
    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized or not user",
      });
    }
  }
};
export default Authentication;
