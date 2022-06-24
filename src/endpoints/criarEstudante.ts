import { Request, Response } from 'express'
import { EstudanteModel } from '../model/EstudanteModel'
import EstudantesDatabase from '../data/EstudantesDatabese'

export default async function criarEstudante(req: Request, res: Response): Promise<void> {
    try {
        const { nome, email, data_nasc, turma_id} = req.body

        if(!nome || !email || !data_nasc || !turma_id){
            throw new Error("Favor preencher os campos corretamente")
        }
        
        const newDate = data_nasc.substr(0, 10).split('/').reverse().join('-')
        const estudante = new EstudanteModel(nome, email, newDate, turma_id )
        const estudanteDB = new EstudantesDatabase()
        await estudanteDB.inserirEstudante(estudante)

        res.status(201).send("Estudante Criado!")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}