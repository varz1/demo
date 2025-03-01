const userRepository = require("../repositories/user.repository");

class UserUseCase {
  async createUser(name, email) {
    return await userRepository.createUser(name, email);
  }

  async getUsers() {
    return await userRepository.getAllUsers();
  }

  async getUserById(id) {
    return await userRepository.getUserById(id);
  }

  async deleteUser(id) {
    return await userRepository.deleteUser(id);
  }
}

module.exports = new UserUseCase();
