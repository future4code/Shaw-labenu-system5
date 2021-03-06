import { Request, Response } from 'express'
import DocentesDataBase from '../data/DocenteDataBase'

export default async function atualizarDocenteTurma(req: Request, res: Response): Promise<void> {
    try {
        const id = Number(req.params.id)
        const { turma_id } = req.body

        if(!id || !turma_id){
            throw new Error("Favor preencher os ID's corretamente");
        }
        
        const docenteDB = new DocentesDataBase()
        await docenteDB.mudarDocenteTurma(id, turma_id)
        res.status(200).end("Atualizado!")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}