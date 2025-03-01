const userUseCase = require("../usecases/user.usecase");

class UserController {
  async createUser(req, res) {
    const { name, email } = req.body;
    const user = await userUseCase.createUser(name, email);
    res.json(user);
  }

  async getUsers(req, res) {
    const users = await userUseCase.getUsers();
    res.json(users);
  }

  async getUserById(req, res) {
    const { id } = req.params;
    const user = await userUseCase.getUserById(id);
    res.json(user);
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    await userUseCase.deleteUser(id);
    res.json({ message: "User deleted successfully" });
  }
}

module.exports = new UserController();
