import UsersRepository from "../repositories/UsersRepository.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

class UsersController {
  getAll = async (_req, resp) => {
    const users = await UsersRepository.findAll();
    return resp.status(200).json(users);
  };

  createUser = async (req, resp) => {
    const createdUser = await UsersRepository.create(req.body);
    return resp.status(201).json(createdUser);
  };

  userLogin = async (req, resp) => {
    const { email, password } = req.body;
    const getUser = await UsersRepository.findUserByEmailAndPassword(
      email,
      password
    );
    if (getUser.length) {
      const token = jwt.sign({ userId: getUser[0].id }, process.env.SECRET, {
        expiresIn: 3600,
      });
      return resp.status(200).json({ auth: true, token });
    }
    return resp.status(401).json({ message: "Incorrect username or password" });
  };
}

export default new UsersController();
