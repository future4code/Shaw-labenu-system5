import { BaseDataBase } from "./BaseDataBase";

export default class EstudantesDatabase extends BaseDataBase {
    public async getByName(nome: string) {
        try {
            const result = await BaseDataBase.connection("Estudante")
            .select("*")
            .where('nome', 'like', `%${nome}%`)

            if(result.length == 0){
                throw new Error("Nome não encontrado")
            }

            return(result)
        } catch (error: any) {
            return("Erro inesperado")
        }
    }
}