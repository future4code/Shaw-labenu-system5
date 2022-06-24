import { BaseDataBase } from "./BaseDataBase";
import { EstudanteModel } from "../model/EstudanteModel";

export default class EstudantesDatabase extends BaseDataBase {
    public async getEstudantePorNome(nome: string) {
        try {
            const result = await BaseDataBase.connection("Estudante")
            .select("*")
            .where('nome', 'like', `%${nome}%`)

            if(result.length == 0){
                throw new Error("Nome não encontrado")
            }

            return(result)
        } catch (error: any) {
            throw new Error("Erro inesperado, verificar informações passadas")
        }
    }

    public async inserirEstudante(estudante: EstudanteModel) {
        try {
            await BaseDataBase.connection("Estudante")
                .insert({
                    nome: estudante.getNome(),
                    email: estudante.getEmail(),
                    data_nasc: estudante.getDataNasc(),
                    turma_id: estudante.getIdTurma()

                })
        } catch (error: any) {
            throw new Error("Erro inesperado, verificar informações passadas")
        }
    }

    public async mudarTurma(id: number, turma_id: number) {
        try {
            await BaseDataBase.connection("Estudante")
            .update({
                turma_id: turma_id
            })
            .where("id", id)
        } catch (error: any) {
            throw new Error("Erro inesperado, verificar informações passadas")
        }
    }
}