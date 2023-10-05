import UsersRepository from "../../repositories/UsersRepository.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

async function loginController(req, res) {
  try {
    const { email, password } = req.body;
    const getUser = await UsersRepository.findUserByEmailAndPassword(
      email,
      password
    );
    if (getUser.length) {
      const token = jwt.sign({ userId: getUser[0].id }, process.env.SECRET, {
        expiresIn: 3600,
      });
      return res.status(200).json({ auth: true, token });
    }
    return res.status(401).json({ message: "Incorrect username or password" });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: "server error" });
  }
}

export default loginController;
