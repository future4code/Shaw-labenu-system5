import { TurmaModel } from '../model/TurmaModel';
import { BaseDataBase } from './BaseDataBase'

export class TurmaDataBase extends BaseDataBase {
    public async insert(turma: TurmaModel) {
        try {
            await BaseDataBase.connection("Turma")
                .insert({
                    // id: turma.getId(),
                    nome: turma.getNome(),
                    modulo: turma.getModulo()

                })
        } catch (error: any) {
            throw new Error("Erro inesperado")
        }
    }
}