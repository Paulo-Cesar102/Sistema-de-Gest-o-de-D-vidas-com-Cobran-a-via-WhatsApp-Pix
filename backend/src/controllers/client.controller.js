import clientService from "../service/client.service.js";

class ClientController {

  async create(req, res) {
    try {

      const client = await clientService.create(
        req.userId,
        req.body
      );

      return res.status(201).json(client);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async list(req, res) {
    try {

      const clients = await clientService.list(req.userId);

      return res.json(clients);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {

      const client = await clientService.getById(req.params.id);

      return res.json(client);

    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {

      await clientService.delete(req.params.id);

      return res.sendStatus(204);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

}

export default new ClientController();