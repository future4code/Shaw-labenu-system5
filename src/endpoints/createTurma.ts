import { Request, Response } from 'express'
import { TurmaModel } from '../model/TurmaModel'
import { TurmaDataBase } from '../data/TurmaDataBase'

export default async function createTurma(req: Request, res: Response): Promise<void> {
    try {
        const { turma_id, nome, modulo } = req.body
        const turma = new TurmaModel(turma_id, nome, modulo)
        const turmaDB = new TurmaDataBase()
        await turmaDB.insert(turma)
        res.status(201).send("Turma Criada!")

    } catch (error: any) {
        res.status(500).end()
    }
}