import { TurmaModel } from '../model/TurmaModel';
import { BaseDataBase } from './BaseDataBase'

export class TurmaDataBase extends BaseDataBase {
    public async criarTurma(turma: TurmaModel) {
        try {
            await BaseDataBase.connection("Turma")
                .insert({
                    id: turma.getTurma_id(),
                    nome: turma.getNome(),
                    modulo: turma.getModulo()

                })
        } catch (error: any) {
            throw new Error("Erro inesperado")
        }
    }

    public async acharTurmaAtiva() {
        try {
            const result = await BaseDataBase.connection("Turma")
                .select('*')
                .where('modulo', '<>', `${0}`)

            return (result)
        } catch (error: any) {
            console.log("Erro inesperado")
        }
    }
    public async mudarTurmaModulo(id: number, modulo: string) {
        try {
            await BaseDataBase.connection("Turma")
            .update({
                modulo: modulo
            }).where ("id", id)
        } catch (error: any) {
            throw new Error("Erro inesperado")
        }
    }
}
