export class TurmaModel {
    constructor(
        private nome: string,
        private modulo: string
    ) { }
   
    public getNome(): string {
        return this.nome
    }
    public getModulo(): string {
        return this.modulo
    }
}