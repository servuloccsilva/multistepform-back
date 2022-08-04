import { BaseDatabase } from "./BaseDataBase";

const TABLE_NAME = "MULTISTEPFORM";

export default class UserData extends BaseDatabase {
  
  public createUser = async (
    name: string,
    level: number,
    email: string,
    linkedin: string,
    github: string
  ): Promise<void> => {
    try {
      await this.getConnection()
        .insert({
          name,
          level,
          email,
          linkedin,
          github
        })
        .into(TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getUsers = async (): Promise<any> => {
    try {

      const result = await this.getConnection()
      .select("*")
      .from(TABLE_NAME)
      

      if(!result[0]){
        throw new Error("Sem usuários registrados");
      }

      return result;
      
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

}
