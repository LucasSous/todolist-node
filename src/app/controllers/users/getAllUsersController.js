import UsersRepository from "../../repositories/UsersRepository.js";

async function getAllUsersController(_req, res) {
  try {
    const users = await UsersRepository.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: "server error" });
  }
}

export default getAllUsersController;
