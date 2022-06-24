import { Request, Response } from "express";
import { TurmaDataBase } from "../data/TurmaDataBase";

export default async function acharTurmaAtiva(req: Request, res: Response) {
    try {
       const turmaDB = new TurmaDataBase()
       const turma = await turmaDB.acharTurmaAtiva()
       res.status(200).send(turma)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
}