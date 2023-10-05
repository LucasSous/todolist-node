import UsersRepository from "../../repositories/UsersRepository.js";

async function createUserController(req, res) {
  try {
    const createdUser = await UsersRepository.create(req.body);
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: "server error" });
  }
}

export default createUserController;
