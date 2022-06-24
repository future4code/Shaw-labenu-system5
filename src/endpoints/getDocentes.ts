import { Request, Response } from 'express'
import DocentesDataBase from '../data/DocenteDataBase'

export default async function getDocentes(req: Request, res: Response): Promise<void> {
    try {
        const docenteDB = new DocentesDataBase()
        const docentes = await docenteDB.getDocentes()
        res.status(200).send(docentes)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}