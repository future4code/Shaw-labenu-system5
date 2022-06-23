import { Request, Response } from 'express'
import { EstudanteModel } from '../model/EstudanteModel'
import EstudantesDatabase from '../data/EstudantesDatabese'

export default async function Estudante(req: Request, res: Response): Promise<void> {
    try {
        const { nome, email, data_nasc, turma_id} = req.body
        const estudante = new EstudanteModel(nome, email, data_nasc,  turma_id )
        const estudanteDB = new EstudantesDatabase()
        await estudanteDB.insertEstudante(estudante)
        res.status(201).send("Estudante Criado!")

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}