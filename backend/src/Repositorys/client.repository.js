import prisma from "../database/prismaClient.js";

class ClientRepository {

  create(data) {
    return prisma.client.create({
      data
    });
  }

  findAll(userId) {
    return prisma.client.findMany({
      where: { userId }
    });
  }

  findById(id) {
    return prisma.client.findUnique({
      where: { id }
    });
  }

  delete(id) {
    return prisma.client.delete({
      where: { id }
    });
  }

}

export default new ClientRepository();