export class DocenteModel {
    constructor (
        private nome: string,
        private email: string,
        private data_nasc: Date,
        private turma_id: number
    ){}

    public getNome(){
        return this.nome
    }
    public getEmail(){
        return this.email
    }
    public getDataNasc(){
        return this.data_nasc
    }
    public getTurmaId(){
        return this.turma_id
    }
}