import { DocenteModel } from "../model/DocenteModel";
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

    public async insertDocente(docente: DocenteModel) {
        try {
            await BaseDataBase.connection("Doscentes")
                .insert({
                    nome: docente.getNome(),
                    email: docente.getEmail(),
                    data_nasc: docente.getDataNasc(),
                    turma_id: docente.getTurmaId()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
}