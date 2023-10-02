import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyToken = (req, resp, next) => {
  const tokenHeader = req.headers["authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1];
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return resp.status(401).end();
    req.userId = decoded.userId;
    next();
  });
};

export default verifyToken;
