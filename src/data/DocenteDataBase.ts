import { DocenteModel } from "../model/DocenteModel";
import { BaseDataBase } from "./BaseDataBase";

export default class DocentesDataBase extends BaseDataBase {
    public async getDocentes(){
        try {
            const result = await BaseDataBase.connection("Doscentes")
            .select("*")
            return result
        } catch (error: any) {
            throw new Error("Erro inesperado, verificar requisição")
        }
    }

    public async criarDocente(docente: DocenteModel) {
        try {
            await BaseDataBase.connection("Doscentes")
                .insert({
                    nome: docente.getNome(),
                    email: docente.getEmail(),
                    data_nasc: docente.getDataNasc(),
                    turma_id: docente.getTurmaId()
                })
        } catch (error: any) {
            throw new Error("Erro inesperado, verificar informações passadas");
            
        }
    }
    public async mudarDocenteTurma(id: number, turma_id: number) {
        try {
            await BaseDataBase.connection("Doscentes")
            .update({
                turma_id: turma_id
            }).where("id", id)
        } catch (error: any) {
            throw new Error("Erro inesperado, verificar informações passadas")
        }
    }
}