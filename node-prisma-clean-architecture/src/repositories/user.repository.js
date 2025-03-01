const prisma = require("../models/prismaClient");

class UserRepository {
  async createUser(name, email) {
    return await prisma.user.create({ data: { name, email } });
  }

  async getAllUsers() {
    return await prisma.user.findMany();
  }

  async getUserById(id) {
    return await prisma.user.findUnique({ where: { id: parseInt(id) } });
  }

  async deleteUser(id) {
    return await prisma.user.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = new UserRepository();
