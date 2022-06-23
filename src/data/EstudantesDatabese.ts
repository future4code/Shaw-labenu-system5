import { BaseDataBase } from "./BaseDataBase";
import { EstudanteModel } from "../model/EstudanteModel";

export default class EstudantesDatabase extends BaseDataBase {
    public async getByName(nome: string) {
        try {
            const result = await BaseDataBase.connection("Estudante")
            .select("*")
            .where('nome', 'like', `%${nome}%`)

            console.log(result)

            if(result.length == 0){
                throw new Error("Nome não encontrado")
            }

            return(result)
        } catch (error: any) {
            console.log(error.sqlMessage || error.message)
        }
    }

    public async insert(estudante: EstudanteModel) {
        try {
            await BaseDataBase.connection("Turma")
                .insert({
                    nome: estudante.getNome(),
                    email: estudante.getEmail(),
                    data_nasc: estudante.getDataNasc(),
                    // id_turma: estudante.getIdTurma()

                })
        } catch (error: any) {
            throw new Error("Erro inesperado")
        }
    }
}