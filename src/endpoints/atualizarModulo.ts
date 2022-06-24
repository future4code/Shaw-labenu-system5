import { Request, Response } from "express";
import { TurmaDataBase } from "../data/TurmaDataBase";

export default async function atualizarModulo(req: Request, res: Response): Promise<void> {
    try {
        const id = Number(req.params.id)
        const { modulo } = req.body
        const turmaDB = new TurmaDataBase()
        await turmaDB.mudarTurmaModulo(id, modulo)
        res.status(200).end("Atualizado!")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}