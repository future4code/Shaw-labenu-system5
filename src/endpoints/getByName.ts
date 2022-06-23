import { Request, Response } from 'express'
import EstudantesDatabase  from '../data/EstudantesDatabese'

export default async function getByNameAll(req: Request, res: Response): Promise<void> {
    try {
        const {nome} = req.params
        console.log(nome)
        const studentDB = new EstudantesDatabase()
        const student = await studentDB.getByName(nome)
        res.status(200).send(student)
    } catch (error: any) {
        throw new Error("Socorro Deus")
    }
}