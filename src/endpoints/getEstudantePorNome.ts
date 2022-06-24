import { Request, Response } from 'express'
import EstudantesDatabase  from '../data/EstudantesDatabese'

export default async function getEstudantePorNome(req: Request, res: Response): Promise<void> {
    try {
        const {nome} = req.params
        const studentDB = new EstudantesDatabase()
        const student = await studentDB.getEstudantePorNome(nome)
        res.status(200).send(student)
    } catch (error: any) {
        res.send(error.message).status(404)
    }
}