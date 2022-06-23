import { BaseDataBase } from "./BaseDataBase";

export default class DocentesDataBase extends BaseDataBase {
    public async getDocentes(){
        try {
            const result = await BaseDataBase.connection("Doscentes")
            .select("*")
            return result
        } catch (error: any) {
            console.log(error.sqlMessage || error.message)
        }
    }
}