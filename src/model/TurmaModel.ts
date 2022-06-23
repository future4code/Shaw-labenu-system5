export class TurmaModel {
    constructor(
        private turma_id: number,
        private nome: string,
        private modulo: string
    ) { }
   
    public getNome(): string {
        return this.nome
    }
    public getModulo(): string {
        return this.modulo
    }
    public getTurma_id(): number{
        return this.turma_id
    }
}