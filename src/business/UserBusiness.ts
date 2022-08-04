import UserData from "../data/UserData";
import { BaseError } from "../error/BaseError";
import { user } from "../types/user";

const userDB = new UserData();

export class UserBusiness {
  constructor(public userData: UserData) {}

  async createUser(user: user) {
    try {
      const { name, level, email, linkedin, github } = user;

      if (!name || !level || !email || !linkedin || !github) {
        throw new BaseError(422, "Por favor preencha todos os campos");
      }

      return await userDB.createUser(
        user.name,
        user.level,
        user.email,
        user.linkedin,
        user.github
      );
    } catch (error: any) {
      throw new Error(error.message || "Erro ao criar usuário");
    }
  }

  async getUsers() {
    const usersFromDB = await userDB.getUsers();

    return usersFromDB;
  }
 

}
