import clientRepository from "../Repositorys/client.repository.js";

class ClientService {

  async create(userId, { name, phone, email }) {

    return clientRepository.create({
      name,
      phone,
      email,
      userId
    });

  }

  async list(userId) {
    return clientRepository.findAll(userId);
  }

  async getById(id) {

    const client = await clientRepository.findById(id);

    if (!client) {
      throw new Error("Cliente não encontrado");
    }

    return client;
  }

  async delete(id) {
    return clientRepository.delete(id);
  }

}

export default new ClientService();