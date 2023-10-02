import connection from "../db/connection.js";

class UsersRepository {
  findAll = async () => {
    const query = "SELECT * FROM users";
    const [users] = await connection.execute(query);
    return users;
  };

  findUserByEmailAndPassword = async (email, password) => {
    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    const [user] = await connection.execute(query, [email, password]);
    return user;
  };

  create = async (user) => {
    const query = "INSERT INTO users(name, email, password) VALUES (?,?,?)";
    const [createdUser] = await connection.execute(query, Object.values(user));
    return { insertId: createdUser.insertId };
  };
}

export default new UsersRepository();
