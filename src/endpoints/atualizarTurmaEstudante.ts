import { Request, Response } from "express";
import EstudantesDatabase from "../data/EstudantesDatabese";

export default async function atualizarTurmaEstudante(req:Request, res: Response): Promise<void> {
    try {
        const id = Number(req.params.id)
        const {turma_id} = req.body

        const estudanteDB = new EstudantesDatabase()
        await estudanteDB.mudarTurma(id, turma_id)

        res.status(200).end('Atualizado')
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}