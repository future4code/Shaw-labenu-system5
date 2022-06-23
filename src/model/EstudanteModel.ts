import { TurmaModel } from "./TurmaModel"

export class EstudanteModel {
    constructor(
        private nome: string,
        private email: string, 
        private data_nasc: Date,
        private turma_id: number
    ) { }
   
    public getNome(): string {
        return this.nome
    }
    public getEmail(): string {
        return this.email
    }
    public getDataNasc(): Date {
        return this.data_nasc
    }
    public getIdTurma(): number {
        return this.turma_id
    }
}