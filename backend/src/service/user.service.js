import userRepository from "../Repositorys/user.repository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserService {

  
  async register({ name, email, password }) {

    const userExists = await userRepository.findByEmail(email);

    if (userExists) {
      throw new Error("Email já cadastrado");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userRepository.create({
      name,
      email,
      password: hashedPassword
    });

    return user;
  }

  async login({ email, password }) {

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email ou senha inválidos");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email ou senha inválidos");
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return { user, token };
  }
  async getProfile(userId) {

  const user = await userRepository.findById(userId);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt
  };
}
}

export default new UserService();