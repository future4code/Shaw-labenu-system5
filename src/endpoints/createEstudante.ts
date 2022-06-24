import { Request, Response } from 'express'
import { EstudanteModel } from '../model/EstudanteModel'
import EstudantesDatabase from '../data/EstudantesDatabese'

export default async function Estudante(req: Request, res: Response): Promise<void> {
    try {
        const { nome, email, data_nasc, turma_id} = req.body
        const newDate = data_nasc.substr(0, 10).split('/').reverse().join('-')
        const estudante = new EstudanteModel(nome, email, newDate, turma_id )
        const estudanteDB = new EstudantesDatabase()
        await estudanteDB.insertEstudante(estudante)
        res.status(201).send("Estudante Criado!")
        console.log(data_nasc)
        console.log(newDate)
        console.log(estudante)

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}