import userService from "../service/user.service.js";

class UserController {

  async register(req, res) {
    try {
      const user = await userService.register(req.body)
      return res.status(201).json(user)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async login(req, res) {
    try {
      const data = await userService.login(req.body)
      return res.json(data)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async getProfile(req, res) {
    try{
      const user = await userService.getProfile(req.userId);
      return res.json(user);
    }catch (error){
      return res.status(400).json({error: error.message})
    }

  }

}

export default new UserController()